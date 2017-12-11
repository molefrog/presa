## Presa
Present with joy in React. Minimal and self-contained framework for presentations built with `styled-components`. Presa aims to be:
  - **Lightweight.** No external css needed and as minimal dependencies as possible.  
  - **Extendable.** *Presa* uses `styled-components` so almost all of its internal components can be extended and themized.
  - **Modular.** Core barebone and building blocks are separated and may be optionally excluded from the presentation.
  - **Aestetically pleasing.** Simple but functional UI, typography included.
  
 List of currently supported features:
   - Slideshow mode with optinonal table of the contents in a sidebar.
   - Fullscreen API.
   - Supports clicker and keyboard navigation.
   - *Bird's eye* view mode. 
   - Slides are *components*. They are not rendered until the slide is active.

### Getting started

Let's add a simple slide with a background.
```JavaScript
  import { Presentation, Slide } from 'presa'
   
  // No need to pass indexes here
  const YourApp = () =>
    <Presentation>
      <Slide background="wat.jpg">
        Let talk about JavaScript!
      </Slide>
    </Presentation>
```

If you do that in your app, Presa will run automatically.
