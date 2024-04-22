import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Workflow from './components/Workflow'
import PriceSection from './components/PriceSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='px-6 pt-20 mx-auto max-w-7xl'>
      <HeroSection/>
      <Features/>
      <Workflow/>
      <PriceSection/>
      <Testimonials/>
      <Footer/>
      </div>
    </>
  )
}

export default App
