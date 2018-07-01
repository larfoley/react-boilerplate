import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'
import 'normalize.css'
import './variables.css'

// Global Styles
injectGlobal`
  body {
    background-color: var(--main-bg-color);
    font-family: var(--font-family);
  }
  img {
    max-width: 100%;
    vertical-align: middle;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
