import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import {  MainContextProvider } from './contextApi/MainContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
      <MainContextProvider>
        <App />
        </MainContextProvider>
      </BrowserRouter>
  </StrictMode>,
)
