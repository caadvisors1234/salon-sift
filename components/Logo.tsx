import React from 'react';

// ロゴ素材は logo_salonsift/ から選定し public/logo/ に配置
// horizontal: ヘッダー / stacked: 中央配置のエンブレム / stacked-tagline: フッターなど大きく見せる場所
type LogoVariant = 'horizontal' | 'stacked' | 'stacked-tagline';

const LOGO_SOURCES: Record<LogoVariant, { src: string; width: number; height: number }> = {
    horizontal: { src: '/logo/salon-sift_horizontal_green.svg', width: 472, height: 100 },
    stacked: { src: '/logo/salon-sift_stacked_green.svg', width: 300, height: 221 },
    'stacked-tagline': { src: '/logo/salon-sift_stacked-tagline_green.svg', width: 300, height: 259 },
};

interface LogoProps {
    variant?: LogoVariant;
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'horizontal', className = 'h-10' }) => {
    const { src, width, height } = LOGO_SOURCES[variant];

    return (
        <img
            src={src}
            alt="SALON SIFT（サロンシフト）"
            width={width}
            height={height}
            className={`w-auto select-none ${className}`}
            draggable={false}
        />
    );
};

export default Logo;
