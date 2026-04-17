import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Signup from './views/signup/index.jsx';
import { AuthContextProvider } from './context/index.jsx';

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/smit-ecommerce" element={<App />} />
          <Route path="/smit-ecommerce/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  </AuthContextProvider>
)
