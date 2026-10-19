
import React from 'react';
import { FEATURES_DATA } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BreakText from './BreakText';

interface FeaturesProps {
  hideBackgroundText?: boolean;
}

const Features: React.FC<FeaturesProps> = ({ hideBackgroundText = false }) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#3a533d] py-20 md:py-32 relative overflow-hidden">
      {!hideBackgroundText && (
        <div className="absolute top-10 left-[5%] text-[10vw] font-montserrat font-bold italic text-white/[0.04] pointer-events-none select-none leading-none">
          Features
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-20">
          <p className="text-[12px] font-bold tracking-[0.4em] text-white/50 mb-2 uppercase">Good point</p>
          <h2 className="text-white text-3xl font-bold font-montserrat tracking-widest">REAL FACTS</h2>
          <p className="text-white/70 text-sm mt-4 leading-relaxed max-w-2xl font-bold">
            今の業務委託環境で「将来に漠然と不安がある」「一生懸命働いているのに手取りが増えない」と感じている方へ。SALON SIFTの働き方を、良い面も条件も含めてありのままにお伝えします。
          </p>
        </div>

        <div className="relative group/carousel">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {FEATURES_DATA.map((f) => (
              <div key={f.id} className="w-[85vw] md:w-[45vw] lg:w-[30%] flex-shrink-0 snap-center bg-white/95 p-6 md:p-8 flex flex-col h-[520px] shadow-lg group">
                <h3 className="text-lg md:text-xl font-bold mb-4 border-b border-gray-200 pb-4 min-h-[5rem] flex items-center"><BreakText text={f.title} /></h3>
                <p className="text-[13px] text-gray-600 mb-8 leading-relaxed flex-grow overflow-y-auto">{f.desc}</p>
                <div className="relative overflow-hidden mt-auto aspect-video w-full flex-shrink-0">
                  <img src={f.img} alt={f.title.replace(/\|/g, '')} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                  <span className="absolute bottom-4 right-4 text-[10px] font-bold tracking-widest text-white/90 bg-[#3a533d]/60 px-2 py-1 backdrop-blur-sm">Good point {f.id}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 mt-4 px-6 md:px-0">
            <button
              onClick={() => scroll('left')}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/10"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/10"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Features;
