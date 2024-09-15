import type { Ref } from 'vue'

export class Location {
  postcode: string
  prefectureCode: string
  prefecture: string
  prefectureKana: string
  city: string
  cityKana: string
  address: string
  addressKana: string

  get fullAddress(): string {
    return `${this.prefecture}${this.city}${this.address}`
  }

  get fullAddressKana(): string {
    return `${this.prefectureKana}${this.cityKana}${this.addressKana}`
  }

  constructor(data: any = {}) {
    this.postcode = data.postcode || ''
    this.prefectureCode = data.prefectureCode || ''
    this.prefecture = data.prefecture || ''
    this.prefectureKana = data.prefectureKana || ''
    this.city = data.city || ''
    this.cityKana = data.cityKana || ''
    this.address = data.address || ''
    this.addressKana = data.addressKana || ''
  }
}

export interface LocationFormKeys {
  postcode: string
  prefectureCode?: string
  prefecture?: string
  prefectureKana?: string
  city?: string
  cityKana?: string
  address?: string
  addressKana?: string
  fullAddress?: string
  fullAddressKana?: string
}

interface ZipCloudResponse {
  status: number
  message: string
  results: {
    zipcode: string
    prefcode: string
    address1: string
    address2: string
    address3: string
    kana1: string
    kana2: string
    kana3: string
  }[]
}

export interface PostcodeLocationResult {
  location: Ref<Location>
  loading: Ref<boolean>
}

const isValidPostcode = (postcode: string): boolean =>
  postcode.match(/^\d{3}-?\d{4}$/) !== null

const fetchLocation = (postcode: string): Promise<Location> => {
  return new Promise((resolve, reject) => {
    fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postcode}`)
      .then(res => res.json())
      .then((json: ZipCloudResponse) => {
        if (json.status === 200 && json.results.length > 0) {
          resolve(
            new Location({
              postcode: json.results[0].zipcode,
              prefectureCode: json.results[0].prefcode,
              prefecture: json.results[0].address1,
              prefectureKana: json.results[0].kana1,
              city: json.results[0].address2,
              cityKana: json.results[0].kana2,
              address: json.results[0].address3,
              addressKana: json.results[0].kana3,
            }),
          )
        }
        else {
          reject(json.message)
        }
      })
  })
}

export function usePostcodeLocation(
  postcode: Ref<string>,
): PostcodeLocationResult {
  const location = ref<Location>(new Location())
  const loading = ref<boolean>(false)

  watch(postcode, async (val: string) => {
    if (isValidPostcode(val)) {
      try {
        loading.value = true
        location.value = await fetchLocation(val)
      }
      catch (e) {
        console.error(e)
      }
      loading.value = false
    }
  })

  return {
    location,
    loading,
  }
}

export function usePostcodeLocationForm(
  formValue: Ref<any>,
  formKeys: LocationFormKeys,
): PostcodeLocationResult {
  const location = ref<Location>(new Location())
  const loading = ref<boolean>(false)

  watch(
    () => formValue.value[formKeys.postcode],
    async (postcode: string) => {
      if (isValidPostcode(postcode)) {
        try {
          loading.value = true
          const location = await fetchLocation(postcode)
          if (formKeys.prefectureCode)
            formValue.value[formKeys.prefectureCode] = location.prefectureCode

          if (formKeys.prefecture)
            formValue.value[formKeys.prefecture] = location.prefecture

          if (formKeys.prefectureKana)
            formValue.value[formKeys.prefectureKana] = location.prefectureKana

          if (formKeys.city)
            formValue.value[formKeys.city] = location.city

          if (formKeys.cityKana)
            formValue.value[formKeys.cityKana] = location.cityKana

          if (formKeys.address)
            formValue.value[formKeys.address] = location.address

          if (formKeys.addressKana)
            formValue.value[formKeys.addressKana] = location.addressKana

          if (formKeys.fullAddress)
            formValue.value[formKeys.fullAddress] = location.fullAddress

          if (formKeys.fullAddressKana)
            formValue.value[formKeys.fullAddressKana] = location.fullAddressKana
        }
        catch (e) {
          console.error(e)
        }
        loading.value = false
      }
    },
  )

  return {
    location,
    loading,
  }
}
