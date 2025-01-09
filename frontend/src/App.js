import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Manifesto from './components/Manifesto';

function HomePage({ posts, loading, error }) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      {posts.map((post) => (
        <div key={post.id} className="item">
          <span className="rank">{post.id}. </span>
          <span className="item-title">{post.title}</span>
          <div className="item-details">
            by <a href="#">{post.author}</a> {post.created_at} | <a href="#">{post.content}</a>
          </div>
        </div>
      ))}
    </main>
  );
}

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Router>
      <div className="App">
        <header>
          <div className="logo-container">
            <img src="/assets/beehive_9466816.png" alt="Briefly Buzz Logo" className="logo" />
            <Link to="/" className="site-title">Briefly Buzz</Link>
          </div>
          <div className="nav-links">
            <a href="#">politics</a> | <a href="#">business</a> | <a href="#">tech</a> | <a href="#">sports</a> | 
            <Link to="/manifesto" className="nav-link">manifesto</Link>
          </div>
          <div className="cta-buttons">
            <a href="mailto:andrea@lsd.so" className="cta-button">Get in Touch</a>
            <button className="cta-button" onClick={() => setShowModal(true)}>Make Your Own</button>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage posts={posts} loading={loading} error={error} />} />
          <Route path="/manifesto" element={<Manifesto />} />
        </Routes>

        {showModal && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <h2>Coming Soon!</h2>
              <p>This feature is coming soon. For now, please get in touch with us via email.</p>
              <div className="modal-buttons">
                <a href="mailto:andrea@lsd.so" className="modal-button">Get in Touch</a>
                <button onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        )}

        <footer>
          <p>Briefly Buzz © 2025</p>
        </footer>
      </div>
    </Router>
  );
}

export default App; 