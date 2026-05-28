import React, { useEffect } from 'react';
import Statement from '../components/Statement';
import About from '../components/About';
import Features from '../components/Features';
import ChallengeSupport from '../components/ChallengeSupport';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const AboutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        setTimeout(() => {
            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));
        }, 100);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <SEOHead
                title="SALON SIFTとは｜群馬の美容師が選ぶ美容室の理念と戦略"
                description="SALON SIFTの理念と5つの戦略的アプローチ。集客・教育・マーケティング・高還元率で、すべての美容師がノーリスクで最大限の成果を出せる環境を紹介します。"
                canonical="/about"
            />
        <div className="bg-[#f7f7f5] min-h-screen pt-20">
            {/* Page Header */}
            <div className="pt-16 pb-4 text-center px-6 reveal">
                <p className="text-[12px] font-bold tracking-[0.4em] text-[#3a533d] mb-4 uppercase">About Us</p>
                <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest text-gray-900 mb-6">群馬の美容師が選ぶ美容室<br className="md:hidden" /> SALON SIFTの理念と戦略</h1>
                <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-bold">
                    美容師としての「働き方」を自ら設計できる自由と、<br className="hidden md:block" />
                    圧倒的な環境が生み出す最高のパフォーマンスについて。
                </p>
            </div>

            {/* Vision / Philosophy */}
            <div className="mt-8 md:mt-12 reveal">
                <div className="text-center mb-[-60px] md:mb-[-100px] relative z-10 p-6">
                    <span className="inline-block border-t border-b border-[#3a533d] text-[#3a533d] font-montserrat font-bold tracking-[0.3em] px-8 py-3 text-sm md:text-base bg-[#f7f7f5]">
                        01. OUR VISION & PHILOSOPHY
                    </span>
                    <h2 className="mt-8 md:mt-10 text-xl md:text-2xl font-bold text-gray-800 tracking-wider">
                        美容師が生涯輝き続けるための場所
                    </h2>
                </div>
                {/* Statement inherently has its own bg-[#f7f7f5] padding/margin */}
                <Statement hideBackgroundText={true} />
            </div>

            {/* Strategy Transition */}
            <div className="reveal pt-20 pb-10 bg-[#f7f7f5] text-center px-6 relative z-10">
                <span className="inline-block border-t border-b border-[#3a533d] text-[#3a533d] font-montserrat font-bold tracking-[0.3em] px-8 py-3 text-sm md:text-base">
                    02. OUR STRATEGY
                </span>
                <h2 className="mt-8 md:mt-10 text-2xl md:text-3xl font-bold text-gray-900 tracking-wider leading-relaxed">
                    理念を達成するための<br className="md:hidden" />「5つの戦略的アプローチ」
                </h2>
                <p className="mt-6 text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-[2]">
                    ただ場所を提供するだけのシェアサロンではありません。集客、教育、マーケティング、そして高い還元率──。すべての美容師がノーリスクで最大限の成果を出せるよう、私たちが独自に構築した環境とサポート体制をご紹介します。
                </p>
            </div>

            {/* Strategy Evidence (About component) */}
            <div className="reveal mt-[-80px] md:mt-[-160px]">
                {/* About inherently has top padding py-20 md:py-40. Pulling it up tightly. */}
                <About hideBackgroundText={true} />
            </div>

            {/* Facts Transition */}
            <div className="reveal pt-20 md:pt-32 pb-6 bg-[#3a533d] text-center px-6 relative z-10 w-full overflow-hidden">
                <span className="inline-block border-t border-b border-white text-white font-montserrat font-bold tracking-[0.3em] px-8 py-3 text-sm md:text-base">
                    03. REAL ENVIRONMENT
                </span>
                <h2 className="mt-10 text-2xl md:text-3xl font-bold text-white tracking-wider leading-relaxed pb-8 md:pb-12">
                    戦略を裏付ける「環境」
                </h2>
                {/* Features inherently has a dark green bg #3a533d so it blends perfectly */}
            </div>

            {/* <div className="reveal w-full">
                <ChallengeSupport />
            </div> */}

            {/* Final Evidence (Features component) */}
            <div className="reveal mt-[-40px] md:mt-[-80px]">
                <Features hideBackgroundText={true} />
            </div>

            <div className="text-center py-20 bg-[#f7f7f5] reveal">
                <Link to="/" className="inline-block bg-white text-gray-900 font-bold tracking-[0.3em] px-12 py-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#3a533d] text-sm">
                    トップページへ戻る
                </Link>
            </div>
        </div>
        </>
    );
};

export default AboutPage;
