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
      "name": "群馬でフリーランス美容師は安定しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SALON SIFTのフリーランス制度では、集客費を全額サロンが負担します。ホットペッパービューティー最上位プランの掲載によって安定した新規顧客を確保でき、顧客ゼロからでも安定した予約数を達成するスタイリストが多数います。具体的な集客実績はLINEにてご案内します。"
      }
    },
    {
      "@type": "Question",
      "name": "フリーランス美容師の収入はどのくらいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "材料費・集客費はサロン負担なので、売上がほぼそのまま収入になります。具体的な還元率や収入シミュレーションはLINEにてお気軽にご相談ください。"
      }
    },
    {
      "@type": "Question",
      "name": "フリーランスと業務委託の違いは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SALON SIFTでは、フリーランスは完全自由出勤で最も高い収入効率と自由度を提供します。業務委託も自由シフトですが、フリーランスに比べてやや還元率が低い設定です。詳しい違いはLINEにてご相談ください。"
      }
    }
  ]
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "群馬の美容師フリーランス求人",
  "description": "群馬県（高崎・前橋）の美容師フリーランス求人。最大80%の高還元率（材料持ち込みでさらに優遇）・完全自由出勤・集客費サロン負担。",
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
  "employmentType": "OTHER",
  "industry": "美容・理容",
  "datePosted": "2025-06-01",
};

const FreelancePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="群馬の美容師 フリーランス求人｜高還元率・完全自由出勤"
        description="群馬（高崎・前橋）で美容師のフリーランス求人をお探しの方へ。SALON SIFTでは高還元率・完全自由出勤・集客費サロン全額負担。詳しくはLINEでご相談ください。"
        canonical="/work/freelance"
        structuredData={[jobPostingSchema, faqSchema]}
      />

      <div className="bg-[#f7f7f5] min-h-screen pt-20">

        {/* Hero */}
        <div className="bg-[#3a533d] text-white py-20 md:py-32 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-widest text-green-300 mb-4 uppercase">Working Style / フリーランス</p>
            <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest mb-6 leading-tight">
              群馬・高崎・前橋の美容師<br />フリーランス求人
            </h1>
            <p className="text-base md:text-lg text-green-100 leading-relaxed max-w-2xl">
              群馬でフリーランスの美容師求人をお探しの方へ。<br />
              高還元率・完全自由出勤で、<br className="hidden md:block" />
              自分のペースで収入を最大化できる働き方を実現できます。
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

        {/* フリーランスとは */}
        <div className="py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">About</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">SALON SIFTのフリーランスとは</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-10 max-w-2xl">
              フリーランスは「最も高く、最も自由に働ける」働き方です。
              売上の高い割合がそのまま手取りになり、シフト・休日はすべて自分で決定。
              SALON SIFTの集客基盤を活用しながら、実質的に「自分のサロン」を運営する感覚で働けます。詳しい還元率はLINEにてご案内します。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: '還元率', value: '最大80%', detail: '売上の最大80%がそのまま手取りに。材料持ち込みの場合はさらに優遇。' },
                { label: 'シフト', value: '完全自由', detail: '曜日・時間・休日はすべて自分で決める。完全な自由があります。' },
                { label: '集客費', value: '100%サロン負担', detail: 'ホットペッパービューティー最上位プラン・SNS広告費を全額負担。' },
                { label: '実績', value: '多数の成功実績', detail: '移籍後すぐに収入が大幅アップしたスタイリストが多数います。詳しくはLINEで。' },
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">フリーランス vs 業務委託 vs 正社員</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#3a533d] text-white">
                    <th className="py-4 px-6 text-left font-bold tracking-widest">比較項目</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest">正社員</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest">業務委託</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest bg-[#4a6b4e]">★ フリーランス</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['収入の天井', '低め（保証あり）', '高い', '最高（上限なし）'],
                    ['還元率', '固定給＋歩合', '最大80%', '最大80%'],
                    ['最低保証', 'あり', 'なし', 'なし'],
                    ['社会保険', '完備', '自己負担', '自己負担'],
                    ['シフト自由度', '応相談', '自由出勤', '完全自由'],
                    ['こんな方に', '安定・転職者', '実績者・副業', '高収入・独立志向'],
                  ].map(([label, ...vals], i) => (
                    <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f7f7f5]'}>
                      <td className="py-3 px-6 font-bold text-gray-700">{label}</td>
                      {vals.map((v, j) => (
                        <td key={j} className={`py-3 px-6 text-center ${j === 2 ? 'font-bold text-[#3a533d]' : 'text-gray-600'}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/work/seishain" className="text-[#3a533d] font-bold text-sm border-b border-[#3a533d] hover:opacity-70 transition-opacity">正社員求人の詳細 →</Link>
              <Link to="/work/gyoumuitaku" className="text-[#3a533d] font-bold text-sm border-b border-[#3a533d] hover:opacity-70 transition-opacity">業務委託求人の詳細 →</Link>
            </div>
          </div>
        </div>

        {/* こんな方に */}
        <div className="py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">For Who</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">こんな方にフリーランスがおすすめ</h2>
            <div className="space-y-4">
              {[
                '今の給与・待遇に限界を感じ、収入を最大化したい実力派スタイリスト',
                '完全自由な時間管理でライフスタイルを最優先にしたい方',
                '独立・開業を視野に入れ、まずノーリスクで経営感覚を養いたい方',
                '指名客が多くいて、そのお客様を連れてシェアサロンに移籍したい方',
                '手取り50〜80万円を本気で目指す、野心のある美容師',
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">フリーランス求人 よくある質問</h2>
            <div className="space-y-6">
              {[
                { q: '群馬でフリーランス美容師は安定しますか？', a: 'SALON SIFTのフリーランス制度では集客費を全額サロンが負担します。ホットペッパービューティー最上位プランの掲載で安定した新規顧客を確保でき、顧客ゼロからでも安定した予約数を達成するスタイリストが多数います。詳しくはLINEでご相談ください。' },
                { q: 'フリーランス美容師の収入はどのくらいですか？', a: '材料費・集客費はサロン負担なので、売上がほぼそのまま収入になります。移籍後すぐに収入が大幅アップしたスタイリストが多数います。具体的な収入シミュレーションはLINEにてお気軽にご相談ください。' },
                { q: 'フリーランスと業務委託の違いは？', a: 'SALON SIFTでは、フリーランスは完全自由出勤で最も高い収入効率と自由度を提供します。業務委託も自由シフトですが、フリーランスに比べてやや還元率が低い設定です。詳しい違いはLINEでご相談ください。' },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 p-6">
                  <p className="font-bold text-gray-900 mb-3">Q. {item.q}</p>
                  <p className="text-sm text-gray-600 leading-relaxed"><span className="text-[#3a533d] font-bold mr-2">A.</span>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 声 */}
        <div className="py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">Voice</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">フリーランスとして成功した美容師の声</h2>
            <div className="bg-white border border-gray-100 p-8">
              <p className="text-sm text-gray-600 leading-[2] mb-6">
                「以前のサロンではどれだけ売上を上げても給料に反映されず、限界を感じていました。SALON SIFTに移籍してから収入が大幅にアップし、何より自分の価値が正当に評価される実感に驚きました。」
              </p>
              <p className="text-xs font-bold text-gray-400 tracking-widest">移籍後すぐに収入が大幅アップ / 詳しくはLINEでご相談ください</p>
            </div>
            <div className="mt-4 text-right">
              <Link to="/voice" className="text-[#3a533d] font-bold text-sm border-b border-[#3a533d] hover:opacity-70 transition-opacity">美容師の声をもっと見る →</Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 md:py-24 px-6 bg-[#3a533d] text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat tracking-widest mb-4">フリーランスで、群馬で収入の天井を取り払う</h2>
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

export default FreelancePage;
