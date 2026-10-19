import React from 'react';

// スマホ幅でだけ、"|" で区切った文節の途中では改行しないようにする。
// PC幅（md以上）ではただのインライン要素なので、表示は変わらない。
// 区切りの前後の空白は文節の外に出す（inline-block の中だと空白が詰まるため）。
interface BreakTextProps {
    text: string;
}

const BreakText: React.FC<BreakTextProps> = ({ text }) => (
    <span>
        {text.split('|').map((part, i) => {
            const [, lead, body, trail] = part.match(/^(\s*)([\s\S]*?)(\s*)$/) ?? ['', '', part, ''];
            return (
                <React.Fragment key={i}>
                    {lead}
                    <span className="max-md:inline-block">{body}</span>
                    {trail}
                </React.Fragment>
            );
        })}
    </span>
);

export default BreakText;
