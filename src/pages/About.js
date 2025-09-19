import React from "react";
import { motion } from "framer-motion";
import about1 from "../assets/images/dec.jpg";
import about2 from "../assets/images/first.jpg";
import about3 from "../assets/images/management.jpg";
import about4 from "../assets/images/tur.jpg";

export default function About() {
  const sectionStyle = {
    background: "linear-gradient(to bottom right, #53acd3ff, #ede9fe, #c61e2cff)",
    padding: "80px 20px",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "50px",
  };

  const titleH1Style = {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#4b0082",
  };

  const titlePStyle = {
    maxWidth: "700px",
    margin: "0 auto",
    fontSize: "1.2rem",
    color: "#333",
    lineHeight: "1.6",
  };

  const infoGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginBottom: "50px",
    alignItems: "center",
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.5s ease",
  };

  const textBoxStyle = {
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
  };

  const textBoxH2Style = {
    fontSize: "2rem",
    marginBottom: "15px",
    color: "#4b0082",
  };

  const textBoxPStyle = {
    color: "#444",
    fontSize: "1rem",
    lineHeight: "1.6",
  };

  const galleryGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  };

  const galleryImgStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.4s ease",
  };

  return (
    <section style={sectionStyle}>
      {/* Title Section */}
      <motion.div
        style={titleStyle}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={titleH1Style}>About Us</h1>
        <p style={titlePStyle}>
         More than just planners, since 2018, we have been storytellers, turning life’s special moments into timeless celebrations filled with love and elegance.
        </p>
      </motion.div>

      {/* Info Section */}
      <div style={infoGridStyle}>
        <motion.img
          src={about1}
          alt="Wedding Setup"
          style={imgStyle}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />

        <motion.div
          style={textBoxStyle}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={textBoxH2Style}>Your Vision, Our Passion</h2>
          <p style={textBoxPStyle}>
            For nearly a decade, we’ve specialized in transforming ordinary gatherings into extraordinary experiences. From weddings and pre-wedding ceremonies to grand celebrations, our expert planning ensures everything reflects your personality and vision,leaving you free to enjoy every second.
          </p>
        </motion.div>
      </div>

      {/* Image Gallery */}
      <div style={galleryGridStyle}>
        {[about2, about3, about4].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              style={galleryImgStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
