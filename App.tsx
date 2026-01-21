import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-amber-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <Services />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;