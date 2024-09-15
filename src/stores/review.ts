export const useReviewStore = defineStore('review', () => {
  const searchPrefecureSlug = ref<string>('')
  const searchCitiySlug = ref<string>('')
  const searchOptionId = ref<string>('')
  const searchPage = ref<number>(1)

  // 最後の検索条件を保存する
  const setReviewCondition = (prefectureSlug: string, citySlug: string, optionId: string, page: number) => {
    searchPrefecureSlug.value = prefectureSlug
    searchCitiySlug.value = citySlug
    searchOptionId.value = optionId
    searchPage.value = page
  }

  return { searchPrefecureSlug, searchCitiySlug, searchOptionId, searchPage, setReviewCondition }
})
