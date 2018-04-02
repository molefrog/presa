import React from 'react'
import ReactDOM from 'react-dom'

import styled, { injectGlobal } from 'styled-components'

import { Presentation, Slide } from '../src'
import { H1, H2, H3, H4, Code } from '../src/blocks'
import { Presa } from '../src/assets/icons'
import SidebarLayout from './sidebar-layout'

// to prevent additional scrollbars
injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`

const baseTextColor = '#444'

const PitchDeck = () => (
  <Presentation name="Presa pitch deck" theme={{ textColor: baseTextColor }}>
    <Slide
      name="What is Presa?"
      layout={children => (
        <SidebarLayout
          src="https://images.unsplash.com/photo-1416269223193-bc45028133f5?ixlib=rb-0.3.5&s=de9cf50e342bd5a92bf1850dc7f409c0&auto=format&fit=crop&w=1275&q=80"
          children={children}
        />
      )}
    >
      <PresaTitle>Presa</PresaTitle>
      <PresaSlogan>
        Create slides in <b>React</b>, present with joy! <br />Built with
        styled-components 💅
      </PresaSlogan>

      <p>
        Presa is lightweight, declarative and modular. Each slide is a React
        component, only rendered when visible.
      </p>

      <GithubButton>
        <a
          className="github-button"
          href="https://github.com/molefrog/presa"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star molefrog/presa on GitHub"
        >
          Star on GitHub
        </a>
      </GithubButton>

      <p style={{ color: '#999' }}>
        <br />—<br />
        Press the ➡️ button on your keyboard to go to the next slide or use
        controls below.
      </p>
    </Slide>

    <Slide name="Getting started" centered>
      <Code>{`import { Presentation, Slide } from 'presa'

const App = () =>
  <Presentation name="Lightning talk">
    <Slide name="Introduction">
      Hello, everyone!
    </Slide>

    {/* Add your own slides here */}
  </Presentation>

// Make sure you render into a full-page container
ReactDOM.render(<App />, container)`}</Code>
    </Slide>
  </Presentation>
)

const PresaTitle = styled(H1)`
  color: #3c59ff;
`

const PresaSlogan = styled(H3)`
  color: #444;
  margin-bottom: 40px;
`

const GithubButton = styled.div`
  transform: scale(1.2);
  transform-origin: top left;
  margin-top: 20px;
  margin-bottom: 50px;
`

const PresaIcon = styled(Presa)`
  display: inline-block;
  margin-right: 14px;
  width: 40px;
  height: 40px;
`

const rerenderApp = () => {
  const container = document.getElementById('container')

  // clean up and render
  ReactDOM.unmountComponentAtNode(container)
  ReactDOM.render(<PitchDeck />, container)
}

if (module.hot) {
  module.hot.accept(rerenderApp)
}

document.addEventListener('DOMContentLoaded', () => {
  rerenderApp()
})
