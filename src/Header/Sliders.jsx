import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import img1 from "../assets/image-1.png";
import img2 from "../assets/image-2.png";
import img3 from "../assets/image-3.png";

import "./Navbar.css";


function Sliders() {
  return (
    <div style={{ width: "100%" }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
      >
        <SwiperSlide>
          <div className="hero-slide">
            <div className="hero-content">
              <p className="brand">JBL Live 660NC</p>

              <h1>
                Keep The Noise Out,<br />
                 Or In. You Choose.<br />
                
              </h1>

              <div className="price">
                <span className="final">₹9,999</span>
                <span className="original">₹14,999</span>
              </div>

              <button className="cta-btn">Shop Now</button>
            </div>

            {/*IMAGE */}
            <div className="hero-image">
              <img src={img1} alt="JBL Headphones" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-slide">
            <div className="hero-content">
              <p className="brand">boAt Airdropes 131</p>

              <h1>
               FeatherWeight For<br />
                Comfort All-Day.<br />
                
              </h1>

              <div className="price">
                <span className="final">₹1,099</span>
                <span className="original">₹2,999</span>
              </div>

              <button className="cta-btn">Shop Now</button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hero-image">
              <img src={img2} alt="JBL Headphones" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-slide">
            {/* LEFT CONTENT */}
            <div className="hero-content">
              <p className="brand">Sony WH-XB910N</p>

              <h1>
                Give Your Favourite<br />
                Music A Boost.<br />
                
              </h1>

              <div className="price">
                <span className="final">₹13,489</span>
                <span className="original">₹14,990</span>
              </div>

              <button className="cta-btn">Shop Now</button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hero-image">
              <img src={img3} alt="JBL Headphones" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="Featured-Products ">
        <h3>Featured Products</h3>
      </div> 
      
    </div>
    
  );
}

export default Sliders;
