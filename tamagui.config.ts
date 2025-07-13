import { createTamagui } from '@tamagui/core'
import { tokens, themes } from '@tamagui/themes'

export const config = createTamagui({
  tokens,
  themes,
})

export type AppTheme = keyof typeof themes
