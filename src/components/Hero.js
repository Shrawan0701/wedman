import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/images/dec.jpg";
import hero2 from "../assets/images/decor.jpg";
import hero3 from "../assets/images/happy.jpg";
import { useTranslation } from "react-i18next";




export default function Hero() {
  const heroImages = [hero3, hero1, hero2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      style={{
        position: "relative",
        backgroundImage: `url(${heroImages[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.55)",
        }}
      />
      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "15px" }}>
         Your Perfect Day, Perfectly Planned
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "25px" }}>
          From the first step of planning to the final farewell, we design, organize, and execute every moment of your wedding with care, so you can truly enjoy your big day stress-free.
        </p>
        
      </div>

      {/* Dots Navigation */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 2,
        }}
      >
        {heroImages.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: index === currentIndex ? "#FFD966" : "#fff",
              opacity: index === currentIndex ? 1 : 0.5,
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
        ))}
      </div>
    </section>
  );
}
