import { acceptHMRUpdate, defineStore } from 'pinia'
import * as Sentry from '@sentry/vue'
import type { User } from '@/models/user'

export type UserChangedFunc = (newUser?: User) => void

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>()
  const isReady = ref<boolean>(false)
  const isLoggedin = computed<boolean>(() => !!user.value)
  const _onUserChangedFuncs: Record<symbol, UserChangedFunc> = {}

  const ready = () => {
    isReady.value = true
  }

  const onUserChanged = (callbackfn: UserChangedFunc): (() => void) => {
    const callbackKey = Symbol('onUserChanged')
    _onUserChangedFuncs[callbackKey] = callbackfn

    return () => {
      delete _onUserChangedFuncs[callbackKey]
    }
  }

  const _callUserChangedFuncs = (newUser?: User) => {
    Object.getOwnPropertySymbols(_onUserChangedFuncs).forEach((key) => {
      _onUserChangedFuncs[key](newUser)
    })
  }

  const setUser = (newUser: User): void => {
    if (JSON.stringify(user.value) !== JSON.stringify(newUser)) {
      user.value = newUser
      Sentry.setUser({
        id: user.value.id,
        // email: user.value.email,
        // username: `${user.value.lastName} ${user.value.firstName}`,
        ip_address: '{{auto}}',
      })
    }

    _callUserChangedFuncs(newUser)
  }

  const clearUser = (): void => {
    if (isReady.value && !user.value)
      return

    user.value = null
    Sentry.setUser({
      ip_address: '{{auto}}',
    })

    _callUserChangedFuncs()
  }

  return {
    user,
    isReady,
    isLoggedin,
    ready,
    setUser,
    onUserChanged,
    clearUser,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
