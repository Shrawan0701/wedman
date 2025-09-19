import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bday1 from "../assets/images/happy.jpg";
import bday2 from "../assets/images/birth.jpg";
import bday3 from "../assets/images/day.jpg";

export default function Birthday() {
  const stats = [
    { label: "Birthday Parties", value: 150 },
    { label: "Unique Themes", value: 40 },
    { label: "Happy Kids", value: 300 },
    { label: "Years of Fun", value: 8 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [currentIndex, setCurrentIndex] = useState(0);
  const birthdayImages = [bday1, bday2, bday3];

  // Auto-slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === birthdayImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [birthdayImages.length]);

  // Animate stats counting up
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < stats[index].value ? count + 1 : count
        )
      );
    }, 20);
    return () => clearInterval(interval);
  }, [stats]);

  return (
    <section
      style={{
                background: "linear-gradient(to bottom right, #c6231dff, #ede9fe, #77c2d3ff)",

        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        minHeight: "80vh",
        textAlign: "center",
      }}
    >
      {/* Title + Description */}
      <div style={{ maxWidth: "700px" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "#4b0082",
          }}
        >
          Birthday Parties
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "20px",
            color: "#333",
          }}
        >
         Celebrate birthdays in style with our fully customized party planning services! From themed décor and entertainment to cake arrangements and fun activities, we handle every detail. Whether it’s a kids’ party, milestone birthday, or surprise celebration, we make it memorable, colorful, and stress-free so you can enjoy the special day.
        </p>
      </div>

      {/* Auto-Sliding Image Carousel */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "700px",
          height: "300px",
          overflow: "hidden",
          borderRadius: "15px",
          marginBottom: "30px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        {birthdayImages.map((img, index) => (
          <img
  key={index}
  src={img}
  alt={`Birthday ${index + 1}`}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain", // shows full image without cropping
    backgroundColor: "#fff", // prevents black background if image has empty space
    opacity: currentIndex === index ? 1 : 0,
    transition: "opacity 0.8s ease-in-out",
  }}
/>

        ))}

        {/* Navigation Dots */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
          }}
        >
          {birthdayImages.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: currentIndex === index ? "#4b0082" : "#fff",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "8px",
                color: "#4b0082",
              }}
            >
              {counts[i]}+
            </h3>
            <p style={{ fontSize: "16px", color: "#333" }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA + Back */}
      <div style={{ marginTop: "30px" }}>
       

        <Link
          to="/services"
          style={{
            display: "inline-block",
            color: "#4b0082",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          ← Back to Services
        </Link>
      </div>
    </section>
  );
}
