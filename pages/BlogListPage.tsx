import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { MicroCMSBlog, MicroCMSListResponse } from '../types';
import SEOHead from '../components/SEOHead';

const formatDate = (iso?: string): string => {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
};

const BlogListPage: React.FC = () => {
    const [blogs, setBlogs] = useState<MicroCMSBlog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        fetch('/api/microcms/blog')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json() as Promise<MicroCMSListResponse<MicroCMSBlog>>;
            })
            .then(data => {
                if (cancelled) return;
                const visible = data.contents.filter(b => b.isVisible !== false);
                // order昇順、未入力は末尾（同順内はdate降順）
                const sorted = [...visible].sort((a, b) => {
                    const aHas = typeof a.order === 'number';
                    const bHas = typeof b.order === 'number';
                    if (aHas && bHas) return (a.order as number) - (b.order as number);
                    if (aHas) return -1;
                    if (bHas) return 1;
                    return (b.date ?? '').localeCompare(a.date ?? '');
                });
                setBlogs(sorted);
                setLoading(false);
            })
            .catch(err => {
                if (cancelled) return;
                console.error('Blog fetch error:', err);
                setError('ブログ記事の読み込みに失敗しました。時間をおいて再度お試しください。');
                setLoading(false);
            });

        return () => { cancelled = true; };
    }, []);

    return (
        <>
            <SEOHead
                title="ブログ＆ニュース｜群馬の美容師求人"
                description="SALON SIFTのブログ＆ニュース。サロンスタイルの最新情報、シェアサロンのリアルな裏側、美容師としての生存戦略を発信します。"
                canonical="/blog"
            />
            <div className="bg-[#f7f7f5] min-h-screen pt-24 pb-32">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <p className="text-[12px] font-bold tracking-[0.4em] text-[#3a533d] mb-4 uppercase">Blog</p>
                    <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest text-gray-900 mb-6">ブログ＆ニュース<span className="block text-base md:text-lg mt-4 tracking-wider">群馬の美容師求人｜高崎・前橋の美容室 SALON SIFT</span></h1>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-bold">
                        サロンスタイルの最新情報、シェアサロンのリアルな裏側、そして美容師としての生存戦略について発信します。
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogs.map((blog) => (
                            <Link to={`/blog/${blog.slug}`} key={blog.id} className="group cursor-pointer block bg-white shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm">
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <img
                                        src={blog.image.url}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {blog.isFeatured && (
                                        <div className="absolute top-4 left-4 bg-[#B91C1C] text-white text-[10px] font-bold tracking-widest px-3 py-1 uppercase shadow-md">
                                            FEATURED
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-3">
                                        {blog.category && blog.category.length > 0 && (
                                            <span className="text-[11px] font-bold tracking-widest text-[#3a533d] border border-[#3a533d] px-2 py-1 uppercase">
                                                {blog.category.join(' / ')}
                                            </span>
                                        )}
                                        {blog.date && (
                                            <span className="text-[11px] font-bold tracking-widest text-gray-400">
                                                {formatDate(blog.date)}
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-lg font-bold text-gray-900 leading-relaxed mb-4 group-hover:text-[#3a533d] transition-colors line-clamp-2">
                                        {blog.title}
                                    </h2>
                                    <div className="flex justify-end">
                                        <span className="text-[#3a533d] text-[10px] font-bold tracking-widest uppercase border-b border-[#3a533d] pb-1 group-hover:px-2 transition-all">Read More</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            </div>
        </>
    );
};

export default BlogListPage;
