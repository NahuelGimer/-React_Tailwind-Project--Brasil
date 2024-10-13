import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services'
import Selects from './components/Selects';
import PrevFooter from './components/PrevFooter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Selects />
      <PrevFooter />
      <Footer />
    </div>
  );
}

export default App;
