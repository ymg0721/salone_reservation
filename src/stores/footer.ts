export interface Breadcrumb {
  path: string
  text: string
}

export const useFooterStore = defineStore('footer', () => {
  const breadcrumbs = ref<Breadcrumb[]>([])
  const isShowContent = ref(true)
  const setFooter = (newBreadcrumbs: Breadcrumb[] | boolean) => {
    if (typeof newBreadcrumbs === 'boolean') {
      isShowContent.value = newBreadcrumbs
      return
    }
    isShowContent.value = true
    breadcrumbs.value = newBreadcrumbs
  }
  return { breadcrumbs, isShowContent, setFooter }
}, {
  persist: true,
})
