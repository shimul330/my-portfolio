
import "./index.css"
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Education from "./Components/Education"
import Project from "./Components/Project"

import Contact from "./Components/Contact"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

function App() {
   useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-1 bg-[#0F172A]">
        <section className="mt-4"><Hero/></section>
        <section className="mt-4"><About/></section>
        <section className="mt-4"><Skills/></section>
        <section className="mt-4"><Education/></section>
        <section className="mt-4"><Project/></section>
        <section className="mt-4"><Contact/></section>
       
        
      </main>

      <Footer />
    </div>

  )
}

export default App
