export interface PlanInfo {
  id: string
  name: string
  nameShort: string
  defaultPrice: number
  discountPrice: number
  discountPriceIncludeTax: number
}

export enum PlanName {
  Chokusou = 'Chokusou',
  Kasou = 'Kasou',
  Ichinichisou = 'Ichinichisou',
  Kazokusou = 'Kazokusou',
}

interface Plans {
  Chokusou: PlanInfo
  Kasou: PlanInfo
  Ichinichisou: PlanInfo
  Kazokusou: PlanInfo
}
const plans = ref<Plans>({
  Chokusou: {
    id: '1',
    name: 'これからの直葬',
    nameShort: '直葬',
    defaultPrice: 0,
    discountPrice: 0,
    discountPriceIncludeTax: 0,
  },
  Kasou: {
    id: '2',
    name: 'これからの火葬',
    nameShort: '火葬式',
    defaultPrice: 0,
    discountPrice: 0,
    discountPriceIncludeTax: 0,
  },
  Ichinichisou: {
    id: '3',
    name: 'これからの1日葬',
    nameShort: '1日葬',
    defaultPrice: 0,
    discountPrice: 0,
    discountPriceIncludeTax: 0,
  },
  Kazokusou: {
    id: '4',
    name: 'これからの家族葬',
    nameShort: '家族葬',
    defaultPrice: 0,
    discountPrice: 0,
    discountPriceIncludeTax: 0,
  },
})

export const usePlanStore = defineStore('plan', () => {
  const fetched = ref(false)
  const getPlanData = async (): Promise<Plans> => {
    if (fetched.value)
      return plans.value

    const masterData = await useMasterStore().getMasterData()
    for (const plan of masterData.plans) {
      switch (plan.id) {
        case '1':
          plans.value.Chokusou.name = plan.name
          plans.value.Chokusou.nameShort = plan.nameShort
          plans.value.Chokusou.defaultPrice = plan.defaultPrice
          plans.value.Chokusou.discountPrice = plan.discountPrice
          plans.value.Chokusou.discountPriceIncludeTax = Math.floor(plan.discountPrice * 1.1)
          break
        case '2':
          plans.value.Kasou.name = plan.name
          plans.value.Kasou.nameShort = plan.nameShort
          plans.value.Kasou.defaultPrice = plan.defaultPrice
          plans.value.Kasou.discountPrice = plan.discountPrice
          plans.value.Kasou.discountPriceIncludeTax = Math.floor(plan.discountPrice * 1.1)
          break
        case '3':
          plans.value.Ichinichisou.name = plan.name
          plans.value.Ichinichisou.nameShort = plan.nameShort
          plans.value.Ichinichisou.defaultPrice = plan.defaultPrice
          plans.value.Ichinichisou.discountPrice = plan.discountPrice
          plans.value.Ichinichisou.discountPriceIncludeTax = Math.floor(plan.discountPrice * 1.1)
          break
        case '4':
          plans.value.Kazokusou.name = plan.name
          plans.value.Kazokusou.nameShort = plan.nameShort
          plans.value.Kazokusou.defaultPrice = plan.defaultPrice
          plans.value.Kazokusou.discountPrice = plan.discountPrice
          plans.value.Kazokusou.discountPriceIncludeTax = Math.floor(plan.discountPrice * 1.1)
          break
      }
    }
    fetched.value = true
    return plans.value
  }
  return { getPlanData }
})
