import React from 'react'
import ReactDOM from 'react-dom/client'
import { CookiesProvider } from 'react-cookie';
import App from './App.jsx'
import './index.css'

//npm i react-router-dom / notify the errors of the web design or components.
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
