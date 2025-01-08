import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/posts');
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

  if (loading) return <div className="App">Loading...</div>;
  if (error) return <div className="App">Error: {error}</div>;

  return (
    <div className="App">
      <header>
        <div className="logo-container">
          <img src="/assets/beehive_9466816.png" alt="Briefly Buzz Logo" className="logo" />
          <a href="#" className="site-title">Briefly Buzz</a>
        </div>
        <div className="nav-links">
          <a href="#">politics</a> | <a href="#">business</a> | <a href="#">tech</a> | <a href="#">sports</a>
        </div>
        <div className="cta-buttons">
          <button className="cta-button">Get in Touch</button>
          <button className="cta-button">Make Your Own</button>
        </div>
      </header>
      
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

      <footer>
        <p>Briefly Buzz © 2025</p>
      </footer>
    </div>
  );
}

export default App; 