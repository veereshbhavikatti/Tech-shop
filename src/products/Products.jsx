import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

import productsData from "../Data/productsData";
import reviewsData from "../Data/reviewsData";
import { addToCart } from "../redux/cartSlice";

import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = productsData.find(
    (item) => item.id === Number(id)
  );

  const [mainImage, setMainImage] = useState(
    product?.images[0]
  );
  const [activeTab, setActiveTab] = useState("spec");
  const [added, setAdded] = useState(false);

  if (!product) return <h2>Product not found</h2>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div>
      {/* ================= PRODUCT IMAGE & INFO ================= */}
      <div className="product-images-page">
        {/* Thumbnails */}
        <div className="thumbnails">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumbnail"
              onClick={() => setMainImage(img)}
              style={{
                border:
                  mainImage === img
                    ? "2px solid white"
                    : "1px solid gray",
              }}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="single-img">
          <img src={mainImage} alt={product.title} />
        </div>

        {/* Product Information */}
        <div className="product-information">
          <h1>{product.title}</h1>
          <p>{product.info}</p>

          <div className="rating">
            <span style={{ color: "red", fontSize: "24px" }}>
              ★★★★★
            </span>
            <span> | {product.ratings} ratings</span>
          </div>

          <div className="line"></div>

          <div className="price">
            <h2>₹{product.finalPrice}</h2>
            <h3>₹{product.originalPrice}</h3>
          </div>

          <div className="price-saved">
            <h5>
              You saved ₹
              {product.originalPrice - product.finalPrice} (
              {Math.round(
                ((product.originalPrice - product.finalPrice) /
                  product.originalPrice) *
                  100
              )}
              %)
            </h5>
            <h6>Including all taxes</h6>
            <button>In Stock</button>
          </div>

          <div className="line"></div>

          <div className="offers">
            <h4>Offers & Discounts</h4>
            <button className="btn2">
              No cost EMI on Credit Card
            </button>
            <button className="btn2">
              Pay Later & Avail Cashback
            </button>
          </div>

          <div className="line"></div>

          {/* Add to Cart */}
          <button
            className={`btn ${
              added ? "btn-success" : "btn-danger"
            }`}
            onClick={handleAddToCart}
          >
            {added ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="reviews">
        <button onClick={() => setActiveTab("spec")}>
          Specification
        </button>
        <button onClick={() => setActiveTab("overview")}>
          Overview
        </button>
        <button onClick={() => setActiveTab("reviews")}>
          Reviews
        </button>
      </div>

      {/* ================= TAB CONTENT ================= */}

      {/* Specification */}
      {activeTab === "spec" && (
        <div className="specif">
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Model:</strong> {product.title}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Type:</strong> {product.type}</p>
          <p><strong>Connectivity:</strong> {product.connectivity}</p>
          <p><strong>Microphone:</strong> Yes</p>
        </div>
      )}

      {/* Overview */}
      {activeTab === "overview" && (
        <div className="OverView">
          <p>
            The {product.title} delivers premium sound quality
            with long-lasting comfort.
          </p>
          <ul>
            <li>Crystal clear sound</li>
            <li>Comfortable fit</li>
            <li>Long battery life</li>
          </ul>
          <p>{product.info}</p>
        </div>
      )}

      {/* Reviews */}
      {activeTab === "reviews" && (
        <div className="review">
          {reviewsData.map((item, index) => (
            <div key={index} className="review-box">
              <div className="user-icon">
                <FaUserCircle />
              </div>
              <div className="user-name">
                <h6>{item.name}</h6>
                <div style={{ color: "red" }}>
                  ★★★★★{" "}
                  <span className="user-date">
                    {item.date}
                  </span>
                </div>
                <p>{item.review}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
