import React from "react";
import videoFile from "../assets/images/videomp4.mp4";
import Img2 from "../assets/images/brand.jpg";
import Img3 from "../assets/images/birth.jpg";
import Img4 from "../assets/images/first.jpg";
import Img5 from "../assets/images/management.jpg";




export default function Gallery() {
  return (
    <>
      <style>{`
        .gallery-section {
          background: #faf8f6;
          color: #222;
          padding: 80px 20px;
          text-align: center;
        }

        .gallery-heading {
          font-size: 42px;
          font-weight: bold;
          color: #8b5cf6;
          margin-bottom: 15px;
        }

        .gallery-desc {
          max-width: 750px;
          margin: 0 auto 50px;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
        }

        .gallery-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .gallery-main {
          flex: 1 1 60%;
          min-width: 300px;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .gallery-main video {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: 14px;
        }

        .gallery-side {
          flex: 1 1 35%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .gallery-side img {
          width: 100%;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .gallery-side img:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        @media (max-width: 768px) {
          .gallery-container {
            flex-direction: column;
          }
        }
      `}</style>

      <section className="gallery-section">
        <h2 className="gallery-heading">Gallery</h2>
        <p className="gallery-desc">
          A glimpse into the events we've brought to life. Each image tells a
          story of creativity, elegance, and perfection.
        </p>

        <div className="gallery-container">
          {/* Main Video Section */}
          <div className="gallery-main">
            <video autoPlay muted loop playsInline>
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Side Images */}
          <div className="gallery-side">
            <img src={Img2} alt="Gallery 2" />
            <img src={Img3} alt="Gallery 3" />
            <img src={Img4} alt="Gallery 4" />
            <img src={Img5} alt="Gallery 5" />
          </div>
        </div>
      </section>
    </>
  );
}
