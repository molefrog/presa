import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultSlideTheme } from '../../theme'

// SlideTheme provides computed theme defaults
// to child components on a slide.
const themeTransformer = theme => {
  let slideTheme = {}
  const inheritedKeys = ['baseFont', 'monoFont', 'textColor']

  inheritedKeys.forEach(key => (slideTheme[key] = theme[key]))
  Object.assign(slideTheme, defaultSlideTheme, theme.slide)

  return {
    ...theme,
    slide: slideTheme
  }
}

const SlideTheme = props => (
  <ThemeProvider theme={themeTransformer} {...props} />
)

export default SlideTheme
