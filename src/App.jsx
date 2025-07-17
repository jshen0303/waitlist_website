import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Waitlist from './components/Waitlist';


// assembles page sections
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Waitlist />
      <Footer />
    </>
  );
}

export default App;
