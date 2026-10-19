import React from 'react';

// 写真の隅に重ねる控えめな注記。親要素に relative が必要
interface ImageNoteProps {
    className?: string;
}

const ImageNote: React.FC<ImageNoteProps> = ({ className = 'bottom-2 right-2' }) => (
    <span className={`absolute z-10 pointer-events-none select-none bg-black/35 text-white/90 text-[9px] md:text-[10px] leading-none tracking-wider px-1.5 py-1 ${className}`}>
        写真はイメージです
    </span>
);

export default ImageNote;
