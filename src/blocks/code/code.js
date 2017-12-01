import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import defaultColorScheme from './color-scheme'

const codeFactory = Highlight => {
  const defaultLineHeight = 1.4

  // Override additional styles without
  // touching the theme object.
  const StyledHighlight = styled(Highlight)`
    font-size: ${props => props.fontSize}px;
    line-height: ${defaultLineHeight};

    &,
    code,
    pre {
      font-family: ${props => props.theme.monoFont};
    }
  `

  class Code extends Component {
    static propTypes = {
      language: PropTypes.string,
      fontSize: PropTypes.number,
      children: PropTypes.string
    }

    static defaultProps = {
      // why not?
      language: 'javascript'
    }

    getSyntaxTheme() {
      const overridenTheme = this.props.theme.syntaxHighlight

      // Allow to override syntax highlighting theme
      // using global styled-components theme settings.
      if (overridenTheme) {
        return overridenTheme
      }

      return defaultColorScheme
    }

    render() {
      const { className, language, theme } = this.props
      const code = this.props.children

      // Use given font size or fall back to theme defaults
      const fontSize = this.props.fontSize || theme.slide.baseFontSize

      return (
        <StyledHighlight
          style={this.getSyntaxTheme()}
          language={language}
          fontSize={fontSize}
          className={className}
        >
          {code}
        </StyledHighlight>
      )
    }
  }

  // Make sure the component has access to `theme` prop
  return withTheme(Code)
}

export default codeFactory
