
import React, { useState, useEffect } from 'react';
import ImageNote from './ImageNote';
import BreakText from './BreakText';

const Hero: React.FC = () => {
  const images = [
    '/assets/hero_1.webp',
    '/assets/hero_3.webp'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[85vh] md:h-[95vh] min-h-[600px] overflow-hidden bg-[#f7f7f5]">
      <div className="absolute top-8 md:top-10 bottom-4 md:bottom-12 left-6 right-6 md:left-24 md:right-24 overflow-hidden rounded-[2.5rem]">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center animate-ken-burns"
              style={{ backgroundImage: `url('${img}')` }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/20" />
        <ImageNote className="top-4 right-6 md:top-5 md:right-8" />
      </div>

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col justify-start pt-20 md:pt-24">
        <div className="max-w-4xl">
          <div className="mb-8 inline-block bg-white/95 backdrop-blur-sm px-4 py-2 text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase border-l-[4px] border-[#3a533d] shadow-lg">
            SALON SIFT
          </div>

          <div className="space-y-4">
            <h1 className="sr-only">群馬の美容師求人｜高崎市井野町の美容室 SALON SIFT</h1>
            <div className="bg-[#3a533d] text-white text-[12px] md:text-sm font-bold px-4 py-2 inline-block mb-2 shadow-lg">
              <BreakText text="群馬｜|フリーランス・|業務委託で|損してる美容師へ|（ネイル・アイも順次受付中）" />
            </div>
            <h2 className="text-white text-[6vw] md:text-[4rem] font-bold leading-[1.2] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] tracking-[-0.03em]">
              「今の契約、<br />本当に得ですか？」
            </h2>
            <div className="bg-white/95 backdrop-blur-md inline-block px-6 py-5 md:px-10 md:py-8 shadow-2xl mt-4 max-w-lg">
              <ul className="text-[#333] text-[4vw] md:text-2xl font-bold tracking-[0.05em] leading-relaxed space-y-3">
                <li className="flex items-center"><span className="text-[#3a533d] mr-2">✔</span> <span className="text-[#B91C1C] mx-1">手取り50〜80万</span>も目指せる設計<span className="text-[0.6em] align-super ml-0.5">※</span></li>
                <li className="flex items-center"><span className="text-[#3a533d] mr-2">✔</span> 集客はサロン負担</li>
                <li className="flex items-center"><span className="text-[#3a533d] mr-2">✔</span> 最低保証30万〜<span className="text-[0.6em] text-gray-500 ml-1">（正社員・条件あり）</span></li>
                <li className="flex items-center"><span className="text-[#3a533d] mr-2">✔</span> <BreakText text="正社員・業務委託・パート |選べる働き方" /></li>
              </ul>
              <p className="text-[10px] md:text-xs text-gray-500 font-medium leading-relaxed mt-4">
                ※指名売上 月75〜115万円・還元率80%の場合の試算（仕入れ費5%・基本使用料5万円を差し引き後）。収入を保証するものではありません。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-16 -translate-y-1/2 hidden xl:block">
        <div className="text-white/20 font-montserrat tracking-[0.6em] font-bold text-8xl [writing-mode:vertical-rl] select-none uppercase pointer-events-none">
          SALON SIFT
        </div>
      </div>

      <div className="absolute bottom-12 left-2 md:left-8 flex items-center gap-10">
        <div className="text-black text-[10px] font-bold tracking-[0.5em] uppercase [writing-mode:vertical-rl] select-none">
          SALON SIFT
        </div>
        <div className="w-px h-32 bg-gradient-to-b from-black/60 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
