// カタカナ
export const katakanaRegex = /^[\u30A1-\u30F6ー]+$/
// メールアドレス
export const emailRegex: RegExp = /^[\w.-]+@[a-z\d.-]+\.[a-z]{2,}$/i
// 郵便番号
export const postalCodeRegex: RegExp = /^\d{7}$/
// ひらがな
export const hiraganaPattern: RegExp = /^[\u3040-\u309F]+$/
// 半角カタカナ
export const katakanaPattern: RegExp = /^[\u30A0-\u30FF｡-ﾟ]+$/
// 全角数字
export const fullDigitsRegex: RegExp = /[０-９]/g
// 半角数字
export const halfDigitsRegex: RegExp = /\d/g
// ハイフン
export const regex: RegExp = /-/
