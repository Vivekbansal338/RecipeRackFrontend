// HealthLabels.jsx

import React from "react";
import "./HealthLabels.css";

const HealthLabels = ({ labels }) => {
  return (
    <div className="health-labels">
      <h3>Health & Dietary</h3>

      <div className="labels">
        {labels.map((label) => (
          <div key={label} className="label">
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthLabels;
