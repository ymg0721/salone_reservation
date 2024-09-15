export default defineNuxtPlugin(async (nuxtApp) => {
  const setLocale = (locale: string) => {
    useHead({
      htmlAttrs: {
        lang: locale,
      },
    })
  }

  await setLocale((nuxtApp.$i18n as any).locale.value)

  if ((nuxtApp.$i18n as any).onLanguageSwitched) {
    ;(nuxtApp.$i18n as any).onLanguageSwitched = (
      _oldLocale: string,
      newLocale: string,
    ) => {
      setLocale(newLocale)
    }
  }
})
