import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Layout from './application-layout/Layout.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.tsx'
import Actuality from './components/Actuality.tsx'
import Subscribe from './components/Subscribe.tsx'
import AuthProvider from './Context/AuthContext.tsx'
import Login from './components/Login.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Layout>
        </Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feed" element={<Actuality />} />
          <Route path='/subscribe' element={<Subscribe />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
