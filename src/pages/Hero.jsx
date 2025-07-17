import React from 'react';

// renders hero section with gradient orbs
function Hero() {
  return (
    <section className="hero">
      <div className="orb one"></div>
      <div className="orb two"></div>
      <h1>tagline for our yc shit <span style={{color:'var(--accent)'}}>ai blah blah blah</span></h1>
      <p>description shit</p>
      <a href="#waitlist" className="btn">get early access</a>
    </section>
  );
}

export default Hero;
