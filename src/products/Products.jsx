import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsData from "../Data/productsData";
import reviewsData from "../Data/reviewsData";
import { FaUserCircle } from "react-icons/fa";
import "./Products.css";

const Products = () => {
  const { id } = useParams();
  const product = productsData.find(
    (item) => item.id === parseInt(id)
  );

  const [mainImage, setMainImage] = useState(
    product ? product.images[0] : ""
  );

  const [activeTab, setActiveTab] = useState("spec");

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      {/* ================= PRODUCT IMAGES & INFO ================= */}
      <div className="product-images-page">
        {/* Thumbnails */}
        <div className="thumbnails">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              style={{
                border:
                  mainImage === img
                    ? "2px solid white"
                    : "1px solid gray",
              }}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="single-img">
          <img src={mainImage} alt="Selected" />
        </div>

        {/* Product Info */}
        <div className="product-information">
          <h1>{product.title}</h1>
          <p>{product.info}</p>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ color: "red", fontSize: "24px" }}>★★★★★</div>
            | {product.ratings} ratings
          </div>

          <div className="line"></div>

          <div className="price">
            <h2>₹{product.finalPrice}</h2>
            <h3>₹{product.originalPrice}</h3>
          </div>

          <div className="price-saved">
            <h5>
              You saved ₹{product.originalPrice - product.finalPrice} (
              {Math.round(
                ((product.originalPrice - product.finalPrice) /
                  product.originalPrice) *
                  100
              )}
              %)
              <h6>including of all tax</h6>
            </h5>
            <button>In Stock</button>
          </div>

          <div className="line"></div>

          <div className="offers">
            <h4>Offers and Discount</h4>
            <button className="btn2">No cost EMI on Credit Card</button>
            <button className="btn2">Pay Later & Avail Cashback</button>
          </div>

          <div className="line"></div>

          <Link><button className="add-to-cart">Add to Cart</button>
          </Link>
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="reviews">
        <button onClick={() => setActiveTab("spec")}>
          Specification
        </button>
        <button onClick={() => setActiveTab("overview")}>
          OverView
        </button>
        <button onClick={() => setActiveTab("reviews")}>
          Reviews
        </button>
      </div>

      {/* ================= TAB CONTENT ================= */}

      {/* Specification */}
      {activeTab === "spec" && (
        <div className="specif">
          <h6> <pre>Brand:                               {product.brand}</pre></h6>
          <h6><pre>Model:                  {product.title}</pre></h6>
          <h6><pre>Generic Name:                 {product.category}</pre></h6>
          <h6><pre>HeadPhone Type:                  {product.type}</pre></h6>
          <h6><pre>Connectivity:                 {product.connectivity}</pre></h6>
          <h6><pre>MicroPhone:                        Yes</pre></h6>
        </div>
      )}

      {/* Overview */}
      {activeTab === "overview" && (
        <div className="OverView">
          <p>
            The {product.title} on-ear wireless headphone provides
            fabulous sound quality
          </p>
          <ul>
            <li>Sound tuned to perfection</li>
            <li>Comfortable to wear</li>
            <li>Long hours playback time</li>
          </ul>
          <p>
            Buy the {product.info} which offers you a fabulous
            music experience with awesome sound quality  which offers you a fabulous
            music experience with awesome sound quality. which offers you a fabulous
            music experience with awesome sound quality. which offers you a fabulous
            music experience with awesome sound quality. which offers you a fabulous
            music experience with awesome sound quality..
          </p>
        </div>
      )}

      {/* Reviews */}
      {activeTab === "reviews" && (
        <div className="review">
          {reviewsData.map((item, index) => (
            <div key={index} className="review-box">
              <div className="user-icon"><FaUserCircle /></div>
              <div className="user-name"><h6>{item.name}</h6>
               <div style={{ color: "red", fontSize: "24px" }}>★★★★★ |<span className="user-date">{item.date}</span></div>
              <p>{item.review}</p></div>
              
            </div>
            
          ))}
        </div>
      )}
      
    </div>
  );
};

export default Products;
