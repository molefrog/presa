import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

// Helper component. Update the body background
// according to the `background` prop.
class BodyBackground extends React.Component {
  static propTypes = {
    background: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.useBackground(props.background)
  }

  useBackground(prop) {
    const body = document.querySelector('body')
    body && (body.style.background = prop)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.background !== this.props.background) {
      this.useBackground(nextProps.background)
    }
  }

  shouldComponentUpdate() {
    return false
  }

  // Don't render anything
  render() {
    return null
  }
}

const GlobalBackground = props => {
  let color = props.theme.backgroundColor

  if (props.isFullscreen) {
    color = props.theme.fullscreenBackgroundColor
  }

  return <BodyBackground background={color} />
}

export default withTheme(GlobalBackground)
