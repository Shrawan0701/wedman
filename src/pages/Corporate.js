import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import corp1 from "../assets/images/event.jpg";
import corp2 from "../assets/images/event2.jpg";
import corp3 from "../assets/images/management.jpg";

export default function Corporate() {
  const stats = [
    { label: "Events Managed", value: 250 },
    { label: "Events Hosted", value: 150 },
    { label: "Pred-Wedding Events Managed", value: 100 },
    { label: "Years Experience", value: 8 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [currentIndex, setCurrentIndex] = useState(0);
  const corporateImages = [corp1, corp2, corp3];

  // Auto-slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === corporateImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [corporateImages.length]);

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
        background: "linear-gradient(to bottom right, #9ccd7bff, #ede9fe, #1c0633ff)",
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
         Event Management
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          We offer complete wedding event management, from pre-wedding functions like Mehendi, Haldi, and Sangeet to the big wedding day celebrations. Our team takes care of everything so you can enjoy stress-free. Whether you want a traditional ceremony or a modern luxury setup, we make sure every moment is beautifully planned and perfectly executed.
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
        {corporateImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Corporate ${index + 1}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
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
          {corporateImages.map((_, index) => (
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
