import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import brand1 from "../assets/images/tur.jpg";
import brand2 from "../assets/images/brand.jpg";
import brand3 from "../assets/images/turban.jpg";

export default function Brand() {
 const stats = [
  { label: "Events Organized", value: 120 },
  { label: "Turban Types", value: 20 },
];

const [counts, setCounts] = useState(() => stats.map(() => 0));
const [currentIndex, setCurrentIndex] = useState(0);
const brandImages = [brand1, brand2, brand3];

// Auto-slide images
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === brandImages.length - 1 ? 0 : prevIndex + 1
    );
  }, 5000);
  return () => clearInterval(interval);
}, [brandImages.length]);

// Animate stats counting up
useEffect(() => {
  const step = () => {
    setCounts((prevCounts) =>
      prevCounts.map((count, index) => {
        const target = stats[index].value;
        return count < target ? count + 1 : count;
      })
    );
  };

  const interval = setInterval(step, 20);
  return () => clearInterval(interval);
}, [stats]);


  return (
    <section
      style={{
        background: "linear-gradient(to bottom right, #cc7cd7ff, #ede9fe, #77c2d3ff)",
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
  Turban Styles & Collections
</h1>
<p
  style={{
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "20px",
    color: "#333",
  }}
>
  Explore our wide range of turbans designed for every special occasion. 
  From regal wedding pagdis to traditional Marathi pheta, Rajasthani safas, 
  and royal Maharaja styles. We offer customized designs that match your 
  event’s theme and outfit. Our expert draping ensures a perfect fit, 
  giving you that royal and elegant look for weddings, engagements, 
  festive celebrations, and cultural programs.
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
        {brandImages.map((img, index) => (
          <img
  key={index}
  src={img}
  alt={`Turban ${index + 1}`}
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    backgroundColor: "#fff", // ✅ ensures background is always white
    opacity: currentIndex === index ? 1 : 0,
    transition: "opacity 0.8s ease-in-out",
    borderRadius: "15px",
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
          {brandImages.map((_, index) => (
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
