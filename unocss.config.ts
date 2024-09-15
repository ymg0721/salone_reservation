import type { RuleContext } from 'unocss'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { Breakpoints } from './src/breakpoints'

const breakpoints: Record<string, string> = Object.fromEntries(
  Object.entries(Breakpoints).map(item => [item[0], `${item[1]}px`]),
)

export default defineConfig({
  shortcuts: [
    [
      /^only-(.*)$/,
      (match: RegExpMatchArray, _context: Readonly<RuleContext<any>>) => {
        const targetBreakpoints = match[1].split('-')
        const hiddenBreakpoints = Object.keys(breakpoints).filter(
          item => !targetBreakpoints.includes(item),
        )
        return hiddenBreakpoints.map(item => `!at-${item}:hidden`).join(' ')
      },
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1,
      warn: true,
      extraProperties: {
        display: 'inline-block',
      },
      collections: {
        app: FileSystemIconLoader('./src/assets/icons', svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')),
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Noto Sans JP',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    breakpoints,
  },
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
    },
  },
})
