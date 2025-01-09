import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header({ onMakeYourOwn }) {
  return (
    <header>
      <div className="logo-container">
        <img src="/assets/beehive_9466816.png" alt="Briefly Buzz Logo" className="logo" />
        <Link to="/" className="site-title">Briefly Buzz</Link>
      </div>
      <div className="nav-links">
        <NavLink to="/politics">politics</NavLink> |{' '}
        <NavLink to="/business">business</NavLink> |{' '}
        <NavLink to="/tech">tech</NavLink> |{' '}
        <NavLink to="/sports">sports</NavLink>
      </div>

      <div className="manifesto">
        <NavLink to="/manifesto">manifesto</NavLink>
      </div>

      <div className="cta-buttons">
        <button className="cta-button" onClick={onMakeYourOwn}>Make Your Own</button>
        <a href="mailto:andrea@lsd.so" className="cta-button">Get in Touch</a>
      </div>
    </header>
  );
}

export default Header;