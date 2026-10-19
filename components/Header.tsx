
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HelpCircle, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const LINE_URL = 'https://line.me/ti/p/e-XjwdEpaa';

const MOBILE_NAV_ITEMS = [
  { to: '/about', label: 'SALON SIFTとは' },
  { to: '/salons', label: 'サロン情報' },
  { to: '/simulation', label: '収益シミュレーション' },
  { to: '/faq', label: 'FAQ' },
  { to: '/voice', label: '美容師の声' },
  { to: '/blog', label: 'ブログ' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // ページ遷移したらメニューを閉じる
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // メニュー表示中は背面のスクロールを止め、Escで閉じられるようにする
  useEffect(() => {
    if (!isMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#f7f7f5]/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex flex-col items-center">
            <Logo className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-10 text-[12px] font-bold tracking-[0.2em] text-[#333]">
          <Link to="/about" className="hover:text-[#3a533d] transition-colors">SALON SIFTとは</Link>
          <Link to="/salons" className="hover:text-[#3a533d] transition-colors">サロン情報</Link>
          <Link to="/simulation" className="hover:text-[#3a533d] transition-colors">収益シミュレーション</Link>
          <Link to="/faq" className="hover:text-[#3a533d] transition-colors">FAQ</Link>
          <Link to="/voice" className="hover:text-[#3a533d] transition-colors">美容師の声</Link>
          <Link to="/blog" className="hover:text-[#3a533d] transition-colors">ブログ</Link>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-6">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-[11px] font-bold tracking-wider text-gray-500 border-b border-gray-300 pb-1 cursor-pointer hover:border-[#3a533d] transition-all"
          >
            <HelpCircle size={15} />
            <span>お問い合わせ・見学予約はこちら</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="xl:hidden relative w-12 h-12 flex items-center justify-center"
          >
            <span className={`absolute w-8 h-0.5 bg-gray-900 transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-[4px]'}`}></span>
            <span className={`absolute w-8 h-0.5 bg-gray-900 transition-transform duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-[4px]'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation
          header の backdrop-blur が fixed の基準を header 自身にしてしまうため、absolute で header 直下から画面下端まで広げる */}
      <div
        className={`xl:hidden absolute inset-x-0 top-full h-[calc(100dvh-5rem)] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
      >
        {/* 背景タップで閉じる */}
        <div className="absolute inset-0 bg-black/30" onClick={() => setIsMenuOpen(false)}></div>

        <nav
          id="mobile-menu"
          className={`relative bg-[#f7f7f5] border-b border-gray-200 shadow-xl px-6 md:px-12 pt-2 pb-8 max-h-full overflow-y-auto transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-4'}`}
        >
          <ul>
            {MOBILE_NAV_ITEMS.map(({ to, label }) => (
              <li key={to} className="border-b border-gray-200">
                <Link
                  to={to}
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between py-5 text-[14px] font-bold tracking-[0.2em] transition-colors ${pathname === to ? 'text-[#3a533d]' : 'text-[#333] hover:text-[#3a533d]'}`}
                >
                  <span>{label}</span>
                  <ArrowUpRight size={16} className="text-[#3a533d]" />
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isMenuOpen ? 0 : -1}
            className="mt-8 flex items-center justify-center gap-2 bg-[#3a533d] text-white text-[13px] font-bold tracking-widest py-4 hover:bg-[#2a3d2c] transition-colors"
          >
            <HelpCircle size={16} />
            <span>お問い合わせ・見学予約はこちら</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
