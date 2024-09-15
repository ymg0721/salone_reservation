import type { SougijouDetail } from '~/models/sougijouDetail'

export interface requestContent {
  familyName: string
  givenName: string
  familyNameKana: string
  givenNameKana: string
  phone: string
  situation: string

  deliveryMethod: string // 1:郵送でお届け or 2:メールでお届け
  deliveryPostalCode: string
  deliveryAddress1: string
  deliveryAddress2: string
  deliveryEmail: string
  isReceiveMarketingEmail: boolean

  // 郵送の場合：葬儀を検討している地域
  sougiAreaSelect: string // 1: 参照元葬儀場 2:近隣 3:その他
  sougiAreaPrefecture: string
  sougiAreaCity: string

  // メールの場合：葬儀を検討している地域
  sougiAreaSelectForMail: string // 1: 参照元葬儀場 3:その他
  sougiAreaPrefectureForMail: string
  sougiAreaCityForMail: string

  // リファラル元の葬儀場
  referrerSougijouDetail: SougijouDetail | undefined

  isPrivacyAgree: boolean
}

export const newRequestContent = (): requestContent => ({
  familyName: '',
  givenName: '',
  familyNameKana: '',
  givenNameKana: '',
  phone: '',
  situation: '',
  deliveryMethod: '1',

  deliveryPostalCode: '',
  deliveryAddress1: '',
  deliveryAddress2: '',
  deliveryEmail: '',
  isReceiveMarketingEmail: true,

  sougiAreaSelect: '2',
  sougiAreaPrefecture: '',
  sougiAreaCity: '',

  sougiAreaSelectForMail: '3',
  sougiAreaPrefectureForMail: '',
  sougiAreaCityForMail: '',

  referrerSougijouDetail: undefined,

  isPrivacyAgree: false,
})

// 資料請求フォーム用のストア
export const useContactStore = defineStore('contact', () => {
  const requestContent = ref<requestContent>()
  const getRequestContent = (): requestContent => {
    if (!requestContent.value)
      requestContent.value = newRequestContent()
    return requestContent.value
  }
  const setRequestContent = (content: requestContent) => {
    requestContent.value = content
  }
  return { getRequestContent, setRequestContent }
})
