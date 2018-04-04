<img src="/src/assets/raw/presa-logo.png" height="38px" />

Present with joy in React. Minimal and self-contained framework for presentations built with `styled-components`.
Presa aims to be:

* **Lightweight.** No external css needed and as minimal dependencies as possible.
* **Extendable.** _Presa_ uses `styled-components` so almost all of its internal components can be extended and themized.
* **Modular.** Core barebone and building blocks are separated and may be optionally excluded from the presentation.
* **Aestetically pleasing.** Simple but functional UI, typography included.

Here is how Presa UI looks like:

[![Presa UI](/demo/images/presa-ui.jpg)](http://molefrog.com/stateful-animations/)

List of currently supported features:

* Slideshow mode with optinonal table of the contents in a sidebar.
* Fullscreen API.
* Supports clicker and keyboard navigation.
* _Bird's eye_ view mode.
* Slides are _components_. They are not rendered until the slide is active.

### Getting started

Let's add a simple slide with a background.

```JavaScript
import { Presentation, Slide } from 'presa'

// No need to pass indexes here
const Deck = () => (
  <Presentation>
    <Slide background="wat.jpg">
      Let talk about JavaScript!
    </Slide>
  </Presentation>
)

// Make sure you render into a full-page container
ReactDOM.render(<Deck />, container)
```

If you do that in your app, Presa will run automatically.

### Contributing

Feel free to open issues and PRs! If you want to develop Presa locally you can test your features
by adding them to the demo deck inside the `demo/` folder. To open the development server run `yarn dev`.

The project uses [Prettier](https://prettier.io/) which runs automatically before every commit making
the code base consistent. See also [text editor integrations](https://prettier.io/docs/en/editors.html).
