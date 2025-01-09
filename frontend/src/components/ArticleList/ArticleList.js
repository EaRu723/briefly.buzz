import React from 'react';
import './ArticleList.css';

function ArticleList({ posts, loading, error }) {
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

export default ArticleList;