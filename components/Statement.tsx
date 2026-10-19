
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImageNote from './ImageNote';
import BreakText from './BreakText';

interface StatementProps {
  hideBackgroundText?: boolean;
}

const Statement: React.FC<StatementProps> = ({ hideBackgroundText = false }) => {
  return (
    <section className="bg-[#f7f7f5] py-20 md:py-32 px-6 relative overflow-hidden">
      {!hideBackgroundText && (
        <div className="absolute top-10 left-[5%] text-[10vw] font-montserrat font-bold italic text-gray-300/40 pointer-events-none select-none leading-none z-0">
          Statement
        </div>
      )}
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="lg:w-1/2 space-y-10 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.4] text-gray-900">
              <BreakText text="雇われ方を|選ぶ時代から、" /><br />
              <BreakText text="働き方を|設計する時代へ" />
            </h2>
            <div className="space-y-6 text-base md:text-md leading-loose text-gray-600">
              <p>お客様に愛され、自分らしく輝く場所を。</p>
              <p>充実の支援が、あなたの挑戦を支える。</p>
              <p>働き方を設計し、強みを活かすステージへ。</p>
              <p><BreakText text="こころから満足できる、|美容師人生のために。" /></p>
            </div>

            <Link to="/voice" className="inline-flex items-center gap-4 text-sm font-bold tracking-widest text-[#3a533d] border-b border-[#3a533d] pb-2 group">
              <span>美容師の声一覧</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="relative h-[450px] md:h-[650px] w-full mt-10 lg:mt-0">
                <div className="absolute top-8 left-0 w-[80%] md:w-[70%] h-[320px] md:h-[500px] reveal delay-100 z-10">
                  <img src="/images/statement/hero.png" alt="Hero portrait" className="w-full h-full object-cover shadow-xl" />
                  <ImageNote className="bottom-2 left-2" />
                </div>
                <div className="absolute top-0 right-2 md:-right-8 w-[45%] md:w-[40%] h-[180px] md:h-[280px] reveal delay-300 z-20">
                  <img src="/images/statement/detail1.png" alt="Detail 1" className="w-full h-full object-cover shadow-lg border-4 md:border-8 border-white" />
                </div>
                <div className="absolute bottom-0 right-6 md:right-2 w-[55%] md:w-[50%] h-[200px] md:h-[340px] reveal delay-500 z-30">
                  <img src="/images/statement/detail2.png" alt="Detail 2" className="w-full h-full object-cover shadow-2xl border-4 md:border-8 border-white" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
