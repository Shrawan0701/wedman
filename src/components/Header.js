import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo / Title */}
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>
        <Link to="/" style={{ ...linkStyle, fontSize: "1.5rem", fontWeight: "bold" }}>
          Wedding Management
        </Link>
      </h1>

      {/* Desktop Nav */}
      <nav className="desktop-nav" style={desktopNavStyle}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/about">About</Link>
        <Link style={linkStyle} to="/services">Services</Link>
        <Link style={linkStyle} to="/gallery">Gallery</Link>
        <Link style={linkStyle} to="/testimonials">Testimonials</Link>
        <Link style={linkStyle} to="/contact">Contact</Link>
      </nav>

      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={hamburgerBtn}
        className="hamburger-btn"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={mobileMenu}>
          <Link style={mobileLink} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link style={mobileLink} to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link style={mobileLink} to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link style={mobileLink} to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link style={mobileLink} to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
          <Link style={mobileLink} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.3s",
  fontWeight: "500",
  cursor: "pointer",
};

const desktopNavStyle = {
  display: "flex",
  gap: "20px",
};

const hamburgerBtn = {
  background: "none",
  border: "none",
  color: "#fff",
  fontSize: "1.8rem",
  cursor: "pointer",
  display: "none",
};

const mobileMenu = {
  position: "absolute",
  top: "100%",
  right: 0,
  background: "#111",
  display: "flex",
  flexDirection: "column",
  padding: "10px 20px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  borderRadius: "0 0 8px 8px",
};

const mobileLink = {
  ...linkStyle,
  padding: "10px 0",
};

/* Add this CSS in index.css */
