import React, { useState } from "react";



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake success message for now
    setStatus("✅ Your inquiry has been submitted!");
    setTimeout(() => setStatus(""), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        {/* Left Side - Form */}
        <div className="contact-form-box">
  <h2>Contact Us</h2>

  {/* 📞 Contact Info */}
  <div style={{ marginBottom: "15px", fontSize: "16px", color: "#333" }}>
    <p><strong>📞 Phone:</strong> +91 9763091391</p>
    <p>
      <strong>Instagram:</strong>{" "}
      <a 
        href="https://www.instagram.com/mahesh.aute.14/#" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: "#9175b3ff", textDecoration: "none", fontWeight: "bold" }}
      >
        Mahesh Aute
      </a>
    </p>
  </div>

  <p>
    We'd love to hear from you! Fill in your details and we will get back
    to you as soon as possible.
  </p>


          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Inquiry</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>

        {/* Right Side - Google Map */}
        <div className="map-box">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24164.00000000000!2d75.1790!3d19.1719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLohasar%20Village!5e0!3m2!1sen!2sin!4v1660000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Embedded Responsive CSS */}
      <style>
        {`
          .contact-section {
            padding: 50px 20px;
            background: #f8f8f8;
          }

          .contact-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            max-width: 1100px;
            margin: 0 auto;
            align-items: start;
          }

          .contact-form-box {
            background: #fff;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            text-align: left;
          }

          .contact-form-box h2 {
            font-size: 28px;
            margin-bottom: 10px;
            color: #222;
          }

          .contact-form-box p {
            color: #555;
            margin-bottom: 20px;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          form input, form textarea {
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 16px;
            outline: none;
          }

          form textarea {
            height: 100px;
            resize: none;
          }

          form button {
            background: linear-gradient(90deg, #6a5acd, #483d8b);
            color: #fff;
            padding: 12px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.2s ease, background 0.3s ease;
          }

          form button:hover {
            transform: translateY(-2px);
            background: linear-gradient(90deg, #5a4ecf, #3b347d);
          }

          .form-status {
            color: green;
            font-weight: bold;
            margin-top: 5px;
          }

          .map-box iframe {
            width: 100%;
            min-height: 400px;
            border: none;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          @media (max-width: 768px) {
            .contact-wrapper {
              grid-template-columns: 1fr;
            }

            .map-box iframe {
              min-height: 250px;
              margin-top: 20px;
            }
          }
        `}
      </style>
    </section>
  );
}
