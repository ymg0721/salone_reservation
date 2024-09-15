
// @ts-nocheck


export const localeCodes =  [
  "ja-JP",
  "en-US"
]

export const localeLoaders = {
  "ja-JP": [{ key: "../src/i18n/langs/ja-JP.json", load: () => import("../src/i18n/langs/ja-JP.json" /* webpackChunkName: "locale__Users_apple_salone_reservation_src_i18n_langs_ja_JP_json" */), cache: true }],
  "en-US": [{ key: "../src/i18n/langs/en-US.json", load: () => import("../src/i18n/langs/en-US.json" /* webpackChunkName: "locale__Users_apple_salone_reservation_src_i18n_langs_en_US_json" */), cache: true }]
}

export const vueI18nConfigs = [
  () => import("../i18n.config.ts?hash=bffaebcb&config=1" /* webpackChunkName: "i18n_config_bffaebcb" */)
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "ja-JP",
      "iso": "ja-JP",
      "name": "日本語",
      "files": [
        "i18n/langs/ja-JP.json"
      ]
    },
    {
      "code": "en-US",
      "iso": "en-US",
      "name": "English",
      "files": [
        "i18n/langs/en-US.json"
      ]
    }
  ],
  "defaultLocale": "ja-JP",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "no_prefix",
  "lazy": true,
  "langDir": "i18n/langs",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18n": "./i18n.config.ts",
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "ja-JP",
    "iso": "ja-JP",
    "name": "日本語",
    "files": [
      {
        "path": "i18n/langs/ja-JP.json"
      }
    ]
  },
  {
    "code": "en-US",
    "iso": "en-US",
    "name": "English",
    "files": [
      {
        "path": "i18n/langs/en-US.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
