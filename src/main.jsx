import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GlobalStyle} from "./components/GlobalStyle.styled.js";
import {BrowserRouter} from "react-router-dom";
import {ThemeContextProvider} from "./context/ThemeContext.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <ThemeContextProvider>
              <GlobalStyle />
              <AuthProvider>
                  <App />
              </AuthProvider>
          </ThemeContextProvider>
      </BrowserRouter>
  </StrictMode>,
)
