import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Content from './components/Content'

function App() {
  return (
 <div className='main'>
  
      <Navbar />
      <Content />
      <Contact />
      <Footer />
-   </div>
  )
}

export default App
