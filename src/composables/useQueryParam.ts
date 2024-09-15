import type { LocationQuery } from 'vue-router'

/**
 * クエリパラメータから指定されたキーの値を文字列型で取得する
 * @param query クエリパラメータのオブジェクト
 * @param key 取得したいクエリパラメータのキー
 * @returns キーに対応する値（文字列型）、キーが存在しない場合は空文字列
 */
export function getQueryParamAsString(query: LocationQuery, key: string): string {
  const value = query[key]
  if (Array.isArray(value))
    return value.join(',')

  return value ? String(value) : ''
}

/**
 * クエリパラメータから指定されたキーの値を数値型で取得する
 * @param query クエリパラメータのオブジェクト
 * @param key 取得したいクエリパラメータのキー
 * @returns キーに対応する値（文字列型）、キーが存在しない場合は空文字列
 */
export function getQueryParamAsNumber(query: LocationQuery, key: string): number {
  const value = query[key]
  if (Array.isArray(value))
    return 0

  return value ? Number(value) : 0
}
