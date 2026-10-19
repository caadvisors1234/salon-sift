import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen overflow-x-clip flex flex-col">
            <Header />

            {/* Main Content Area */}
            <div className="flex-grow">
                <Outlet />
            </div>

            <Footer />

            {/* Floating LINE CTA (Persists across all pages) */}
            <div className="fixed bottom-0 left-0 right-0 z-50 p-2 md:p-4 pointer-events-none flex justify-center pb-safe">
                <a
                    href="https://line.me/ti/p/e-XjwdEpaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto bg-[#06C755] hover:bg-[#05b34c] text-white w-full max-w-[600px] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex items-center justify-center py-3 md:py-4 px-6 transition-transform hover:scale-105"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-0.5 opacity-90">\ まずは気軽に相談する /</span>
                        <span className="text-sm md:text-lg font-bold tracking-widest flex items-center">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 mr-2" aria-hidden="true">
                                <path d="M19.365 9.863c.34 0 .601.253.601.586 0 .332-.261.585-.601.585H4.635c-.34 0-.601-.253-.601-.585 0-.333.261-.586.601-.586h14.73zM19.365 14.502c.34 0 .601.254.601.586 0 .332-.261.585-.601.585H4.635c-.34 0-.601-.253-.601-.585 0-.332.261-.586.601-.586h14.73zM19.365 5.228c.34 0 .601.254.601.586 0 .332-.261.585-.601.585H4.635c-.34 0-.601-.253-.601-.585 0-.332.261-.586.601-.586h14.73z" />
                            </svg>
                            LINEで無料相談・見学予約
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Layout;
