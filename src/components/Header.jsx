import React from "react";
import "../css/header.css";

export default function Header({ name }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="brand neon-glow">{name}</h1>
       
        <nav className="nav-links">
          <a href="https://www.linkedin.com/in/yogyashri-patil-3431a927b/" target="_blank" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="https://github.com/YogyashriPatil" target="_blank" aria-label="GitHub">
            GitHub
          </a>
          <a href="mailto:yogyashriarvindpatil@gmail.com" aria-label="Email">
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}
