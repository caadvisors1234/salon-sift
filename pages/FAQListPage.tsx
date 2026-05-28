import React, { useEffect, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { MicroCMSFAQ, MicroCMSListResponse } from '../types';
import SEOHead from '../components/SEOHead';

const FAQListPage: React.FC = () => {
    const [faqs, setFaqs] = useState<MicroCMSFAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [openIds, setOpenIds] = useState<string[]>([]);

    useEffect(() => {
        let cancelled = false;

        fetch('/api/microcms/faq')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json() as Promise<MicroCMSListResponse<MicroCMSFAQ>>;
            })
            .then(data => {
                if (cancelled) return;
                const published = data.contents.filter(f => f.isPublished !== false);
                // sortOrder昇順ソート（数値1=1番目、未入力は末尾、未入力同士はpublishedAt降順）
                const sorted = [...published].sort((a, b) => {
                    const aHas = typeof a.sortOrder === 'number';
                    const bHas = typeof b.sortOrder === 'number';
                    if (aHas && bHas) return (a.sortOrder as number) - (b.sortOrder as number);
                    if (aHas) return -1;
                    if (bHas) return 1;
                    return (b.publishedAt ?? '').localeCompare(a.publishedAt ?? '');
                });
                setFaqs(sorted);
                setLoading(false);
            })
            .catch(err => {
                if (cancelled) return;
                console.error('FAQ fetch error:', err);
                setError('FAQの読み込みに失敗しました。時間をおいて再度お試しください。');
                setLoading(false);
            });

        return () => { cancelled = true; };
    }, []);

    const toggleFAQ = (id: string) => {
        setOpenIds(prev =>
            prev.includes(id) ? prev.filter(openId => openId !== id) : [...prev, id]
        );
    };

    return (
        <>
            <SEOHead
                title="よくあるご質問（FAQ）｜群馬の美容師求人"
                description="SALON SIFTへのよくあるご質問。働き方・報酬・サロン環境について、メリットだけでなく厳しい条件も含めてすべてお答えします。"
                canonical="/faq"
            />
            <div className="bg-[#f7f7f5] min-h-screen pt-24 pb-32">
            <div className="max-w-[800px] mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <p className="text-[12px] font-bold tracking-[0.4em] text-[#3a533d] mb-4 uppercase">FAQ</p>
                    <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest text-gray-900 mb-6">よくあるご質問<span className="block text-base md:text-lg mt-4 tracking-wider">群馬の美容師求人｜高崎・前橋の美容室 SALON SIFT</span></h1>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-bold">
                        都合の良いメリットだけでなく、厳しい条件も含めて「すべて」お答えします。
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
                    <div className="space-y-4">
                        {faqs.map((faq) => {
                            const isOpen = openIds.includes(faq.id);
                            return (
                                <div
                                    key={faq.id}
                                    className={`bg-white border transition-colors duration-300 ${isOpen ? 'border-[#3a533d]' : 'border-gray-200'} shadow-sm`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(faq.id)}
                                        className="w-full px-6 py-6 md:px-8 md:py-8 flex items-start justify-between text-left focus:outline-none group gap-4"
                                    >
                                        <span className={`text-base md:text-lg font-bold transition-colors flex-1 ${isOpen ? 'text-[#3a533d]' : 'text-gray-900 group-hover:text-[#3a533d]'}`}>
                                            Q. {faq.question}
                                        </span>
                                        <div className="flex items-center gap-3 shrink-0">
                                            {faq.category && faq.category.length > 0 && (
                                                <div className="hidden md:flex flex-wrap gap-1 justify-end max-w-[180px]">
                                                    {faq.category.map((cat, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-[10px] font-bold tracking-widest text-[#3a533d] border border-[#3a533d] px-2 py-0.5"
                                                        >
                                                            {cat}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                            <div className={`transition-transform duration-300 ${isOpen ? 'text-[#3a533d] rotate-180' : 'text-gray-400'}`}>
                                                {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                                            </div>
                                        </div>
                                    </button>
                                    <div
                                        className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-6 md:pb-8 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="pt-4 border-t border-gray-100 text-sm md:text-base text-gray-600 leading-relaxed font-bold">
                                            <span className="text-[#3a533d] font-bold mr-2">A.</span>
                                            <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className="mt-20 text-center">
                    <p className="text-sm text-gray-600 mb-6 font-bold">その他、気になる点がある方はLINEより直接ご相談ください。</p>
                </div>
            </div>
            </div>
        </>
    );
};

export default FAQListPage;
