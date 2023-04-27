import React from 'react'

import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import Home from './Home'
import Portfolio from './Portfolio'

const App: React.FC = () => {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
