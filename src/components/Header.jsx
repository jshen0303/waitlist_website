import React from 'react';

// renders top navigation bar
function Header() {
  return (
    <header className="container">
      <div style={{fontWeight:700, fontSize:'1.25rem'}}>Startup Placeholder</div>
      <nav>
        <a href="#features">features</a>
        <a href="#waitlist" className="btn">join waitlist</a>
      </nav>
    </header>
  );
}

export default Header;
