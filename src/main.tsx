import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from '../src/components/routing/index'
import './index.css'
import Homepage from'../src/components/home-page/Homepage.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
)
