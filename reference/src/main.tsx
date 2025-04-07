import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import StyledComponentsRegistry from './registry.tsx';
import { GlobalStyle } from './styles/globalStyles.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledComponentsRegistry>
      <GlobalStyle />
      <App />
    </StyledComponentsRegistry>
  </StrictMode>
)
