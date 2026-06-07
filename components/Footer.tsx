
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ArrowRight, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="bg-[#f7f7f5] py-24 md:py-32 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-[11px] font-bold tracking-[0.4em] uppercase">
            <div className="space-y-10">
              <p className="text-gray-400 border-l-2 border-gray-200 pl-4 mb-10">サイトマップ</p>
              <ul className="space-y-6">
                <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#3a533d] transition-colors flex items-center group">TOP <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/about" className="hover:text-[#3a533d] transition-colors flex items-center group">SALON SIFTとは <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><a href="/#simulation" className="hover:text-[#3a533d] transition-colors flex items-center group">報酬制度 <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><Link to="/salons" className="hover:text-[#3a533d] transition-colors flex items-center group">サロン情報 <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/voice" className="hover:text-[#3a533d] transition-colors flex items-center group">美容師の声 <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/blog" className="hover:text-[#3a533d] transition-colors flex items-center group">ブログ <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/faq" className="hover:text-[#3a533d] transition-colors flex items-center group">FAQ <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><a href="https://www.instagram.com/salon_sift_recruit?igsh=MTNzOGZ4a2dvcjRwZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#3a533d] transition-colors inline-block pt-4">
                  <Instagram size={24} className="hover:scale-110 transition-transform" />
                </a></li>
              </ul>
            </div>
            <div className="space-y-10">
              <p className="text-gray-400 border-l-2 border-gray-200 pl-4 mb-10">エリア別求人</p>
              <ul className="space-y-6">
                <li><Link to="/area/takasaki" className="hover:text-[#3a533d] transition-colors flex items-center group">高崎 美容師求人 <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              </ul>
            </div>
            <div className="space-y-10">
              <p className="text-gray-400 border-l-2 border-gray-200 pl-4 mb-10">働き方別求人</p>
              <ul className="space-y-6">
                <li><Link to="/work/seishain" className="hover:text-[#3a533d] transition-colors flex items-center group">正社員 <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/work/gyoumuitaku" className="hover:text-[#3a533d] transition-colors flex items-center group">業務委託<ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/work/freelance" className="hover:text-[#3a533d] transition-colors flex items-center group">フリーランス<ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/work/parttime" className="hover:text-[#3a533d] transition-colors flex items-center group">パート・アルバイト <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              </ul>
            </div>
          </div>

          <a href="https://line.me/ti/p/exrAW4jmt5" target="_blank" rel="noopener noreferrer" className="bg-white border-[3px] border-[#3a533d] p-10 md:p-16 relative overflow-hidden group block shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h3 className="text-[36px] md:text-[52px] font-montserrat font-bold text-[#3a533d] mb-4 leading-none uppercase">Entry from LINE</h3>
                <p className="text-[13px] font-bold tracking-[0.5em] text-[#3a533d] uppercase opacity-80">お問い合わせ・見学予約はこちら</p>
              </div>
              <div className="bg-[#3a533d] text-white p-6 md:p-8 rounded-full group-hover:rotate-45 transition-all duration-700 shadow-lg">
                <ArrowRight size={36} />
              </div>
            </div>
            <div className="absolute -bottom-12 -right-12 text-[140px] md:text-[200px] font-montserrat font-bold text-[#3a533d]/[0.04] select-none rotate-12 pointer-events-none">
              LINE
            </div>
          </a>
        </div>
      </div>

      <div className="py-24 md:py-40 flex flex-col items-center px-6">
        <Logo className="mb-12 scale-[1.5] md:scale-[2.5]" />
        <p className="text-[11px] font-bold tracking-[0.6em] text-gray-400 uppercase mt-4 md:mt-10">© 2026 SALON SIFT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
