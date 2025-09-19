import React, { useState, useEffect } from "react";



export default function Testimonials() {
  const testimonials = [
    {
      text: "Honestly, I cannot thank you guys enough. You made my birthday party perfect and within my budget. My friends are still talking about it! The decorations were stunning and the games kept everyone entertained.",
      author: "Ajay’s Birthday Party",
    },
    {
      text: "Humari shaadi ekdum royal lag rahi thi! Stage, lighting sab top-class tha. Guests abhi tak tarif kar rahe hai. Aap logo ne stress-free kar diya pura function. Shukriya Brothers Events!",
      author: "Riya & Rahul",
    },
    {
      text: "A big THANK YOU to the entire team. Your dedication and effort made this wedding a grand success. From planning to execution, everything was handled professionally and with utmost care.",
      author: "Ashwin & Priya",
    },
    {
      text: "Our corporate annual meet was executed flawlessly. The stage setup, sound system, and guest management were on point. This level of professionalism is rare to find.",
      author: "Mr.Sharma",
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsPaused(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
  };

  return (
    <>
      <style>{`
        .testimonials-section {
          background: linear-gradient(135deg, #f5f3ff, #ede9fe, #e0e7ff);
          color: #222;
          padding: 80px 20px;
          text-align: center;
        }

        .testimonials-heading {
          font-size: 42px;
          font-weight: bold;
          color: #6d28d9; /* rich purple */
          margin-bottom: 40px;
          font-family: 'Playfair Display', serif;
        }

        .slider-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .slider-wrapper {
          display: flex;
          transition: transform 0.6s ease-in-out;
        }

        .testimonial-card {
          min-width: 100%;
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.9);
          padding: 30px;
          border-radius: 18px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          text-align: left;
          backdrop-filter: blur(5px);
        }

        .testimonial-text {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #333;
          font-style: italic;
        }

        .testimonial-author {
          margin-top: 20px;
          font-weight: bold;
          color: #6d28d9;
          font-size: 1.1rem;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #6d28d9;
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          cursor: pointer;
          font-size: 20px;
          transition: background 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider-btn:hover {
          background: #4c1d95;
        }

        .prev-btn { left: 10px; }
        .next-btn { right: 10px; }

        .dots {
          margin-top: 20px;
        }

        .dot {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin: 0 5px;
          border-radius: 50%;
          background: #aaa;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .dot.active {
          background: #6d28d9;
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: 20px;
          }
          .testimonial-text {
            font-size: 1rem;
          }
        }
      `}</style>

      <section className="testimonials-section">
        <h2 className="testimonials-heading">What Our Clients Say</h2>

        <div
          className="slider-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="slider-wrapper"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">{t.text}</p>
                <p className="testimonial-author">— {t.author}</p>
              </div>
            ))}
          </div>

          <button className="slider-btn prev-btn" onClick={handlePrev}>‹</button>
          <button className="slider-btn next-btn" onClick={handleNext}>›</button>
        </div>

        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => {
                setCurrentIndex(index);
                setIsPaused(true);
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
