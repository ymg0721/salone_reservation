import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "../../node_modules/.pnpm/nuxt@3.10.3_@opentelemetry+api@1.8.0_@types+node@20.12.12_@unocss+reset@0.60.3_axios@1.7.2_es_6bymwpsdonr7zw7ylaklmkxzqm/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}