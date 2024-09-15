import { defineNuxtConfig } from 'nuxt'
import appConfig from './app.config.json'
import { locales } from './src/i18n'
import { Breakpoints } from './src/breakpoints'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: appConfig.ssr,
  srcDir: 'src/',
  css: [
    // '@/assets/scss/sp/style.scss',
    // '@/assets/scss/setting/import.scss',
  ],
  modules: [
    '@zadigetvoltaire/nuxt-gtm',
    'nuxt-swiper',
    '@nuxt/devtools',
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-jsonld',
    ['@nuxtjs/robots', {
      rules: {
        UserAgent: '*',
        Disallow: [
          '/area/search-location/*',
          '/request/confirm/ ',
          '/request/finish/',
        ],
        Sitemap: `${process.env.NUXT_PUBLIC_APP_ORIGIN}/sitemap-index.xml`,
      },
    }],
    '@vueuse/nuxt',
    [
      '@nuxtjs/i18n',
      {
        i18n: './i18n.config.ts',
        locales,
        defaultLocale: locales[0]?.code,
        strategy: 'no_prefix',
        lazy: true,
        langDir: 'i18n/langs',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root',
        },
      },
    ],
  ],
  site: {
    url: process.env.NUXT_PUBLIC_APP_ORIGIN,
  },
  plugins: [
    '~/plugins/gsap.ts',
    '~/plugins/add-trailing-slash.ts',
  ],
  swiper: {
  },
  gtm: {
    id: process.env.NUXT_PUBLIC_GTAG_ID!,
    debug: process.env.NODE_ENV !== 'production',
    loadScript: true,
    enableRouterSync: true,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#',
      },
      title: '葬儀・葬式なら【1日葬・家族葬のこれから】',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: '1日葬・家族葬のこれから' },
        { property: 'og:image', content: `${process.env.NUXT_PUBLIC_APP_ORIGIN}/og_image.jpg` },
        { property: 'og:locale', content: 'ja_JP' },
        { property: 'thumbnail', content: `${process.env.NUXT_PUBLIC_APP_ORIGIN}/thumbnail_logo.png` },
        { name: 'twitter:card', content: 'summary' },
        { name: 'theme-color', content: '#E1F4FA' },
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID}`,
          type: 'text/javascript',
          async: true,
        },
      ],
    },
  },
  serverMiddleware: [
    { path: '/api/proxy', handler: '~/server/middleware/proxy.js' },
  ],
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer',
          ]
        : ['@juggle/resize-observer'],
  },
  imports: {
    dirs: ['stores'],
  },
  image: {
    screens: Breakpoints,
    dir: 'assets/images',
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'cookies',
  },
  runtimeConfig: {
    public: {
      gtagId: '',
      sentryDsn: '',
      isDev: process.env.NODE_ENV !== 'production',
      appEnv: 'local',
      appOrigin: process.env.NUXT_PUBLIC_APP_ORIGIN,
      apiBase: '',
      googleMapKey: process.env.NUXT_PUBLIC_GOOGLE_MAP_KEY,
      googleAnalyticsId: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    },
  },
  sourcemap: {
    server: true,
    client: false,
  },
  routeRules: {
    '/sitemap-index.xml': {
      proxy: {
        to: `${process.env.NUXT_PUBLIC_API_BASE}/sitemap/sitemap-index.xml`,
      },
    },
    '/sitemap_toduhuken.xml': {
      proxy: {
        to: `${process.env.NUXT_PUBLIC_API_BASE}/sitemap/sitemap-toduhuken.xml`,
      },
    },
    '/sitemap_seireishi.xml': {
      proxy: {
        to: `${process.env.NUXT_PUBLIC_API_BASE}/sitemap/sitemap-seireishi.xml`,
      },
    },
    '/sitemap_shiku.xml': {
      proxy: {
        to: `${process.env.NUXT_PUBLIC_API_BASE}/sitemap/sitemap-shiku.xml`,
      },
    },
    '/sitemap_station.xml': {
      proxy: {
        to: `${process.env.NUXT_PUBLIC_API_BASE}/sitemap/sitemap-station.xml`,
      },
    },
    '/sitemap_sougijou.xml': {
      proxy: {
        to: `${process.env.NUXT_PUBLIC_API_BASE}/sitemap/sitemap-sougijou.xml`,
      },
    },
    '/sitemap_review.xml': {
      proxy: {
        to: `${process.env.NUXT_PUBLIC_API_BASE}/sitemap/sitemap-review.xml`,
      },
    },
    '/sitemap_episode.xml': {
      proxy: {
        to: `${process.env.NUXT_PUBLIC_API_BASE}/sitemap/sitemap-interview-customer.xml`,
      },
    },
    '/sitemap_staff_interview.xml': {
      proxy: {
        to: `${process.env.NUXT_PUBLIC_API_BASE}/sitemap/sitemap-interview-staff.xml`,
      },
    },
    '/sitemap.xml': {
      proxy: {
        to: `${process.env.NUXT_PUBLIC_API_BASE}/sitemap/sitemap-other.xml`,
      },
    },

  },
  experimental: {
    renderJsonPayloads: false,
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['vueuc', 'date-fns-tz/formatInTimeZone']
          : [],
    },
  },
})
