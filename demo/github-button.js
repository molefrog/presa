import React, { Component } from 'react'

class GithubButton extends Component {
  render() {
    const { user, repo, className } = this.props
    const type = this.props.type || 'star'

    const frameSource =
      '//ghbtns.com/github-btn.html' +
      `?user=${user}&repo=${repo}&type=${type}&count=true&size=large`

    return (
      <iframe
        className={className}
        src={frameSource}
        frameBorder="0"
        scrolling="0"
        height={30}
      />
    )
  }
}

export default GithubButton
