import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './componentes/footer/Footer';
import Whatsapp from './componentes/whatsapp/Whatsapp';
import Construccion from '../src/pages/Construccion';
import Punto9 from './componentes/header/punto9/punto9';
import Punto10 from './componentes/header/punto10/punto10';
import Punto11 from './componentes/header/punto11/punto11';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

   const ScrollToTop = () => {
    window.scrollTo({
      top: (0,0),
      behavior: 'smooth',
    });

  return null;
} 

  return (
    <>
    <Router>
      <ScrollToTop/>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/construccion' element={<Construccion/>}/>
      <Route path='/punto9' element={<Punto9/>}/>
      <Route path='/punto10' element={<Punto10/>}/>
      <Route path='/punto11' element={<Punto11/>}/>
      
    </Routes>  
    <Whatsapp/>
    <Footer/>
    </Router>
    
    </>

  )
}

export default App;
