import React from "react";
import Banner from "../icons/banner.svg";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero-container">
        <div className="hero-left">
          <h1>The best place to build, test, and discover front-end code.</h1>

          <p>
            CodeCombine is a social development environment for front-end
            designers and developersbuild .Build test cases to learn and debug.🧋
          </p>
          <div className="btn-container">
            <Link to="/code" className="btn">
              Let's Build
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <img src={Banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
