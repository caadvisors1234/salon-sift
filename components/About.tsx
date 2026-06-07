import React from 'react';
import Logo from './Logo';

const ABOUT_ITEMS = [
  {
    id: '01',
    en: 'WORK STYLE DESIGN',
    ja: '「働き方」を自ら設計する自由',
    desc: '正社員・フリーランス・業務委託・パートまで、ライフステージに合わせて働き方を自由に選べる。「雇われる」のではなく、自らのキャリアと生活を主体的に設計できる環境を提供します。',
    // PC用の絶対配置座標 (Top)
    pcPos: 'top-[80px] left-1/2 -translate-x-1/2 text-center w-[360px]',
    delay: 'delay-100'
  },
  {
    id: '02',
    en: 'HIGH RETURN SYSTEM',
    ja: '最大80%還元・高水準の給与体系',
    desc: 'フリーランス・業務委託は還元率最大80%。材料持ち込みの場合はさらに優遇します。正社員にも手厚い最低保証と歩合給を用意し、努力と成果がダイレクトに収入へ反映されます。',
    // (Top Right)
    pcPos: 'top-[310px] left-[calc(50%+260px)] -translate-y-1/2 text-left w-[300px]',
    delay: 'delay-300'
  },
  {
    id: '03',
    en: 'MARKETING SUPPORT',
    ja: '顧客ゼロでも安心の集客力',
    desc: 'サロン全体で高い集客力を保持しているため、フリーランスや入社直後の方でも安定した入客が可能。個人の発信力だけに頼らず、業務と技術に集中できる環境を整えています。',
    // (Bottom Right)
    pcPos: 'top-[600px] left-[calc(50%+160px)] -translate-y-1/2 text-left w-[300px]',
    delay: 'delay-500'
  },
  {
    id: '04',
    en: 'SMART EDUCATION',
    ja: '無駄を省いた効率的スキルアップ',
    desc: '短期間で実践的な技術を習得できる、無駄のないカリキュラムを構築。レッスンは強制ではなく自由参加形式を採用し、個人のペースと自主性を尊重した成長支援を行います。',
    // (Bottom Left)
    pcPos: 'top-[600px] right-[calc(50%+160px)] -translate-y-1/2 text-right w-[300px]',
    delay: 'delay-500'
  },
  {
    id: '05',
    en: 'CO-CREATION',
    ja: '全員でブランドを創る一体感',
    desc: 'スタッフ全員がサロンづくりに参加し、アイデアを形にできる風通しの良さが魅力。雇用形態の垣根を超えて互いにサポートし合い、新しいサロンを共に成長させていくチームワークがあります。',
    // (Top Left)
    pcPos: 'top-[310px] right-[calc(50%+260px)] -translate-y-1/2 text-right w-[300px]',
    delay: 'delay-300'
  }
];

interface AboutProps {
  hideBackgroundText?: boolean;
}

const About: React.FC<AboutProps> = ({ hideBackgroundText = false }) => {
  return (
    <section id="rule" className="bg-[#f7f7f5] py-20 md:py-40 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* --- PC VIEW (画像3 準拠) --- */}
        <div className="hidden md:block relative h-[800px] w-full max-w-[1000px] mx-auto reveal">

          {/* Central Logo Container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] z-20 text-center bg-[#f7f7f5] px-8 py-4">
            <div className="flex flex-col items-center scale-75 md:scale-90 opacity-90">
              <Logo />
            </div>
          </div>

          {/* Overlapping Circles (Thin Lines) */}
          {/* Center Circle connecting the Pentagon (Diameter ~560px for radius 280px) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] border-[0.5px] border-[#3a533d] rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border-[0.5px] border-[#3a533d] rounded-full opacity-20"></div>

          {/* PC Items Absolute Positioning */}
          {ABOUT_ITEMS.map((item) => (
            <div key={item.id} className={`absolute ${item.pcPos} group`}>
              <div className={`reveal ${item.delay}`}>
                <div className="mb-1">
                  <span className="text-[11px] font-bold tracking-[0.3em] text-[#3a533d] uppercase font-montserrat">{item.en}</span>
                </div>
                <h3 className="text-[20px] font-bold tracking-[0.1em] text-[#333] mb-3 whitespace-nowrap">{item.ja}</h3>
                <p className="text-[12px] leading-[2.1] text-gray-500 tracking-wider">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- SP VIEW (画像4 準拠) --- */}
        <div className="block md:hidden reveal">
          {/* Header in SP */}
          <div className="flex flex-col items-center mb-12">
            <div className="scale-75 opacity-90">
              <Logo />
            </div>
            <div className="w-full h-px bg-gray-300 mt-8"></div>
          </div>

          {/* List layout */}
          <div className="space-y-0">
            {ABOUT_ITEMS.map((item) => (
              <div key={item.id} className="grid grid-cols-[1fr_1.5fr] gap-x-6 py-10 border-b border-gray-900 last:border-b">
                <div className="flex flex-col space-y-3">
                  <span className="text-[11px] font-bold tracking-widest text-[#3a533d] font-montserrat">{item.en}</span>
                  <h3 className="text-[18px] font-bold tracking-wider text-[#333] leading-tight">{item.ja}</h3>
                </div>
                <div className="pt-1">
                  <p className="text-[13px] leading-[2.2] text-gray-700 tracking-wider">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Background Decorative Typography */}
      {!hideBackgroundText && (
        <div className="absolute top-[10%] right-[5%] text-[10vw] font-montserrat font-bold italic text-gray-300/40 pointer-events-none select-none leading-none">
          About
        </div>
      )}
    </section>
  );
};

export default About;
