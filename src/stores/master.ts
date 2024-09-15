import { defineStore } from 'pinia'
import type { MasterIndexResponse } from '~/api/master'
import { City } from '~/models/city'
import { Plan } from '~/models/plan'
import { Prefecture } from '~/models/prefecture'
import { PrefectureArea } from '~/models/prefectureArea'

export const useMasterStore = defineStore('master', () => {
  const rawCache = ref<string>()
  const cache = ref<MasterIndexResponse>()

  const isLoading = ref<boolean>(false)
  const pendingRequest = ref<Promise<MasterIndexResponse>>()
  const api = useApi()

  const getMasterData = async (): Promise<MasterIndexResponse> => {
    if (cache.value !== undefined)
      return cache.value

    if (rawCache.value !== undefined) {
      const cacheObject = JSON.parse(rawCache.value)
      cache.value = {
        areas: (cacheObject.areas || []).map((item: any) => new PrefectureArea(item)),
        prefectures: (cacheObject.prefectures || []).map((item: any) => new Prefecture(item)),
        specialCities: (cacheObject.specialCities || []).map((item: any) => new City(item)),
        plans: (cacheObject.plans || []).map((item: any) => new Plan(item)),
      }
      return cache.value
    }

    if (isLoading.value)
      return pendingRequest.value! // 既存のリクエストが完了するのを待つ

    isLoading.value = true

    try {
      pendingRequest.value = api.master.get() // API リクエストを実行し、結果のPromiseを保存
      const result = await pendingRequest.value
      cache.value = result // 結果をキャッシュに保存
      rawCache.value = JSON.stringify(result) // キャッシュの生データも保存
      pendingRequest.value = undefined // リクエスト完了後はnullにリセット
      isLoading.value = false
      return result
    }
    catch (error) {
      pendingRequest.value = undefined
      isLoading.value = false
      throw error
    }
  }
  return { getMasterData, rawCache }
})
