
import React from 'react';
import { Link } from 'react-router-dom';
import BreakText from './BreakText';

const SalarySystem: React.FC = () => {
  return (
    <section id="simulation" className="bg-[#f7f7f5] py-28 md:py-48 text-center relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
         <p className="text-[12px] font-bold tracking-[0.6em] text-gray-400 mb-4 uppercase">Salary system</p>
         <h2 className="text-[32px] md:text-[45px] font-bold mb-12 tracking-[0.2em] leading-tight"><BreakText text="SALON SIFT の|報酬制度" /></h2>
         <p className="text-[15px] md:text-[17px] text-gray-600 mb-20 md:leading-[2.4] tracking-widest max-w-3xl mx-auto">
           SALON SIFTは売り上げた分だけ報酬がもらえる完全歩合制です。<br className="hidden md:block" />
           そのため休日や勤務時間はもちろん、メニューの内容や料金も自由にカスタマイズすることができます。
         </p>
         
         <div className="border border-gray-100 px-6 py-10 md:p-24 mb-20 bg-white shadow-[0_60px_120px_rgba(0,0,0,0.08)] rounded-sm relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-full h-1 bg-[#3a533d]"></div>
           <p className="text-[16px] font-bold tracking-[0.4em] mb-12 border-b border-gray-50 pb-6 text-gray-400 uppercase">高水準の還元率</p>
           
           <div className="flex items-end justify-center whitespace-nowrap mb-12 transition-transform duration-500 group-hover:scale-110">
             <span className="text-[20px] md:text-[40px] font-bold mb-2 md:mb-4 mr-2 md:mr-3 text-[#3a533d]">最大</span>
             <span className="text-[72px] md:text-[140px] font-montserrat font-bold text-[#3a533d] leading-none">80</span>
             <span className="text-[20px] md:text-[40px] font-bold mb-2 md:mb-4 ml-1 md:ml-2 text-[#3a533d]">%還元</span>
           </div>

           <div className="space-y-6">
             <p className="text-[15px] md:text-[18px] text-[#333] font-bold leading-relaxed tracking-widest">
               売上の最大80%を報酬として還元します。<br className="hidden md:block" />
               美容師の皆さんに満足頂ける報酬を提供します。
             </p>
             <p className="text-[11px] text-gray-400 font-montserrat font-medium tracking-[0.4em] uppercase opacity-60">
               You can earn up to 80 percent of your sales
             </p>
           </div>
         </div>

         <Link to="/simulation" className="bg-[#3a533d] text-white px-6 md:px-24 py-6 md:py-8 font-bold tracking-[0.2em] md:tracking-[0.4em] text-[13px] md:text-[14px] hover:bg-[#2d412f] transition-all shadow-[0_20px_40px_rgba(58,83,61,0.3)] hover:shadow-[0_30px_60px_rgba(58,83,61,0.4)] hover:-translate-y-2 uppercase inline-block">
           収益シミュレーションはこちら
         </Link>
      </div>
      
      {/* Background Decorative Pattern */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 border-[40px] border-white/40 rounded-full select-none pointer-events-none"></div>
    </section>
  );
};

export default SalarySystem;
