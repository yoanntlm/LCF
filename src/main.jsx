import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MoralisProvider } from "react-moralis"


ReactDOM.render(
  <MoralisProvider appId="douYgTIk145bxMocJzHyOheIZrr9yU7FgwJKJ1by" serverUrl="https://6qadtixw3khm.usemoralis.com:2053/server">
  <App />
  </MoralisProvider>,
  document.getElementById('root')
)
