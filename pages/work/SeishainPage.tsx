import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import BreakText from '../../components/BreakText';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "群馬の美容師正社員求人の特徴は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SALON SIFTの正社員は、安定した収入保証に加え、売上に応じた歩合が支給されます。シフトも応相談で、転職者や育休明けの方も歓迎しています。詳しい条件はLINEよりお問い合わせください。"
      }
    },
    {
      "@type": "Question",
      "name": "業務委託とどちらがいいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "収入の安定を優先するなら正社員、売上に応じて高く稼ぎたいなら業務委託・フリーランスがおすすめです。詳しい条件・違いはLINEにてお気軽にご相談ください。"
      }
    },
    {
      "@type": "Question",
      "name": "正社員でも高収入は実現できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。正社員でも売上連動の歩合制度があり、指名客が増えるほど収入が伸びます。具体的な収入シミュレーションはLINEでご相談ください。"
      }
    }
  ]
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "群馬の美容師正社員求人",
  "description": "群馬県高崎市の美容師正社員求人。安定した収入保証・売上連動歩合・集客費サロン負担。詳しい条件はLINEにてご案内します。",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "SALON SIFT",
    "sameAs": "https://salon-sift.com"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "postalCode": "370-0004",
      "addressRegion": "群馬県",
      "addressLocality": "高崎市",
      "streetAddress": "井野町1122",
      "addressCountry": "JP"
    }
  },
  "employmentType": "FULL_TIME",
  "industry": "美容・理容",
  "datePosted": "2025-06-01",
};

const SeishainPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="群馬の美容師 正社員求人｜安定収入保証・高崎エリア募集"
        description="群馬（高崎）で美容師の正社員求人をお探しの方へ。SALON SIFTでは安定した収入保証・売上連動歩合・集客費サロン全額負担。転職者・育休明けの方も歓迎。詳しくはLINEでご相談ください。"
        canonical="/work/seishain"
        structuredData={[jobPostingSchema, faqSchema]}
      />

      <div className="bg-[#f7f7f5] min-h-screen pt-20">

        {/* Hero */}
        <div className="bg-[#3a533d] text-white py-20 md:py-32 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-widest text-green-300 mb-4 uppercase">Working Style / 正社員</p>
            <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest mb-6 leading-tight">
              <BreakText text="群馬・|高崎の美容師" /><br />正社員求人
            </h1>
            <p className="text-base md:text-lg text-green-100 leading-relaxed max-w-2xl">
              <BreakText text="群馬で美容師の正社員求人を|お探しの方へ。" /><br />
              <BreakText text="高崎市井野町（井野駅）の店舗で、|正社員・|業務委託・|フリーランスまで" /><br className="hidden md:block" />
              <BreakText text="幅広い働き方をご用意。|安定した収入で|美容師キャリアを|再設計できます。" />
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://line.me/ti/p/e-XjwdEpaa" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-[#3a533d] font-bold tracking-widest px-8 py-4 hover:bg-green-50 transition-colors">
                LINEで無料相談 <ArrowRight size={18} className="ml-2" />
              </a>
              <Link to="/simulation"
                className="inline-flex items-center border border-white text-white font-bold tracking-widest px-8 py-4 hover:bg-white/10 transition-colors">
                収益シミュレーション
              </Link>
            </div>
          </div>
        </div>

        {/* 正社員とは */}
        <div className="py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">About</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"><BreakText text="SALON SIFTの|正社員とは" /></h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-10 max-w-2xl">
              「一般的なサロンの正社員」と「SALON SIFTの正社員」は根本的に違います。
              収入の安定を担保しながら、売上に連動した歩合で、成果が収入に反映される仕組みを採用しています。
              詳しい還元率・保証条件はLINEにてご案内します。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: '収入の安定性', value: '保証制度あり', detail: '顧客ゼロからスタートしても安心して働ける保証制度があります。詳細はLINEでご確認ください。' },
                { label: '歩合制度', value: '売上連動', detail: '正社員でも高い歩合率を設定。指名客が増えるほど収入が伸びます。' },
                { label: '集客サポート', value: '100%サロン負担', detail: 'ホットペッパービューティー最上位プランの集客費はサロンが全額負担。' },
                { label: 'シフト', value: '応相談', detail: '出勤曜日・時間はご相談に応じます。育児中の方も歓迎しています。' },
              ].map(item => (
                <div key={item.label} className="flex gap-6 border border-gray-100 p-6 bg-white">
                  <div className="shrink-0"><Star className="text-[#3a533d]" size={24} /></div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">{item.label}</p>
                    <p className="text-2xl font-bold text-[#3a533d] mb-2">{item.value}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 比較表 */}
        <div className="bg-white py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">Comparison</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"><BreakText text="正社員 vs |業務委託 vs |フリーランス" /></h2>
            <p className="text-sm text-gray-500 mb-10">あなたのライフスタイルと目標に合った働き方を選べます。</p>
            <p className="md:hidden text-[11px] text-gray-400 mb-2">※表は横にスクロールできます</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] md:min-w-0 max-md:whitespace-nowrap text-sm border-collapse">
                <thead>
                  <tr className="bg-[#3a533d] text-white">
                    <th className="py-4 px-6 text-left font-bold tracking-widest">比較項目</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest bg-[#4a6b4e]">★ 正社員</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest">業務委託</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest">フリーランス</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['収入の安定性', '◎ 保証制度あり', '△ 売上次第', '△ 売上次第'],
                    ['還元率', '固定給＋歩合', '詳しくはLINEで', '詳しくはLINEで'],
                    ['シフト', '○ 応相談', '◎ 自由出勤', '◎ 完全自由'],
                    ['集客サポート', '◎ あり', '◎ あり', '◎ あり'],
                    ['副業・掛け持ち', '× 不可', '◎ 可', '◎ 可'],
                    ['こんな方に', '転職者・安定重視', '経験者・副業も', '独立志向・高収入'],
                  ].map(([label, ...vals], i) => (
                    <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f7f7f5]'}>
                      <td className="py-3 px-6 font-bold text-gray-700">{label}</td>
                      {vals.map((v, j) => (
                        <td key={j} className={`py-3 px-6 text-center ${j === 0 ? 'font-bold text-[#3a533d]' : 'text-gray-600'}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4">※詳しい条件・還元率はLINEにてご案内します。</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/work/gyoumuitaku" className="text-[#3a533d] font-bold text-sm border-b border-[#3a533d] hover:opacity-70 transition-opacity">業務委託求人の詳細 →</Link>
              <Link to="/work/freelance" className="text-[#3a533d] font-bold text-sm border-b border-[#3a533d] hover:opacity-70 transition-opacity">フリーランス求人の詳細 →</Link>
            </div>
          </div>
        </div>

        {/* こんな方に */}
        <div className="py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">For Who</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10"><BreakText text="こんな方に|正社員が|おすすめ" /></h2>
            <div className="space-y-4">
              {[
                '他サロンからの転職で、まず安定した収入基盤を確保したい方',
                '育休明けで、安定した雇用環境で復帰したい方',
                '顧客ゼロからスタートしたいが、安心できる保証が必要な方',
                '独立志向があるが、まずはサロンの仕組みとノウハウを学びたい方',
                '副業・Wワークではなく、腰を据えてキャリアを築きたい方',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-5 border border-gray-100">
                  <CheckCircle className="text-[#3a533d] shrink-0 mt-0.5" size={20} />
                  <p className="text-sm text-gray-700 font-bold leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Q&A */}
        <div className="bg-white py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">Q&A</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10"><BreakText text="正社員求人 |よくある質問" /></h2>
            <div className="space-y-6">
              {[
                { q: '群馬の美容師正社員求人の特徴は？', a: 'SALON SIFTの正社員は安定した収入保証に加え、売上に応じた高い歩合が支給されます。シフトも応相談で、転職者や育休明けの方に特におすすめです。詳しい条件はLINEよりお問い合わせください。' },
                { q: '業務委託とどちらがいいですか？', a: '収入の安定を優先するなら正社員、売上に応じて高く稼ぎたいなら業務委託・フリーランスがおすすめです。どちらが向いているか、LINEでご相談いただければ詳しくお伝えします。' },
                { q: '正社員でも高収入は実現できますか？', a: 'はい。正社員でも売上連動の歩合制度があり、指名客が増えるほど収入が伸びます。具体的な収入シミュレーションはLINEでご相談ください。' },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 p-6">
                  <p className="font-bold text-gray-900 mb-3">Q. <BreakText text={`${item.q.slice(0, -4)}|${item.q.slice(-4)}`} /></p>
                  <p className="text-sm text-gray-600 leading-relaxed"><span className="text-[#3a533d] font-bold mr-2">A.</span>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 md:py-24 px-6 bg-[#3a533d] text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat tracking-widest mb-4"><BreakText text="正社員として、|群馬で|美容師キャリアを|再設計する" /></h2>
          <p className="text-green-100 text-sm mb-10">まずはLINEで気軽にご相談ください。見学・面談は無料です。</p>
          <a href="https://line.me/ti/p/e-XjwdEpaa" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#3a533d] font-bold tracking-widest px-10 py-5 hover:bg-green-50 transition-colors">
            <BreakText text="LINEで|無料相談・|見学予約" /> <ArrowRight size={20} className="ml-3" />
          </a>
        </div>

      </div>
    </>
  );
};

export default SeishainPage;
