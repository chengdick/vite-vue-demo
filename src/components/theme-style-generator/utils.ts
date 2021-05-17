const STYLE_EL_ID: string = 'theme-style-customize'
const generateCssStyle = (
  colors: Record<string, string>,
  styleTemplate: string
) => {
  let cssText = styleTemplate
  Object.keys(colors).forEach((key) => {
    cssText = cssText.replace(new RegExp(`{{${key}}}`, 'g'), `${colors[key]}`)
  })
  return cssText
}

const writeNewStyle = (cssText: string, styleId?: string) => {
  const id = styleId || STYLE_EL_ID
  let themeStyleEl = document.getElementById(id)

  // 多个spa互相切换时，为避免样式冲突，同一styleId仅保留一份样式。
  if (themeStyleEl) {
    themeStyleEl.innerText = cssText
  } else {
    themeStyleEl = document.createElement('style')
    themeStyleEl.id = id
    themeStyleEl.innerText = cssText
    document.body.appendChild(themeStyleEl)
  }
}

export { generateCssStyle, writeNewStyle }
