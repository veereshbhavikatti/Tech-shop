import React from "react";
import { footMenu, footSocial } from "../Data/footerData";
import "./Advantages.css"

function Footer() {
  return (
    
      <div className="main-footer">
        <div className="footer">
          <div className="techshop-detalls">
            <h3>Tech-Shop</h3>
            <p>
              Subscribe to our Email alerts to receive <br />
              early discount offers,and new products <br />
              info.
            </p>
            <input type="text" placeholder="Email Address" /><br />
            <button>Subscribe</button>
          </div>
          {footMenu.map((section) => (
            <div key={section.id} className="footer-column">
              {/* TITLE */}
              <h3>{section.title}</h3>

              {/* LINKS */}
              <ul>
                {section.menu.map((item) => (
                  <li key={item.id}>
                    <h6>{item.link}</h6>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="line"></div>
        <div className="footer">
          <div className="fotter-h4">2025 | Right Reserved @.</div>
          <div className="social-icons">
            {footSocial.map((item) => {
              const Icon = item.icon;
              return (
                <a href={item.path} key={item.id} className="icons">
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    
  );
}

export default Footer;
