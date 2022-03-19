import { useState } from 'react';
import {Navbar, Welcome, Services, Footer} from './components';




const App = () => {
  return (
    <div className="min-h-screen">
      <div className= "gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
    <Services />
    <Footer />
    </div>
  )
}

export default App
