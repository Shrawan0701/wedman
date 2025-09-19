import React from "react";
import { Link } from "react-router-dom";

export default function Entertainment() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Entertainment Events</h1>
      <p>
        From concerts to cultural shows, we organize world-class entertainment
        experiences with top performers, stage design, and lighting effects.
      </p>
      <Link to="/">← Back to Services</Link>
    </div>
  );
}
