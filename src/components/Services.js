import React from "react";

// Import images from assets
import dec from "../assets/images/dec.jpg";
import tur from "../assets/images/tur.jpg";
import decor from "../assets/images/decor.jpg";
import management from "../assets/images/management.jpg";
import day from "../assets/images/day.jpg";


const services = [
  { id: "01", title: "Wedding Management", image: dec, link: "/wedding" },
  { id: "02", title: "Turban", image: tur, link: "/brand" },
  
  { id: "03", title: "Event Management", image: management, link: "/corporate" },
  { id: "04", title: "Birthday Parties", image: day, link: "/birthday" },
];

export default function Services() {
  return (
    <>
      <style>{`
        .services-section {
          background: #000;
          color: #fff;
          padding: 80px 20px;
          text-align: center;
        }

        .services-heading {
          font-size: 2.5rem;
          font-weight: 700;
          color: #f9e79f;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .services-desc {
          max-width: 700px;
          margin: 0 auto 50px auto;
          color: #ddd;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        /* Grid Layout */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          justify-items: center;
          padding: 0 20px;
        }

        /* Service Card */
        .service-card {
          position: relative;
          width: 100%;
          max-width: 350px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: #111;
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.8);
        }

        .service-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .service-card:hover img {
          transform: scale(1.05);
        }

        /* Info Overlay */
        .service-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 25px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0));
          text-align: left;
          transition: background 0.3s ease;
        }

        .service-card:hover .service-info {
          background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
        }

        .service-number {
          font-size: 1rem;
          font-weight: 600;
          color: #f9e79f;
          margin-bottom: 5px;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 5px 0;
        }

        .service-link {
          color: #f9e79f;
          font-size: 0.95rem;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .service-link:hover {
          color: #fff;
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .services-heading {
            font-size: 2rem;
          }
          .services-desc {
            font-size: 1rem;
          }
          .service-card img {
            height: 200px;
          }
        }
      `}</style>

      <section className="services-section">
        <h2 className="services-heading">Our Services</h2>
        <p className="services-desc">
          We offer a wide range of event management services tailored to your needs, 
          ensuring every occasion is memorable and perfectly executed.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.title} />
              <div className="service-info">
                <div className="service-number">{service.id}</div>
                <div className="service-title">{service.title}</div>
                <a href={service.link} className="service-link">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
