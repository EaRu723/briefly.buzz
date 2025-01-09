import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header({ onMakeYourOwn }) {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching categories:', err);
    }
  };

  return (
    <header>
      <div className="logo-container">
        <img src="/assets/beehive_9466816.png" alt="Briefly Buzz Logo" className="logo" />
        <Link to="/" className="site-title">Briefly Buzz</Link>
      </div>
      <div className="nav-links">
        <NavLink to="/" end>all</NavLink> |{' '}
        {categories.map((category, index) => (
          <React.Fragment key={category.id}>
            <NavLink to={category.path}>{category.name}</NavLink>
            {index < categories.length - 1 && ' | '}
          </React.Fragment>
        ))}
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