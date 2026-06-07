import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Statement from '../components/Statement';
import About from '../components/About';
import Features from '../components/Features';
import SalarySystem from '../components/SalarySystem';
import SalonList from '../components/SalonList';
import BlogNews from '../components/BlogNews';
import InstagramFeed from '../components/InstagramFeed';
import FAQ from '../components/FAQ';
import SEOHead from '../components/SEOHead';
import { ArrowUpRight } from 'lucide-react';

const HomePage: React.FC = () => {
    const revealRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
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

        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <SEOHead
                title="群馬の美容師求人｜高崎・前橋・太田・伊勢崎｜正社員・フリーランス・業務委託・パートアルバイト募集"
                description="群馬で美容師求人を探すなら。高崎・前橋・太田・伊勢崎エリアの正社員・フリーランス・業務委託・パートアルバイト募集情報を掲載。最大80%還元・集客費サロン負担・柔軟なシフト設定で、あなたに合った働き方を選べます。詳しくはLINEでご相談ください。"
                canonical="/"
            />
            <Hero />
            <Ticker />

            <div className="reveal">
                <Statement />
            </div>

            <div className="reveal">
                <About />
            </div>

            <div className="reveal">
                <Features />
            </div>

            <div className="reveal">
                <SalarySystem />
            </div>

            {/* <div className="reveal">
                <ChallengeSupport />
            </div> */}



            <div className="reveal">
                <SalonList />
            </div>

            <div className="reveal">
                <BlogNews />
            </div>

            <div className="reveal">
                <InstagramFeed />
            </div>

            <div className="reveal bg-[#f7f7f5] py-16 md:py-24 px-6">
                <div className="max-w-[1100px] mx-auto">
                    <p className="text-xs font-bold tracking-[0.4em] text-[#3a533d] uppercase mb-4 text-center">求人情報</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">エリア別・働き方別の美容師求人</h2>
                    <p className="text-sm text-gray-600 mb-12 text-center">正社員・フリーランス・業務委託・パートまで、あなたに合った働き方を選べます。</p>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6 border-b border-gray-200 pb-3">エリア別求人</p>
                            <ul className="space-y-4">
                                {[
                                    { to: '/area/takasaki', label: '高崎の美容師求人', desc: '群馬最大の商業都市。月30名以上の新規集客実績' },
                                ].map(item => (
                                    <li key={item.to}>
                                        <Link to={item.to} className="flex items-start justify-between group p-4 hover:bg-white transition-colors border border-transparent hover:border-gray-200">
                                            <div>
                                                <p className="text-sm font-bold text-gray-900 group-hover:text-[#3a533d] transition-colors">{item.label}</p>
                                                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                                            </div>
                                            <ArrowUpRight size={16} className="text-gray-300 group-hover:text-[#3a533d] transition-colors shrink-0 mt-1" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6 border-b border-gray-200 pb-3">働き方別求人</p>
                            <ul className="space-y-4">
                                {[
                                    { to: '/work/seishain', label: '正社員の美容師求人', desc: '安定した収入保証・社会保険完備・集客費サロン全額負担' },
                                    { to: '/work/gyoumuitaku', label: '業務委託の美容師求人', desc: '最大80%還元・自由シフト・副業掛け持ちも可。詳しくはLINEで' },
                                    { to: '/work/freelance', label: 'フリーランスの美容師求人', desc: '最大80%還元・完全自由出勤・独立志向の方に。詳しくはLINEで' },
                                    { to: '/work/parttime', label: 'パート・アルバイトの美容師求人', desc: '時給1,500円〜・扶養範囲OK・柔軟なシフト設定' },
                                ].map(item => (
                                    <li key={item.to}>
                                        <Link to={item.to} className="flex items-start justify-between group p-4 hover:bg-white transition-colors border border-transparent hover:border-gray-200">
                                            <div>
                                                <p className="text-sm font-bold text-gray-900 group-hover:text-[#3a533d] transition-colors">{item.label}</p>
                                                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                                            </div>
                                            <ArrowUpRight size={16} className="text-gray-300 group-hover:text-[#3a533d] transition-colors shrink-0 mt-1" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reveal">
                <FAQ />
            </div>
        </>
    );
};

export default HomePage;
