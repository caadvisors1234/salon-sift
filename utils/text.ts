/**
 * meta description 用に文字列を1行化して指定文字数に丸める。
 * 改行・連続空白を単一スペースに畳み、n字を超えたら末尾に「…」を付ける。
 */
export const clip = (s: string, n = 120): string => {
  const t = (s ?? '').replace(/\s+/g, ' ').trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
};
