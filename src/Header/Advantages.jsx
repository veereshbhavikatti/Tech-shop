import React from "react";
import servicesData from "../Data/servicesData";
import "./Advantages.css";

const Advantages = () => {
  return (
    <div className="servicesData">
      <div className="titel">
        <h2>Our Advantages</h2>
      </div>

      <div className="services-row">
        {servicesData.map((item) => (
          <div className="all-icones" key={item.id}>
            <div className="icon-logo">
              <a href="#" className="icon">{item.icon}</a>
            </div>

            <div className="icon-detalis">
              <h3 className="icon-title">{item.title}</h3>
              <div className="icone-info">{item.info}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;

