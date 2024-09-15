import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'

// sentry が正式に nuxt3 に対応しておらず、下記コメントを参考に実装
// https://github.com/nuxt-community/sentry-module/issues/358#issuecomment-1016983543
// 正式対応がされたら、下記の実装を修正し、上記のコメントを削除する
export default defineNuxtPlugin((NuxtApp) => {
  const config = useRuntimeConfig()

  if (!config.sentryDsn)
    return

  Sentry.init({
    app: [NuxtApp.vueApp],
    dsn: String(import.meta.env.VITE_SENTRY_DSN),
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(
          NuxtApp.$router as any,
        ),
        tracingOrigins: ['localhost', config.public.appOrigin, /^\//],
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    logErrors: false,
    debug: config.public.isDev, // Enable debug mode
    environment: config.public.appEnv, // Set environment
    // The following enables exeptions to be logged to console despite logErrors being set to false (preventing them from being passed to the default Vue err handler)
    beforeSend(event: any, hint: any) {
      // Check if it is an exception, and if so, log it.
      if (event.exception) {
        console.error(
          `[Exeption handled by Sentry]: (${hint.originalException})`,
          { event, hint },
        )
      }
      // Continue sending to Sentry
      return event
    },
    tracingOptions: {
      trackComponents: true,
    },
  })

  NuxtApp.vueApp.mixin(
    Sentry.createTracingMixins({
      trackComponents: true,
      timeout: 2000,
      hooks: ['activate', 'mount', 'update'],
    }),
  )

  Sentry.attachErrorHandler(NuxtApp.vueApp, {
    logErrors: false,
    attachProps: true,
    trackComponents: true,
    timeout: 2000,
    hooks: ['activate', 'mount', 'update'],
  })

  const authStore = useAuthStore()
  authStore.onUserChanged(async (user) => {
    await Sentry.setUser(user || null)
  })

  return {
    provide: {
      sentryCaptureException: (exception: any) =>
        Sentry.captureException(exception),
    },
  }
})
