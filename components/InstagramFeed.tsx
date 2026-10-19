import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const INSTAGRAM_URL = 'https://www.instagram.com/salon_sift_recruit';

const EMBED_POSTS = [
  { id: 'DeE_UdLgRc6', permalink: 'https://www.instagram.com/reel/DeE_UdLgRc6/' },
  { id: 'Dd3Vy5alQxY', permalink: 'https://www.instagram.com/reel/Dd3Vy5alQxY/' },
  { id: 'DZUjFSPE9oe', permalink: 'https://www.instagram.com/p/DZUjFSPE9oe/' },
];

const SCRIPT_ID = 'instagram-embed-script';

const InstagramFeed: React.FC = () => {
  useEffect(() => {
    if (!document.getElementById(SCRIPT_ID)) {
      // 初回：スクリプトを動的に追加
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      // 既にスクリプト読込済みの場合は再処理
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="bg-white py-20 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="text-[#3a533d]" size={24} />
              <p className="text-xs font-bold tracking-[0.4em] text-[#3a533d] uppercase">Instagram</p>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat tracking-widest text-gray-900">
              @salon_sift_recruit
            </h2>
            <p className="text-sm text-gray-500 mt-3 font-bold">
              スタイリストの日常・求人情報を毎日更新中
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#3a533d] text-[#3a533d] font-bold tracking-widest text-xs px-8 py-4 hover:bg-[#3a533d] hover:text-white transition-all duration-300 shrink-0"
          >
            <Instagram size={16} />
            フォローする
          </a>
        </div>

        {/* Embed Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          {EMBED_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-crop block group"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={`${post.permalink}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  padding: 0,
                }}
              />
              <div className="instagram-crop-overlay">
                <Instagram className="text-white drop-shadow-lg" size={40} strokeWidth={1.5} />
              </div>
            </a>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#3a533d] font-bold text-sm tracking-widest hover:opacity-70 transition-opacity border-b border-[#3a533d] pb-1"
          >
            <Instagram size={16} />
            もっと見る @salon_sift_recruit
          </a>
        </div>

      </div>
    </section>
  );
};

export default InstagramFeed;
