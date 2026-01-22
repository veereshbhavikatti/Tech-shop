import React, { useState } from "react";
import productsData from "../Data/productsData";
import "./Topproducts.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { FaArrowRightLong } from "react-icons/fa6";

function Topproduct() {
  const [products, setProducts] = useState(productsData);
  const [activeButtons, setActiveButtons] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Filter products
  const filterProduct = (category) => {
    if (category === "All") {
      setProducts(productsData);
    } else {
      const filtered = productsData.filter(
        (item) => item.category === category
      );
      setProducts(filtered);
    }
  };

  // Add to cart logic
  const handleAddToCart = (data) => {
    dispatch(addToCart(data));

    setActiveButtons((prev) => ({
      ...prev,
      [data.id]: true,
    }));

    setTimeout(() => {
      setActiveButtons((prev) => ({
        ...prev,
        [data.id]: false,
      }));
    }, 2000);
  };

  return (
    <div className="top-product">
      <div className="product-headers">
        <h1>Top Products</h1>
      </div>

      {/* Filter Buttons */}
      <div className="product-btn">
        <button className="btn-product" onClick={() => filterProduct("All")}>
          All
        </button>
        <button
          className="btn-product"
          onClick={() => filterProduct("Headphones")}
        >
          HeadPhones
        </button>
        <button
          className="btn-product"
          onClick={() => filterProduct("Earbuds")}
        >
          Earbuds
        </button>
        <button
          className="btn-product"
          onClick={() => filterProduct("Earphones")}
        >
          Earphones
        </button>
        <button
          className="btn-product"
          onClick={() => filterProduct("Neckbands")}
        >
          Neckbands
        </button>
      </div>

      {/* Products */}
      <div className="container">
        <div className="  row g-15">
          {products.map((data) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={data.id}>
              <div className="card h-100 bg-dark text-white border-white ">
                <Link to={`/product/${data.id}`}>
                  <img
                    src={data.images[0]}
                    className="card-img-top"
                    alt={data.title}
                  />
                </Link>

                <div className="card-body d-flex flex-column">
                  {/* Rating */}
                  <p className="m-0">
                    <span style={{ color: "red" }}>
                      {"★".repeat(data.rateCount)}
                    </span>
                  </p>

                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text border-bottom pb-3">
                    {data.info}
                  </p>

                  <p className="fw-bold text-center">
                    ₹{data.finalPrice} <del>₹{data.originalPrice}</del>
                  </p>

                  <button
                    className={`btn mt-auto ${
                      activeButtons[data.id]
                        ? "btn-success"
                        : "btn-danger"
                    }`}
                    onClick={() => handleAddToCart(data)}
                  >
                    {activeButtons[data.id] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card h-100 bg-dark text-white border-white d-flex justify-content-center align-items-center">
                            <Link to="/allproducts" className="browse-all">Browse All <br />Products
                                <FaArrowRightLong className="arrow" />
                            </Link>

                        </div>
                    </div>
        </div>
      </div>
    </div>
  );
}

export default Topproduct;
