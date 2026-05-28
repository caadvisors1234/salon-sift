import React, { useEffect, useState } from 'react';
import { MapPin, Phone, ExternalLink, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import type { MicroCMSSalonInfo } from '../types';
import SEOHead from '../components/SEOHead';

const salonSeo = (
    <SEOHead
        title="サロン情報｜群馬・高崎の美容室 SALON SIFT"
        description="SALON SIFTのサロン情報。募集要項・待遇、サロン環境・設備、アクセス情報をご案内します。群馬・高崎で美容師として働くなら。"
        canonical="/salons"
    />
);

const SalonInfoPage: React.FC = () => {
    const [salon, setSalon] = useState<MicroCMSSalonInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        fetch('/api/microcms/salon-info')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json() as Promise<MicroCMSSalonInfo>;
            })
            .then(data => {
                if (cancelled) return;
                setSalon(data);
                setLoading(false);
            })
            .catch(err => {
                if (cancelled) return;
                console.error('Salon fetch error:', err);
                setError('サロン情報の読み込みに失敗しました。時間をおいて再度お試しください。');
                setLoading(false);
            });

        return () => { cancelled = true; };
    }, []);

    if (loading) {
        return (
            <>
                {salonSeo}
                <div className="bg-[#f7f7f5] min-h-screen pt-24 pb-32">
                    <div className="text-center py-20 text-gray-500 font-bold tracking-widest text-sm">
                        読み込み中...
                    </div>
                </div>
            </>
        );
    }

    if (error || !salon) {
        return (
            <>
                {salonSeo}
                <div className="bg-[#f7f7f5] min-h-screen pt-24 pb-32">
                    <div className="max-w-[800px] mx-auto px-6">
                        <div className="bg-white border border-[#B91C1C] p-6 text-[#B91C1C] font-bold text-sm">
                            {error ?? 'サロン情報が見つかりませんでした。'}
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if (salon.isVisible === false) {
        return (
            <>
                {salonSeo}
                <div className="bg-[#f7f7f5] min-h-screen pt-24 pb-32">
                    <div className="text-center py-20 text-gray-500 font-bold tracking-widest text-sm">
                        現在このサロン情報は公開されていません。
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {salonSeo}
            <div className="bg-[#f7f7f5] min-h-screen pt-24 pb-32">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    {salon.label && (
                        <p className="text-[12px] font-bold tracking-[0.4em] text-[#3a533d] mb-4 uppercase">{salon.label}</p>
                    )}
                    <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest text-gray-900 mb-6">
                        {salon.name}<br />
                        {salon.subtitle && (
                            <span className="text-base md:text-lg block mt-3 tracking-wider">{salon.subtitle}</span>
                        )}
                    </h1>
                    {salon.city && (
                        <div className="text-[10px] font-bold tracking-[0.2em] text-[#3a533d] border border-[#3a533d] px-3 py-1 inline-block mb-6">
                            {salon.city}
                        </div>
                    )}
                    {salon.description && (
                        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-bold whitespace-pre-line">
                            {salon.description}
                        </p>
                    )}
                </div>

                {/* Hero Image */}
                {salon.image?.url && (
                    <div className="relative aspect-[21/9] w-full mb-20 overflow-hidden shadow-2xl">
                        <img
                            src={salon.image.url}
                            alt={salon.name}
                            className="w-full h-full object-cover transition-all duration-1000"
                        />
                        {salon.recruitBadge && (
                            <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-[#B91C1C] text-white px-6 py-3 text-xs md:text-sm font-bold tracking-widest shadow-lg">
                                {salon.recruitBadge}
                            </div>
                        )}
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* 左側：詳細情報と条件 */}
                    <div className="lg:col-span-7 space-y-16">
                        {salon.recruitRequirements && salon.recruitRequirements.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold border-b-2 border-[#3a533d] pb-4 mb-8 tracking-widest">募集要項・待遇</h2>
                                <div className="space-y-6 text-sm font-bold text-gray-700">
                                    {salon.recruitRequirements.map((req, idx) => (
                                        <div key={idx} className={`bg-white p-6 shadow-sm border-l-4 ${req.isWarning ? 'border-gray-300' : 'border-[#3a533d]'}`}>
                                            <h3 className={`text-lg mb-2 border-b border-gray-100 pb-2 ${req.isWarning ? 'text-gray-600' : 'text-[#3a533d]'}`}>
                                                {req.title}
                                            </h3>
                                            <div className="leading-relaxed mt-4" dangerouslySetInnerHTML={{ __html: req.body }} />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {salon.facilities && salon.facilities.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold border-b-2 border-[#3a533d] pb-4 mb-8 tracking-widest">サロン環境・設備</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-gray-700">
                                    {salon.facilities.map((fac, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 className="text-[#3a533d]" size={18} /> {fac}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    {/* 右側：アクセスと基本情報 */}
                    <div className="lg:col-span-5">
                        <div className="bg-white shadow-xl p-8 md:p-10 sticky top-28">
                            <h2 className="text-xl font-bold font-montserrat tracking-widest border-b border-gray-200 pb-4 mb-8">ACCESS & INFO</h2>

                            <div className="space-y-6 text-sm font-bold text-gray-700 mb-10">
                                <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
                                    <MapPin size={20} className="text-[#3a533d] shrink-0 mt-0.5" />
                                    <div>
                                        <p className="leading-relaxed mb-2">{salon.address}</p>
                                        <a href={`https://maps.google.com/?q=${encodeURIComponent(salon.address.split('(')[0].trim())}`} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-[#3a533d] border-b border-[#3a533d] hover:text-[#B91C1C] hover:border-[#B91C1C] transition-colors">
                                            Google Maps で開く
                                        </a>
                                    </div>
                                </div>
                                {salon.phone && (
                                    <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
                                        <Phone size={20} className="text-[#3a533d] shrink-0" />
                                        <p className="text-lg font-montserrat tracking-wider">{salon.phone}</p>
                                    </div>
                                )}
                                {salon.businessHours && (
                                    <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
                                        <Clock size={20} className="text-[#3a533d] shrink-0" />
                                        <p>{salon.businessHours}</p>
                                    </div>
                                )}
                                {salon.holidays && (
                                    <div className="flex items-center gap-4 pb-6">
                                        <Calendar size={20} className="text-[#3a533d] shrink-0" />
                                        <p>{salon.holidays}</p>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col gap-4">
                                {salon.hotpepper && (
                                    <a href={salon.hotpepper} target="_blank" rel="noopener noreferrer" className="bg-[#333] text-white text-center py-4 text-xs font-bold tracking-widest hover:bg-[#3a533d] transition-colors flex items-center justify-center gap-2">
                                        HotPepper Beauty <ExternalLink size={14} />
                                    </a>
                                )}
                                {salon.beauty && (
                                    <a href={salon.beauty} target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-center py-4 text-xs font-bold tracking-widest hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                        楽天ビューティ <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default SalonInfoPage;
