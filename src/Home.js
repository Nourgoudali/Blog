import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleViewBlogs = () => {
    navigate("/blog");
  };

  const handleCreateBlog = () => {
    navigate("/create-blog");
  };

  const handleViewAbout = () => {
    navigate("/about");
  };

  return (
    <div className="home-container">
      <h1>Welcome to NRGD Blog App</h1>
      <p>Discover and share ideas through blogs created by our community!</p>
      <button className="view-blogs-button" onClick={handleViewBlogs}>
        View Blogs
      </button>
      <button className="create-blog-button" onClick={handleCreateBlog}>
        Create Blog
      </button>
      <button className="view-about-button" onClick={handleViewAbout}>
        About Me
      </button>
    </div>
  );
};

export default Home;
