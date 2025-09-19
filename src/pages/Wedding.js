import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import wedding1 from "../assets/images/wed.jpg";
import wedding2 from "../assets/images/first.jpg";
import wedding3 from "../assets/images/decor.jpg";

export default function Wedding() {
  const stats = [
    { label: "Weddings Planned", value: 200 },
    { label: "Decor Themes", value: 50 },
    { label: "Happy Couples", value: 180 },
    { label: "Years Experience", value: 8 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [currentIndex, setCurrentIndex] = useState(0);
  const weddingImages = [wedding1, wedding2, wedding3];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === weddingImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [weddingImages.length]);

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
          Wedding Services
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Your wedding is a once-in-a-lifetime moment, and we believe it deserves to be nothing short of magical. From the very first consultation, our team works closely with you to design a celebration that reflects your unique style, traditions, and dreams.Whether you envision a grand royal celebration or an intimate, modern ceremony, our planners transform your ideas into a seamless and unforgettable experience that you and your guests will cherish forever.
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
        {weddingImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Wedding ${index + 1}`}
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

        {/* Dots Navigation */}
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
          {weddingImages.map((_, index) => (
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
