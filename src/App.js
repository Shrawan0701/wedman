import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Shared Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Wedding from "./pages/Wedding";
import Brand from "./pages/Brand";
import Entertainment from "./pages/Entertainment";
import Corporate from "./pages/Corporate";
import Birthday from "./pages/Birthday";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <Router>
      {/* 🔥 Header is always visible */}
      <Header />

      {/* 🔥 Page content will change based on route */}
      <main style={{ minHeight: "80vh", padding: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />

          {/* Individual Service Pages */}
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/birthday" element={<Birthday />} />
        </Routes>
      </main>

      {/* 🔥 Contact form will now show on every page */}
      <Contact />

      {/* 🔥 Footer is always visible */}
      <Footer />
    </Router>
  );
}

export default App;
