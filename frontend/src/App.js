import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ArticleList from './components/ArticleList/ArticleList';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import Manifesto from './components/Manifesto';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header onMakeYourOwn={() => setShowModal(true)} />
        
        <Routes>
          <Route path="/" element={<ArticleList posts={posts} loading={loading} error={error} />} />
          {categories.map(category => (
            <Route 
              key={category.id}
              path={category.path}
              element={<ArticleList posts={posts} loading={loading} error={error} />}
            />
          ))}
          <Route path="/manifesto" element={<Manifesto />} />
        </Routes>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h2>Coming Soon!</h2>
          <p>This feature is coming soon. For now, please get in touch with us via email.</p>
          <div className="modal-buttons">
            <a href="mailto:andrea@lsd.so" className="modal-button">Get in Touch</a>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </Modal>

        <Footer />
      </div>
    </Router>
  );
}

export default App; 