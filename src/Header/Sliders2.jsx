import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import img1 from "../assets/boat1-1.png";
import img2 from "../assets/jbl-2.png";
import img3 from "../assets/boat203-3.png";
import img4 from "../assets/boat518-4.png";
import img5 from "../assets/jbl760nc-5.png";

import "./Navbar.css";
import { Link } from "react-router-dom";

/* ✅ Product Data */
const products = [
  {
    img: img1,
    name: "Boat Rockerz 510",
    price: "₹1,299",
    discount: "₹3,999",
  },
  {
    img: img2,
    name: "JBL Tune 760NC",
    price: "₹5,999",
    discount: "₹7,999",
  },
  {
    img: img3,
    name: "Boat Rockerz 256",
    price: "₹899",
    discount: "₹2,999",
  },
  {
    img: img4,
    name: "JBL Endurance Run ",
    price: "₹999",
    discount: "₹1,599",
  },
  {
    img: img5,
    name: "Boat Airdropes 203",
    price: "₹1,099",
    discount: "₹3,999",
  },
];

const loopProducts = [...products, ...products, ...products];

function Sliders() {
  return (
    <div className="slider-container ">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={40}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {loopProducts.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-card">
                <h3 className="product-name ">{item.name}</h3>
                <Link to={`/product${item.id}`}>
              <img src={item.img} alt={item.name} />
             </Link>
              <p className="product-price">{item.price}  </p>
              <p className="Product_discount">{item.discount}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Sliders;
