import React, { useState } from 'react';
import "../styles/App.css";

const Tooltip = ({ text, children, isBold }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className="tooltip-container">
      <div
        className={`tooltip ${isTooltipVisible ? 'active' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <p className={`tooltiptext ${isBold ? 'bold' : 'normal'}`}>{text}</p>
      </div>
    </div>
  );
};

export default Tooltip;
