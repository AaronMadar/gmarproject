import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Layout from './application-layout/Layout.tsx'
import Content from './application-layout/Content.tsx'
import Actuality from './components/Actuality.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
    <Content>
      <App>       
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Actuality/>}/>
    </Routes>
    </BrowserRouter>

      </App>
      </Content>
    </Layout>
  </StrictMode>,
)
