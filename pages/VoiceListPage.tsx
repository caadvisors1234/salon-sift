import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { MicroCMSListResponse, MicroCMSVoice } from '../types';
import SEOHead from '../components/SEOHead';

const formatDate = (iso: string): string => {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
};

const VoiceListPage: React.FC = () => {
    const [interviews, setInterviews] = useState<MicroCMSVoice[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        fetch('/api/microcms/voice')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json() as Promise<MicroCMSListResponse<MicroCMSVoice>>;
            })
            .then(data => {
                if (cancelled) return;
                // order昇順、未入力は末尾（同順内はdate降順）
                const sorted = [...data.contents].sort((a, b) => {
                    const aHas = typeof a.order === 'number';
                    const bHas = typeof b.order === 'number';
                    if (aHas && bHas) return (a.order as number) - (b.order as number);
                    if (aHas) return -1;
                    if (bHas) return 1;
                    return (b.date ?? '').localeCompare(a.date ?? '');
                });
                setInterviews(sorted);
                setLoading(false);
            })
            .catch(err => {
                if (cancelled) return;
                console.error('Voice fetch error:', err);
                setError('美容師の声の読み込みに失敗しました。時間をおいて再度お試しください。');
                setLoading(false);
            });

        return () => { cancelled = true; };
    }, []);

    return (
        <>
            <SEOHead
                title="美容師のリアルな声｜群馬の美容師求人"
                description="群馬・高崎の美容室 SALON SIFTで働く美容師のリアルな声。環境を変えて圧倒的なリターンと時間的自由を手に入れたメンバーの記録を掲載しています。"
                canonical="/voice"
            />
            <div className="bg-[#f7f7f5] min-h-screen pt-24 pb-32">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <p className="text-[12px] font-bold tracking-[0.4em] text-[#3a533d] mb-4 uppercase">Voice</p>
                    <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest text-gray-900 mb-6">美容師のリアルな声<span className="block text-base md:text-lg mt-4 tracking-wider">群馬の美容師求人｜高崎・前橋の美容室 SALON SIFT</span></h1>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-bold">
                        綺麗事は言いません。ここで語られているのは、現状に不満を抱き、環境を変えることで「圧倒的なリターン」と「時間的自由」を手に入れたメンバーのリアルな記録です。
                    </p>
                </div>

                {loading && (
                    <div className="text-center py-20 text-gray-500 font-bold tracking-widest text-sm">
                        読み込み中...
                    </div>
                )}

                {error && (
                    <div className="bg-white border border-[#B91C1C] p-6 text-[#B91C1C] font-bold text-sm">
                        {error}
                    </div>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {interviews.map((interview) => (
                            <Link to={`/voice/${interview.slug}`} key={interview.id} className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 block">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={interview.image.url}
                                        alt={interview.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {interview.category && interview.category.length > 0 && (
                                        <div className="absolute top-4 left-4 bg-[#3a533d] text-white text-[10px] font-bold tracking-widest px-3 py-1 uppercase">
                                            {interview.category.join(' / ')}
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 md:p-8">
                                    <div className="text-[11px] font-bold tracking-widest text-gray-400 mb-3">{formatDate(interview.date)}</div>
                                    <h2 className="text-base md:text-lg font-bold text-gray-900 leading-relaxed mb-4 group-hover:text-[#3a533d] transition-colors line-clamp-3">
                                        {interview.title}
                                    </h2>
                                    <div className="flex justify-end">
                                        <span className="text-[#3a533d] text-[10px] font-bold tracking-widest uppercase border-b border-[#3a533d] pb-1 group-hover:px-2 transition-all">Read More</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                <div className="mt-20 bg-white p-8 md:p-12 border-l-4 border-[#3a533d] shadow-lg max-w-3xl mx-auto">
                    <h3 className="text-xl font-bold mb-4 text-[#B91C1C]">※閲覧時のご注意</h3>
                    <p className="text-sm leading-relaxed text-gray-700 font-bold">
                        ここで紹介している実績は「最低限の自己管理」と「プロとしての覚悟」を持ったメンバーの結果です。「なんとなく楽をして稼ぎたい」という方には全く参考になりませんので、ご留意ください。
                    </p>
                </div>
            </div>
            </div>
        </>
    );
};

export default VoiceListPage;
