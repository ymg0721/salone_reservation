export interface SidenavItem {
  name: string
  key: string
  icon?: string
  route?: string
  children?: SidenavItem[]
}

export const useLayoutStore = defineStore(
  'layout',
  () => {
    const isPc = computed(() => useMediaQuery('(min-width: 960px)').value)
    const isTab = computed(
      () => useMediaQuery('(min-width: 520px) and (max-width: 959px)').value,
    )
    const isSp = computed<boolean>(() => !isPc.value && !isTab.value)
    const isSidenavCollapse = ref<boolean>(false)

    const toggleSidenavCollapse = (): void => {
      isSidenavCollapse.value = !isSidenavCollapse.value
    }

    const route = useRoute()

    const sidenavItems = computed<SidenavItem[]>(() => [
      {
        name: 'トップページ',
        key: 'index',
        icon: 'i-mdi-home',
        route: '/',
      },
      {
        name: 'サンプルページ',
        key: 'sample',
        icon: 'i-mdi-account-tie',
        route: '/sample',
      },
      {
        name: '静的ページ',
        key: 'static',
        icon: 'i-mdi-message-badge-outline',
        route: '/static',
      },
    ])

    const activePage = computed<SidenavItem | undefined>(() => {
      let closestItem: SidenavItem | undefined

      for (const sidenavItem of sidenavItems.value) {
        if (
          sidenavItem.route === route.path
          || sidenavItem.key === route.meta.activeNavKey
        )
          return sidenavItem

        if (
          sidenavItem.route
          && route.path.startsWith(sidenavItem.route)
          && sidenavItem.route.split('/').length
          > (closestItem?.route || '').split('/').length
        )
          closestItem = sidenavItem

        for (const childItem of sidenavItem.children || []) {
          if (
            childItem.route === route.path
            || childItem.key === route.meta.activeNavKey
          )
            return childItem

          if (
            childItem.route
            && route.path.startsWith(childItem.route)
            && childItem.route.split('/').length
            > (closestItem?.route || '').split('/').length
          )
            closestItem = childItem
        }
      }
      return closestItem
    })
    const activePageName = computed<string>(() => activePage.value?.name || '')
    const activePageKey = computed<string>(() => activePage.value?.key || '')

    return {
      isPc,
      isTab,
      isSp,
      isSidenavCollapse,
      toggleSidenavCollapse,
      sidenavItems,
      activePageName,
      activePageKey,
    }
  },
  {
    persist: {
      paths: ['isSidenavCollapse'],
    },
  },
)

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
