
import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Packages from './components/Packages'
import About from './components/About'
import Opinions from './components/Opinions'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reactangle1 from './assets/HeaderImage.png'
import 'animate.css';

export default function App() {
  return (
    <>
      <Navbar />


      <img className='absolute top-0  z-[-1] w-full h-[680px] object-cover' src={Reactangle1} alt="" />
      <main className='  container mx-auto overflow-x-hidden'>
        <Header />
        <Packages />
        <About />
        <Opinions />
        {/* <Contact /> */}
      </main>
      
      <Footer />


    </>
  )
}
