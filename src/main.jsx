import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {GlobalStyle} from "./components/GlobalStyle.styled.js";
import {BrowserRouter} from "react-router-dom";
import {ThemeContextProvider} from "./context/ThemeContext.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";
import {TasksProvider} from "./context/TaskContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <ThemeContextProvider>
              <GlobalStyle />
              <AuthProvider>
                  <TasksProvider>
                      <App />
                  </TasksProvider>
              </AuthProvider>
          </ThemeContextProvider>
      </BrowserRouter>
  </StrictMode>,
)
