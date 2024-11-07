import React, { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      setError("Failed to load blogs");
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <div className="blog-container">
      <h1>Blog Posts</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="blog-list">
          {blogs.slice(0, 10).map((blog) => (
            <div key={blog.id} className="blog-item">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-content">{blog.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
