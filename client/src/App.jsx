import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experiences from './components/Experiences';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks/>
      <About/>
      <Portfolio />
      <Experiences/>
      <Contact/>
    </div>
  );
};

export default App;
