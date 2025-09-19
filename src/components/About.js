import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { label: "Weddings Managed", value: 200 },
    { label: "Birthday Parties", value: 150 },
    { label: "Corporate Events", value: 50 },
    { label: "Happy Clients", value: 500 },
  ];

  // Animated numbers
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < stats[index].value ? count + 1 : count
        )
      );
    }, 20); // speed of counting (lower = faster)

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <section
      style={{
        background: "linear-gradient(to bottom right, #4f85b7ff, #ede9fe, #e9d5ff)",
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
      {/* Text Content */}
      <div style={{ maxWidth: "600px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "15px", color: "#4b0082" }}>
          About Us
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px", color: "#333" }}>
          We are a wedding and event management company creating unforgettable
          experiences with creativity, passion, and precision.
        </p>

        <Link
          to="/about"
          style={{
            display: "inline-block",
            background: "#4b0082",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "25px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          Get in Touch →
        </Link>
      </div>

      {/* Stats Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          marginTop: "40px",
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
    </section>
  );
}
