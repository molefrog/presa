export const defaultSlideTheme = {
  baseFontSize: 22,
  fontScale: 1.333,
  background: '#ffffff'
}

export default {
  // Settings related to slide content appearance
  // Can be overwritten
  slide: {},

  // Using web-safe font defaults: base serif font and monospace
  baseFont:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, ' +
    'Ubuntu, Cantarell, "Helvetica Neue", sans-serif',

  monoFont:
    '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", ' +
    '"Source Code Pro", monospace',

  /* Color palette */
  // Slideshow background
  backgroundColor: '#fafafa',

  fullscreenBackgroundColor: '#000000',

  // Used as an accent color in
  // active elements
  primaryColor: '#3c59ff',

  // Default text color
  textColor: '#222222',

  // Icon background
  darkGrayColor: '#5a5a5a',

  // Stardust gray
  mutedTextColor: '#9E9E9E'
}
