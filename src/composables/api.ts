import type { ApiInstance } from '~/api'

export const useApi = () => {
  const { $api } = useNuxtApp()
  return $api as ApiInstance
}
