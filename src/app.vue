<script setup lang="ts">
onMounted(() => {
  const intervalId = setInterval(() => {
    if (typeof (window as any).plaPageReload == 'function')
      (window as any).plaPageReload('151301,151302')
  }, 3000)
  onUnmounted(() => {
    clearInterval(intervalId)
  })

  const config = useRuntimeConfig()
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { console.log(arguments); dataLayer.push(arguments) }
  gtag('js', new Date())
  gtag('config', config.public.googleAnalyticsId)

  const router = useRouter()
  router.afterEach((to) => {
    if (window.gtag) {
      window.gtag('config', config.public.googleAnalyticsId, {
        page_path: to.fullPath,
      })
    }
  })
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
