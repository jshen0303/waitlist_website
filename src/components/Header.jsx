import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleWaitlistClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-inner">
        {/* LOGO LEFT */}
        <div className="header-section header-logo">
          <Link to="/" className="logo">L<span style={{ color: 'var(--accent)' }}>ogo</span></Link>
        </div>

        {/* NAV CENTER */}
        <div className="header-section header-nav">
          <ul className="nav-links">
            <li>
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>home</Link>
            </li>
            <li>
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>about</Link>
            </li>
          </ul>
        </div>

        {/* BUTTON RIGHT */}
        <div className="header-section header-cta">
          <button className="btn" onClick={handleWaitlistClick}>join waitlist</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
