import React from 'react'
import ReactDom from 'react-dom/client'
import GlobalStyle from './styles/globalStyles.js';
import Home from './pages/Home'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Home/>
  </React.StrictMode>,
)
