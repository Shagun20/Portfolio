import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
    import { store } from './shared/store.js';
import {BrowserRouter} from 'react-router-dom'


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <App />
  </BrowserRouter>
   
)
