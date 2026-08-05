import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GlobalStyle} from "./components/GlobalStyle.styled.js";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <GlobalStyle />
          <App />
      </BrowserRouter>
  </StrictMode>,
)
