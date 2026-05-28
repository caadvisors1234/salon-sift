import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Feather } from 'lucide-react';
import type { MicroCMSBlog, MicroCMSListResponse } from '../types';
import SEOHead from '../components/SEOHead';

const formatDate = (iso?: string): string => {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
};

// meta description 用に本文を1行化して120字に丸める
const clip = (s: string, n = 120): string => {
    const t = (s ?? '').replace(/\s+/g, ' ').trim();
    return t.length > n ? `${t.slice(0, n)}…` : t;
};

const BlogDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<MicroCMSBlog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);
        setBlog(null);

        fetch('/api/microcms/blog')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json() as Promise<MicroCMSListResponse<MicroCMSBlog>>;
            })
            .then(data => {
                if (cancelled) return;
                const found = data.contents.find(b => b.slug === slug) ?? null;
                setBlog(found);
                setLoading(false);
            })
            .catch(err => {
                if (cancelled) return;
                console.error('Blog fetch error:', err);
                setError('記事の読み込みに失敗しました。時間をおいて再度お試しください。');
                setLoading(false);
            });

        return () => { cancelled = true; };
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f7f7f5] flex items-center justify-center pt-24">
                <div className="text-gray-500 font-bold tracking-widest text-sm">読み込み中...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#f7f7f5] flex items-center justify-center pt-24">
                <div className="text-center">
                    <p className="text-[#B91C1C] font-bold mb-4">{error}</p>
                    <Link to="/blog" className="text-[#3a533d] underline">Blog一覧に戻る</Link>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen bg-[#f7f7f5] flex items-center justify-center pt-24">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">記事が見つかりませんでした</h2>
                    <Link to="/blog" className="text-[#3a533d] underline">Blog一覧に戻る</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <SEOHead
                title={blog.title}
                description={clip(blog.sections?.[0]?.body || `${blog.title}｜SALON SIFTのブログ＆ニュース`)}
                canonical={`/blog/${blog.slug}`}
                type="article"
            />
            <div className="bg-[#f7f7f5] min-h-screen pt-24 pb-32">
            <div className="max-w-[800px] mx-auto px-6">
                <Link to="/blog" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#3a533d] transition-colors mb-8">
                    <ArrowLeft size={16} className="mr-2" />
                    BACK TO BLOG LIST
                </Link>

                <div className="bg-white shadow-2xl overflow-hidden mb-12 relative group">
                    <div className="aspect-[16/9] w-full relative">
                        <img src={blog.image.url} alt={blog.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        {blog.category && blog.category.length > 0 && (
                            <div className="absolute top-4 left-4 bg-[#3a533d] text-white text-[10px] font-bold tracking-widest px-4 py-2 uppercase shadow-md">
                                {blog.category.join(' / ')}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        {blog.category && blog.category.length > 0 && (
                            <div className="text-[12px] font-bold tracking-widest text-[#3a533d] border border-[#3a533d] px-2 py-1 uppercase">{blog.category.join(' / ')}</div>
                        )}
                        {blog.date && (
                            <div className="text-[12px] font-bold tracking-widest text-gray-500">{formatDate(blog.date)}</div>
                        )}
                        {blog.readTime && blog.readTime.length > 0 && (
                            <div className="flex items-center text-[12px] font-bold tracking-widest text-gray-400">
                                <Clock size={12} className="mr-1" /> {blog.readTime.join(' / ')}
                            </div>
                        )}
                        {blog.author && (
                            <div className="flex items-center text-[12px] font-bold tracking-widest text-gray-400">
                                <User size={12} className="mr-1" /> {blog.author}
                            </div>
                        )}
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed mb-12 border-l-[6px] border-[#3a533d] pl-5">
                        {blog.title}
                    </h1>

                    {blog.sections && blog.sections.map((section, idx) => (
                        <section key={idx} className="mb-16">
                            <h2 className="flex items-center text-xl md:text-2xl font-bold border-b border-gray-200 pb-3 mb-6 tracking-widest text-gray-800">
                                <Feather className="mr-3 text-[#3a533d]" size={24} />
                                <span>{section.heading}</span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-[2.2] font-medium bg-white p-8 md:p-10 shadow-sm border-t-[3px] border-[#3a533d] whitespace-pre-line">
                                {section.body}
                            </p>
                        </section>
                    ))}

                </div>

                <div className="text-center mt-20">
                    <Link to="/blog" className="inline-block bg-white text-gray-900 font-bold tracking-[0.3em] px-12 py-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#3a533d] text-sm">
                        BLOG一覧へ戻る
                    </Link>
                </div>
            </div>
            </div>
        </>
    );
};

export default BlogDetailPage;
