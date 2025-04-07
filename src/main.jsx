import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'aos/dist/aos.css';
import './assets/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/style.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
