import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "群馬で美容師業務委託はどのくらい稼げますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "指名客が多いほど収入は天井知らずに伸びます。具体的な収入シミュレーションはLINEにてお気軽にご相談ください。"
      }
    },
    {
      "@type": "Question",
      "name": "業務委託と正社員の違いは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "業務委託は売上に応じた高い還元率（最大80%・材料持ち込みでさらに優遇）が特徴で、シフトも自由です。ただし社会保険は自己負担で最低保証はありません。実績ある方や副業として掛け持ちしたい方に向いています。"
      }
    },
    {
      "@type": "Question",
      "name": "業務委託で集客はどうすればいいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SALON SIFTではホットペッパービューティー最上位プランの掲載費・SNS広告費をサロンが全額負担します。スタイリスト自身はSNS発信などのセルフブランディングに注力するだけで、強力な集客基盤を活用できます。"
      }
    }
  ]
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "群馬の美容師業務委託求人",
  "description": "群馬県（高崎・前橋）の美容師業務委託求人。最大80%の高還元率（材料持ち込みでさらに優遇）・自由シフト・集客費サロン負担。",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "SALON SIFT",
    "sameAs": "https://salon-sift.vercel.app"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "群馬県",
      "addressCountry": "JP"
    }
  },
  "employmentType": "CONTRACTOR",
  "industry": "美容・理容",
  "datePosted": "2025-06-01",
};

const GymuitakuPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="群馬の美容師 業務委託求人｜報酬率最大80%・自由シフト"
        description="群馬（高崎・前橋）で美容師の業務委託求人をお探しの方へ。SALON SIFTでは報酬率最大80%・材料持ち込みでさらに優遇・完全自由シフト・集客費サロン全額負担。副業・掛け持ちも歓迎。詳しくはLINEでご相談ください。"
        canonical="/work/gyoumuitaku"
        structuredData={[jobPostingSchema, faqSchema]}
      />

      <div className="bg-[#f7f7f5] min-h-screen pt-20">

        {/* Hero */}
        <div className="bg-[#3a533d] text-white py-20 md:py-32 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-widest text-green-300 mb-4 uppercase">Working Style / 業務委託</p>
            <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest mb-6 leading-tight">
              群馬・高崎・前橋の美容師<br />業務委託求人
            </h1>
            <p className="text-base md:text-lg text-green-100 leading-relaxed max-w-2xl">
              群馬で美容師の業務委託求人をお探しの方へ。<br />
              高崎・前橋エリアで報酬率最大80%・完全自由シフトで、<br className="hidden md:block" />
              自分の売上をそのまま収入に変える働き方を実現できます。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://line.me/ti/p/exrAW4jmt5" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-[#3a533d] font-bold tracking-widest px-8 py-4 hover:bg-green-50 transition-colors">
                LINEで無料相談 <ArrowRight size={18} className="ml-2" />
              </a>
              <Link to="/simulation"
                className="inline-flex items-center border border-white text-white font-bold tracking-widest px-8 py-4 hover:bg-white/10 transition-colors">
                収入シミュレーション
              </Link>
            </div>
          </div>
        </div>

        {/* 業務委託とは */}
        <div className="py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">About</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">SALON SIFTの業務委託とは</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-10 max-w-2xl">
              業務委託はサロンと雇用関係を結ばず、個人事業主として働く形態です。
              報酬率は最大80%。さらに材料をご自身で用意する場合は優遇します。
              自由な時間管理と高収入を両立したい経験者スタイリストに最適です。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: '報酬率', value: '最大80%', detail: '報酬率は最大80%。さらに材料をご自身で用意する場合は優遇します。詳細はLINEにて。' },
                { label: 'シフト', value: '自由出勤', detail: '曜日も時間も自分で設定。副業・掛け持ちも自由に組み合わせ可能。' },
                { label: '集客', value: '100%サロン負担', detail: 'ホットペッパービューティー最上位プラン・SNS広告費を全額サロンが負担。' },
                { label: '材料費', value: 'サロン支給', detail: '施術に必要な消耗品・材料費はサロンが負担します。手元に残る収入が増えます。' },
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">業務委託 vs 正社員 vs フリーランス</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#3a533d] text-white">
                    <th className="py-4 px-6 text-left font-bold tracking-widest">比較項目</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest">正社員</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest bg-[#4a6b4e]">★ 業務委託</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest">フリーランス</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['報酬率', '固定給＋歩合', '最大80%（材料持込でさらに優遇）', '詳しくはLINEで'],
                    ['最低保証', 'あり', 'なし', 'なし'],
                    ['社会保険', '完備', '自己負担', '自己負担'],
                    ['シフト', '応相談', '自由出勤', '完全自由'],
                    ['副業・掛け持ち', '× 不可', '◎ 可', '◎ 可'],
                    ['こんな方に', '安定重視', '実績者・副業も', '高収入・独立志向'],
                  ].map(([label, ...vals], i) => (
                    <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f7f7f5]'}>
                      <td className="py-3 px-6 font-bold text-gray-700">{label}</td>
                      {vals.map((v, j) => (
                        <td key={j} className={`py-3 px-6 text-center ${j === 1 ? 'font-bold text-[#3a533d]' : 'text-gray-600'}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/work/seishain" className="text-[#3a533d] font-bold text-sm border-b border-[#3a533d] hover:opacity-70 transition-opacity">正社員求人の詳細 →</Link>
              <Link to="/work/freelance" className="text-[#3a533d] font-bold text-sm border-b border-[#3a533d] hover:opacity-70 transition-opacity">フリーランス求人の詳細 →</Link>
            </div>
          </div>
        </div>

        {/* こんな方に */}
        <div className="py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">For Who</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">こんな方に業務委託がおすすめ</h2>
            <div className="space-y-4">
              {[
                '既存の指名客がいて、高い収入効率を求めている経験者スタイリスト',
                '他サロンと掛け持ち・副業として柔軟に働きたい方',
                '週3〜4日でも高収入を実現したい方',
                '自由なシフトでライフスタイルを大切にしながら働きたい方',
                'フリーランスに移行する前のステップとして試したい方',
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">業務委託求人 よくある質問</h2>
            <div className="space-y-6">
              {[
                { q: '群馬で美容師の業務委託はどのくらい稼げますか？', a: '報酬率は最大80%。さらに材料をご自身で用意する場合は優遇します。指名客が多いほど収入は青天井に伸びます。具体的な収入シミュレーションはLINEでお気軽にどうぞ。' },
                { q: '業務委託と正社員の違いは何ですか？', a: '業務委託は売上に応じた高い還元率が特徴で、シフトも自由です。ただし社会保険は自己負担で最低保証はありません。実績ある方や副業として掛け持ちしたい方に向いています。詳しくはLINEでご相談ください。' },
                { q: '業務委託で集客はどうすればいいですか？', a: 'SALON SIFTではホットペッパービューティー最上位プランの掲載費・SNS広告費をサロンが全額負担します。スタイリスト自身はSNS発信などセルフブランディングに注力するだけで、強力な集客基盤を活用できます。' },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 p-6">
                  <p className="font-bold text-gray-900 mb-3">Q. {item.q}</p>
                  <p className="text-sm text-gray-600 leading-relaxed"><span className="text-[#3a533d] font-bold mr-2">A.</span>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 md:py-24 px-6 bg-[#3a533d] text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat tracking-widest mb-4">業務委託で、群馬で自分らしく稼ぐ</h2>
          <p className="text-green-100 text-sm mb-10">まずはLINEで気軽にご相談ください。見学・面談は無料です。</p>
          <a href="https://line.me/ti/p/exrAW4jmt5" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#3a533d] font-bold tracking-widest px-10 py-5 hover:bg-green-50 transition-colors">
            LINEで無料相談・見学予約 <ArrowRight size={20} className="ml-3" />
          </a>
        </div>

      </div>
    </>
  );
};

export default GymuitakuPage;
