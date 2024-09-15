export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ja-JP',
  fallbackLocale: 'en-US',
  silentTranslationWarn: true,
  missingWarn: false,
  fallbackWarn: false,
  datetimeFormats: {
    'ja-JP': {
      year: {
        year: 'numeric',
      },
      month: {
        year: 'numeric',
        month: '2-digit',
      },
      date: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      },
      datetime: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      },
      time: {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      },
    },
    'en-US': {
      year: {
        year: 'numeric',
      },
      month: {
        year: 'numeric',
        month: '2-digit',
      },
      date: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      },
      datetime: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      },
      time: {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      },
    },
  },
}))
