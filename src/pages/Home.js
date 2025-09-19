import React from "react";

import Hero from "../components/Hero";  // NEW
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero /> {/* Big auto-sliding hero section */}
      <About /> {/* Auto-sliding images below About Us */}
      <Services />
      <Gallery />
      <Testimonials />
      
    </>
  );
}
