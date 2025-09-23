import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import test from './Test.jsx'



const el = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactEl = React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_blank"
  },
  "click medsd",
  
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  
  // </StrictMode>,
  // el
  reactEl
)
