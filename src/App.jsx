import React from "react";
import {Routes, Route} from 'react-router-dom'
import { Header } from "./components/static/Header";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicePage } from "./components/pages/ServicePage";
import { ContactPage } from "./components/pages/ContactPage"; 

const App = () => {
  return(
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<AboutPage/>} />
      <Route path="/Service" element={<ServicePage/>} />
      <Route path="/Contact" element={<ContactPage/>} />
    </Routes>
    </>
  )
}

export default App