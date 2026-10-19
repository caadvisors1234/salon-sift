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
      "name": "群馬で美容師パート・アルバイトはどのくらい稼げますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "時給1,500円〜からスタートできます。経験やスキルに応じた給与設定で、歩合制度もあるため頑張りに応じて収入アップが可能です。具体的な収入シミュレーションはLINEでお気軽にご相談ください。"
      }
    },
    {
      "@type": "Question",
      "name": "扶養範囲内で働けますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、扶養範囲内での勤務も大歓迎です。年収が一定ラインを超えそうな場合は事前にご相談いただければ、働き方の調整にも柔軟に対応します。詳しくはLINEにてご相談ください。"
      }
    },
    {
      "@type": "Question",
      "name": "シフトはどのくらい柔軟ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "勤務時間や日数は柔軟に設定できます。プライベートや家庭との両立もしやすい環境です。詳しい条件はLINEにてご相談ください。"
      }
    }
  ]
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "群馬の美容師パート・アルバイト求人",
  "description": "群馬県高崎市の美容師パート・アルバイト求人。時給1,500円〜・柔軟なシフト・扶養範囲OK。詳しい条件はLINEにてご案内します。",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "SALON SIFT",
    "sameAs": "https://salon-sift.vercel.app"
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
  "employmentType": "PART_TIME",
  "industry": "美容・理容",
  "datePosted": "2025-06-01",
};

const PartTimePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="群馬の美容師 パート・アルバイト求人｜時給1,500円〜・柔軟シフト"
        description="群馬（高崎）で美容師のパート・アルバイト求人をお探しの方へ。SALON SIFTでは時給1,500円〜・柔軟なシフト・扶養範囲内OK。プライベートと両立しながら働けます。詳しくはLINEでご相談ください。"
        canonical="/work/parttime"
        structuredData={[jobPostingSchema, faqSchema]}
      />

      <div className="bg-[#f7f7f5] min-h-screen pt-20">

        {/* Hero */}
        <div className="bg-[#3a533d] text-white py-20 md:py-32 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-widest text-green-300 mb-4 uppercase">Working Style / <BreakText text="パート・アルバイト" /></p>
            <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest mb-6 leading-tight">
              <BreakText text="群馬・|高崎の美容師" /><br /><BreakText text="パート・アルバイト|求人" />
            </h1>
            <p className="text-base md:text-lg text-green-100 leading-relaxed max-w-2xl">
              <BreakText text="群馬で美容師の|パート・アルバイト求人を|お探しの方へ。" /><br />
              <BreakText text="時給1,500円〜・|柔軟なシフト設定で、" /><br className="hidden md:block" />
              <BreakText text="プライベートや家庭と|両立しながら|無理なく働けます。" />
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

        {/* パート・アルバイトとは */}
        <div className="py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">About</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"><BreakText text="SALON SIFTの|パート・アルバイトとは" /></h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-10 max-w-2xl">
              「週に数日だけ働きたい」「扶養範囲内で無理なく続けたい」という方に最適な働き方です。
              時給1,500円〜スタートで、経験・スキルに応じた給与設定。
              シフトや勤務時間は柔軟に設定でき、試用期間なしで安心してスタートできます。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: '時給', value: '1,500円〜', detail: '経験・スキルに応じた給与設定。歩合制度もあり、頑張りに応じて収入アップが可能です。' },
                { label: 'シフト', value: '柔軟に設定', detail: '勤務日数・時間はご相談に応じます。プライベートや家庭との両立もOKです。' },
                { label: '扶養', value: '扶養範囲OK', detail: '年収が一定ラインを超えそうな場合は事前にご相談いただければ柔軟に対応します。' },
                { label: '試用期間', value: 'なし', detail: '試用期間なしでスタートできます。長く安心して働けるようサポート体制も整っています。' },
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"><BreakText text="パート・アルバイト vs |正社員 vs |業務委託" /></h2>
            <p className="text-sm text-gray-500 mb-10">あなたのライフスタイルと目標に合った働き方を選べます。</p>
            <p className="md:hidden text-[11px] text-gray-400 mb-2">※表は横にスクロールできます</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] md:min-w-0 max-md:whitespace-nowrap text-sm border-collapse">
                <thead>
                  <tr className="bg-[#3a533d] text-white">
                    <th className="py-4 px-6 text-left font-bold tracking-widest">比較項目</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest bg-[#4a6b4e]">★ パート・アルバイト</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest">正社員</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest">業務委託（フリーランス）</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['収入の安定性', '◎ 時給保証', '◎ 保証制度あり', '△ 売上次第'],
                    ['時給・報酬', '時給1,500円〜', '固定給＋歩合', '詳しくはLINEで'],
                    ['シフト', '◎ 柔軟', '○ 応相談', '◎ 自由出勤'],
                    ['扶養範囲', '◎ 対応OK', '× 対象外', '× 対象外'],
                    ['副業・掛け持ち', '◎ 相談可', '× 不可', '◎ 可'],
                    ['こんな方に', '家庭・副業・復帰', '転職者・安定重視', '実績者・高収入志向'],
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
            <p className="text-xs text-gray-400 mt-4">※詳しい条件・給与はLINEにてご案内します。</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/work/seishain" className="text-[#3a533d] font-bold text-sm border-b border-[#3a533d] hover:opacity-70 transition-opacity">正社員求人の詳細 →</Link>
              <Link to="/work/gyoumuitaku" className="text-[#3a533d] font-bold text-sm border-b border-[#3a533d] hover:opacity-70 transition-opacity">業務委託（フリーランス）求人の詳細 →</Link>
            </div>
          </div>
        </div>

        {/* こんな方に */}
        <div className="py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">For Who</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10"><BreakText text="こんな方に|パート・アルバイトが|おすすめ" /></h2>
            <div className="space-y-4">
              {[
                '育児・家事と両立しながら、無理なく働きたい方',
                '扶養範囲内で安心して収入を得たい方',
                '週2〜3日など、少ない日数から始めたい方',
                'ブランク明けで、まず短時間から美容師として復帰したい方',
                '他の仕事と掛け持ちしながら、美容師として経験を積みたい方',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-5 border border-gray-100">
                  <CheckCircle className="text-[#3a533d] shrink-0 mt-0.5" size={20} />
                  <p className="text-sm text-gray-700 font-bold leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 待遇詳細 */}
        <div className="bg-white py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">Benefits</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">待遇・福利厚生</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: '💴', label: '時給', detail: '時給1,500円〜（経験・スキルにより応相談）' },
                { icon: '🗓️', label: 'シフト', detail: '勤務日数・時間は柔軟に設定。週2日〜相談OK' },
                { icon: '👨‍👩‍👧', label: '扶養対応', detail: '扶養範囲内での勤務OK。年収調整も事前相談可能' },
                { icon: '🚃', label: '交通費', detail: '交通費支給あり（詳細はLINEにて）' },
                { icon: '🏥', label: '社会保険', detail: '社会保険完備（勤務条件による）' },
                { icon: '🎁', label: 'ボーナス', detail: '寸志ボーナス・賞与あり、歩合制あり' },
                { icon: '✂️', label: 'スタッフ割引', detail: 'スタッフ家族割引制度あり' },
                { icon: '📚', label: '教育制度', detail: 'レッスン・勉強会は自由参加。自分のペースでスキルアップ可' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 border border-gray-100 p-5">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">{item.label}</p>
                    <p className="text-sm text-gray-700 font-bold leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Q&A */}
        <div className="py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">Q&A</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10"><BreakText text="パート・アルバイト求人 |よくある質問" /></h2>
            <div className="space-y-6">
              {[
                { q: '群馬で美容師パート・アルバイトはどのくらい稼げますか？', a: '時給1,500円〜からスタートできます。経験・スキルに応じた給与設定で、歩合制度もあるため頑張りに応じて収入アップが可能です。具体的な条件はLINEでお気軽にどうぞ。' },
                { q: '扶養範囲内で働けますか？', a: 'はい、扶養範囲内での勤務も大歓迎です。年収が一定ラインを超えそうな場合は事前にご相談いただければ、働き方の調整にも柔軟に対応します。' },
                { q: 'シフトはどのくらい柔軟ですか？', a: '勤務時間や日数は柔軟に設定できます。週2日〜など少ない日数からでもOKです。プライベートや家庭との両立を大切にしながら、長く安心して続けられる環境を整えています。' },
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
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat tracking-widest mb-4"><BreakText text="自分のペースで、|群馬で|美容師として働く" /></h2>
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

export default PartTimePage;
