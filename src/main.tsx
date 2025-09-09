import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Layout from './application-layout/Layout.tsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.tsx'
import Actuality from './components/Actuality.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Layout>      
    </Layout>
    <Routes>
    
      <Route path="/" element={<HomePage />} />
      <Route path="/feed" element={<Actuality/>}/>
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
