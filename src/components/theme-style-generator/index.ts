import { generateCssStyle, writeNewStyle } from './utils'

const themes: Record<string, Record<string, string>> = {
  colors: {
    primary: '#0F6BAE',
    'primary-light-1': '#248BD6',
    'primary-light-2': '#83B8FF',
    'primary-light-3': '#C6CDFF',
    'primary-contrast': 'color({{primary}} contrast(80))',
  },
}
type generateThemeType = (ST: string, SL?: string) => void
const generateTheme: generateThemeType = (styleTemplate, styleId) => {
  let cssText
  // 默认主题样式文本
  cssText = generateCssStyle(themes.colors, styleTemplate)

  // 压缩cssText
  cssText = cssText.replace(/\s*\n\s*/g, '').replace(/\s*([{}>:,+])\s*/g, '$1')

  writeNewStyle(cssText, styleId)
}
export default generateTheme
