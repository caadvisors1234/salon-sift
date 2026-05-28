// ビルド時プリレンダリング（SSG）
// client ビルド成果物 dist/index.html をテンプレに、各静的ルートを
// renderToString して dist/<route>/index.html を書き出す。
// microCMS には一切アクセスしない（一覧/記事の中身は実行時に /api/microcms/* から取得）。
//
// React 19 は <title>/<meta>/<link>/JSON-LD script を renderToString 出力の先頭へ
// 巻き上げる（react-helmet-async@3 は React 19 検出時に passthrough になり、これらを
// 実DOM要素としてレンダリングする）。そこで描画結果から head 材料を抜き出して <head> へ移し、
// 残り（h1 等の本文）を #root に入れる。これは hydration 的にも正しい
// （クライアントでも React 19 が同じ要素を head へ巻き上げ #root には残さないため一致する）。
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

// SSR ビルド成果物（vite build --ssr entry-server.tsx --outDir dist-ssr）
const { render } = await import(
  url.pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
);

// プリレンダ対象 = microCMS 非依存の固定ページ + 一覧ページのシェル。
// 個別記事ページ（/blog/:slug, /voice/:slug）は対象外（SPAフォールバックでCSR）。
const routes = [
  '/',
  '/about',
  '/simulation',
  '/voice',
  '/salons',
  '/blog',
  '/faq',
  '/area/takasaki',
  '/work/seishain',
  '/work/gyoumuitaku',
  '/work/freelance',
  '/work/parttime',
];

// 描画結果から head 材料（title/meta/link/JSON-LD）を抜き出し、本文と分離する。
function splitHead(html) {
  const head = [];
  let titleTaken = false;
  let body = html
    // <title> は1個だけ採用（複数あっても重複させない）
    .replace(/<title>[\s\S]*?<\/title>/g, (m) => {
      if (titleTaken) return '';
      titleTaken = true;
      head.push(m);
      return '';
    })
    // JSON-LD（type を持つので meta/link より先に処理）
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, (m) => {
      head.push(m);
      return '';
    })
    // meta / link（React19 がすべて head 材料として巻き上げ済み）
    .replace(/<meta\b[^>]*>/g, (m) => {
      head.push(m);
      return '';
    })
    .replace(/<link\b[^>]*>/g, (m) => {
      head.push(m);
      return '';
    });

  return { head: head.join('\n'), body: body.trim() };
}

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// SPAフォールバック用の空シェル（#root が空・data-ssg なし）。
// 未プリレンダルート（/blog/:slug 等）は vercel.json の rewrite でこれに着地し、
// クライアントは createRoot で素のCSR描画する（hydrateしない→不一致もホームのフラッシュも起きない）。
fs.writeFileSync(path.join(distDir, 'app-shell.html'), template, 'utf-8');
console.log('wrote SPA fallback shell -> dist/app-shell.html');

for (const route of routes) {
  const { html } = render(route);
  const { head, body } = splitHead(html);

  const page = template
    // テンプレの静的 <title> を1個だけ除去（描画由来の <title> と重複させない）
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    // #root に本文（h1 等）を差し込む。data-ssg はクライアントに「hydrate せよ」の目印
    // （プリレンダ済みHTMLは当該URLでのみ配信されるため、data-ssg があれば必ず hydrate して安全）
    .replace('<div id="root"></div>', `<div id="root" data-ssg>${body}</div>`)
    // </head> 直前に title/meta/canonical/JSON-LD を注入
    .replace('</head>', `${head}\n</head>`);

  const outDir = route === '/' ? distDir : path.join(distDir, route);
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, 'index.html');
  fs.writeFileSync(outFile, page, 'utf-8');
  console.log(`prerendered: ${route} -> ${path.relative(root, outFile)}`);
}

console.log(`\n✅ prerender done: ${routes.length} routes`);
