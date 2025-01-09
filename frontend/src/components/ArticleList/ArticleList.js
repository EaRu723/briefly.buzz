import React from 'react';
import { useParams } from 'react-router-dom';
import './ArticleList.css';

function ArticleList({ posts, loading, error }) {
  const { category = "all" } = useParams();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const categoryTitle = category === "all" 
    ? "All News" 
    : `${category.charAt(0).toUpperCase() + category.slice(1)} News`;

  return (
    <main>
      <h2 className="category-title">{categoryTitle}</h2>
      {posts.map((post) => (
        <div key={post.id} className="item">
          <span className="rank">{post.id}. </span>
          <span className="item-title">{post.title}</span>
          <div className="item-details">
            by <span className="author">{post.author}</span> {post.created_at} | <span className="content">{post.content}</span>
          </div>
        </div>
      ))}
    </main>
  );
}

export default ArticleList;