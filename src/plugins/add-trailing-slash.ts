import { useRouter } from 'vue-router'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.beforeEach((to, from, next) => {
    // URL の末尾にスラッシュがない場合に追加
    if (!to.path.endsWith('/'))
      next({ path: `${to.path}/`, query: to.query, hash: to.hash })
    else
      next()
  })
})
