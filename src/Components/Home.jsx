import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home container d-flex flex-column justify-content-center align-items-center">
        
          <h1 className="display-3 mb-4">GUVI Blog</h1>
          
        <p className="lead fs-3">
          Explore our wide range of professionaly scripted articles on different
          aspects and streams of software industry.
        </p>
        <p className="lead fs-4">
          Pick your favourite field, experience the handpicked Blogs, and
          stay updated in today's tech world
        </p>
        <Link
          to="blogs/all"
          className="btn btn-outline-success btn-lg d-flex align-items-baseline"
        >
          Explore <i class="fas fa-arrow-right ms-2"></i>
        </Link>
      </div>
    </>
  );
};

export default Home;
