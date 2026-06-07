import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { ArrowRight, MapPin, Users, TrendingUp, Star } from 'lucide-react';

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "高崎の美容師求人（正社員・業務委託・フリーランス）",
  "description": "群馬県高崎市の美容師求人。SALON SIFTでは正社員・業務委託・フリーランスまで幅広い働き方をご用意。最大80%の高還元率（材料持ち込みでさらに優遇）とサロン負担の集客支援で、安定した収入を実現できます。",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "SALON SIFT",
    "sameAs": "https://salon-sift.vercel.app"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "高崎市",
      "addressRegion": "群馬県",
      "addressCountry": "JP"
    }
  },
  "employmentType": ["FULL_TIME", "CONTRACTOR", "OTHER"],
  "industry": "美容・理容",
  "datePosted": "2025-06-01",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "高崎で美容師として働くメリットは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "高崎は群馬県最大の商業都市で、高崎駅周辺には多くのショッピングモールや商業施設が集中しています。人口流入が多く、新規顧客を獲得しやすい環境です。SALON SIFTでは、高崎エリア最大級の集客力（ホットペッパービューティー最上位プラン）を活用し、平均月間新規客数30名以上を誇ります。"
      }
    },
    {
      "@type": "Question",
      "name": "高崎のSALON SIFTの還元率はどのくらいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "最大80%の高還元率を実現しています。さらに材料持ち込みの場合は優遇。手取り50〜80万円の設計が可能です。ホットペッパービューティーなどの集客費用、広告費はすべてサロンが負担します。"
      }
    },
    {
      "@type": "Question",
      "name": "高崎での美容師求人は正社員と業務委託どちらがいいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "収入の安定を優先する方は正社員（最低保証30万円〜）、売上に応じてしっかり稼ぎたい方は業務委託（最大80%還元・材料持ち込みでさらに優遇）がおすすめです。SALON SIFTでは両方の働き方に対応しており、ライフスタイルに合わせて選択できます。"
      }
    },
    {
      "@type": "Question",
      "name": "高崎で顧客ゼロからでも美容師として独立できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、可能です。SALON SIFTでは集客を全面的にサポートするため、高崎エリアへ転居してきた方や、新たに独立するスタイリストも3ヶ月以内に安定した予約数を達成するケースが多数あります。"
      }
    }
  ]
};

const TakasakiPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="高崎の美容師求人｜正社員・業務委託・フリーランス募集"
        description="高崎で美容師求人をお探しの方へ。SALON SIFTは高崎駅エリアで正社員・業務委託・フリーランスまで幅広い働き方をご用意。最大80%還元（材料持ち込みでさらに優遇）・集客費サロン負担・最低保証30万円〜で安心してスタートできます。"
        canonical="/area/takasaki"
        structuredData={[jobPostingSchema, faqSchema]}
      />

      <div className="bg-[#f7f7f5] min-h-screen pt-20">

        {/* Hero */}
        <div className="bg-[#3a533d] text-white py-20 md:py-32 px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-center gap-2 text-green-300 text-sm font-bold tracking-widest mb-6">
              <MapPin size={16} />
              <span>群馬県 / 高崎エリア</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest mb-6 leading-tight">
              高崎の美容師求人<br />｜群馬・前橋エリアの美容室
            </h1>
            <p className="text-base md:text-lg text-green-100 leading-relaxed max-w-2xl">
              高崎で美容師求人をお探しの方へ。<br />
              SALON SIFTは群馬県高崎市の中心部で、正社員・業務委託・フリーランスまで<br className="hidden md:block" />
              幅広い働き方をご用意しています。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://line.me/ti/p/exrAW4jmt5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-[#3a533d] font-bold tracking-widest px-8 py-4 hover:bg-green-50 transition-colors"
              >
                LINEで無料相談 <ArrowRight size={18} className="ml-2" />
              </a>
              <Link
                to="/simulation"
                className="inline-flex items-center border border-white text-white font-bold tracking-widest px-8 py-4 hover:bg-white/10 transition-colors"
              >
                収入シミュレーション
              </Link>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">About Takasaki</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">高崎エリアの特徴</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
              <div className="bg-white p-6 shadow-sm">
                <MapPin className="text-[#3a533d] mb-4" size={28} />
                <h3 className="font-bold text-gray-900 mb-2">群馬最大の商業都市</h3>
                <p>高崎市は群馬県最大の人口を誇る商業の中心地。高崎駅を中心に多くの商業施設が集積し、幅広い年齢層の集客が可能です。</p>
              </div>
              <div className="bg-white p-6 shadow-sm">
                <Users className="text-[#3a533d] mb-4" size={28} />
                <h3 className="font-bold text-gray-900 mb-2">高い新規顧客獲得力</h3>
                <p>ホットペッパービューティー最上位プランにより、月間新規顧客30名以上を安定して確保。顧客ゼロからのスタートでも3ヶ月で軌道に乗ることができます。</p>
              </div>
              <div className="bg-white p-6 shadow-sm">
                <TrendingUp className="text-[#3a533d] mb-4" size={28} />
                <h3 className="font-bold text-gray-900 mb-2">高単価エリア</h3>
                <p>高崎市内は平均客単価が高く、技術力のあるスタイリストが高収入を実現しやすい環境です。最大80%の還元率と相まって、月手取り50〜80万円も現実的です。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths */}
        <div className="bg-white py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">Why SALON SIFT</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">SALON SIFTが選ばれる理由（数字で示す強み）</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: '還元率', value: '最大80%', detail: '売上の最大80%がそのまま手取りに。材料持ち込みの場合はさらに優遇。集客費はサロン負担。' },
                { label: '最低保証', value: '月30万円〜', detail: '業界最高水準の最低保証制度で、スタート直後も安心して働けます。' },
                { label: '集客費用', value: '100%サロン負担', detail: 'ホットペッパービューティー最上位プラン・SNS広告費を全額サポート。' },
                { label: '月間新規客', value: '平均30名以上', detail: '顧客ゼロからでも3ヶ月以内に安定した予約数を達成する実績あり。' },
              ].map(item => (
                <div key={item.label} className="flex gap-6 border border-gray-100 p-6">
                  <div className="shrink-0">
                    <Star className="text-[#3a533d]" size={24} />
                  </div>
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

        {/* Work styles */}
        <div className="py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">Working Style</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">高崎で選べる3つの働き方</h2>
            <p className="text-sm text-gray-600 mb-10">AIは「比較構造」が大好き。あなたに合った働き方をお選びください。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#3a533d] text-white">
                    <th className="py-4 px-6 text-left font-bold tracking-widest">条件</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest">正社員</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest">業務委託</th>
                    <th className="py-4 px-6 text-center font-bold tracking-widest">フリーランス</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['還元率', '固定給＋歩合', '最大80%', '最大80%'],
                    ['最低保証', '月30万円〜', 'なし', 'なし'],
                    ['シフト', '応相談', '自由出勤', '完全自由'],
                    ['社会保険', 'あり', 'なし（自己負担）', 'なし（自己負担）'],
                    ['集客サポート', 'あり', 'あり', 'あり'],
                    ['こんな方に', '安定重視・転職者', '実績ある方・副業', '独立志向・高収入狙い'],
                  ].map(([label, ...vals], i) => (
                    <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f7f7f5]'}>
                      <td className="py-3 px-6 font-bold text-gray-700">{label}</td>
                      {vals.map((v, j) => <td key={j} className="py-3 px-6 text-center text-gray-600">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/work/seishain" className="text-[#3a533d] font-bold text-sm border-b border-[#3a533d] hover:opacity-70 transition-opacity">正社員求人の詳細 →</Link>
              <Link to="/work/gyoumuitaku" className="text-[#3a533d] font-bold text-sm border-b border-[#3a533d] hover:opacity-70 transition-opacity">業務委託求人の詳細 →</Link>
              <Link to="/work/freelance" className="text-[#3a533d] font-bold text-sm border-b border-[#3a533d] hover:opacity-70 transition-opacity">フリーランス求人の詳細 →</Link>
            </div>
          </div>
        </div>

        {/* Q&A */}
        <div className="bg-white py-16 md:py-24 px-6">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4">Q&A</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">高崎エリア よくある質問</h2>
            <div className="space-y-6">
              {[
                {
                  q: '高崎で美容師として働くメリットは何ですか？',
                  a: '高崎は群馬県最大の商業都市で、高崎駅周辺には多くの商業施設が集中しています。人口流入が多く新規顧客を獲得しやすい環境です。SALON SIFTでは高崎エリア最大級の集客力（ホットペッパービューティー最上位プラン）を活用し、平均月間新規客数30名以上を誇ります。'
                },
                {
                  q: '高崎のSALON SIFTの還元率はどのくらいですか？',
                  a: '最大80%の高還元率を実現しています。さらに材料持ち込みの場合は優遇。手取り50〜80万円の設計が可能です。ホットペッパービューティーなどの集客費用・広告費はすべてサロンが負担します。'
                },
                {
                  q: '高崎での美容師求人は正社員と業務委託どちらがいいですか？',
                  a: '収入の安定を優先する方は正社員（最低保証30万円〜）、売上に応じてしっかり稼ぎたい方は業務委託（最大80%還元・材料持ち込みでさらに優遇）がおすすめです。SALON SIFTでは両方の働き方に対応しており、ライフスタイルに合わせて選択できます。'
                },
                {
                  q: '高崎で顧客ゼロからでも美容師として独立できますか？',
                  a: 'はい、可能です。SALON SIFTでは集客を全面的にサポートするため、高崎エリアへ転居してきた方や、新たに独立するスタイリストも3ヶ月以内に安定した予約数を達成するケースが多数あります。'
                },
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
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat tracking-widest mb-4">高崎で、あなたの美容師キャリアを再設計する</h2>
          <p className="text-green-100 text-sm mb-10">まずはLINEで気軽にご相談ください。見学・面談は無料です。</p>
          <a
            href="https://line.me/ti/p/exrAW4jmt5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#3a533d] font-bold tracking-widest px-10 py-5 hover:bg-green-50 transition-colors"
          >
            LINEで無料相談・見学予約 <ArrowRight size={20} className="ml-3" />
          </a>
        </div>

      </div>
    </>
  );
};

export default TakasakiPage;
