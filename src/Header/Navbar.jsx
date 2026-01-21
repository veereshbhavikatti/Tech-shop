import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import productsData from "../Data/productsData";
import Login from "../LoginForm/Login";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  /* GET CART ITEMS FROM REDUX */
  const cartItems = useSelector((state) => state.cart.cartItems);

  /* TOTAL QUANTITY */
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const filteredProducts = productsData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <nav className="navbar px-5 bg-black fixed-top">
        <div className="container-fluid">
          {/* LOGO */}
          <Link to="/" className="navbar-brand text-white">
            Tech-Shop
          </Link>

          <div className="nav">
            {/* SEARCH */}
            <div className="nav-icons search-box">
              {open && (
                <>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  {search && (
                    <div className="search-results">
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                          <div
                            key={item.id}
                            className="search-item"
                            onClick={() => {
                              navigate(`/product/${item.id}`);
                              setSearch("");
                              setOpen(false);
                            }}
                          >
                            {item.title}
                          </div>
                        ))
                      ) : (
                        <p className="no-result">No products found</p>
                      )}
                    </div>
                  )}
                </>
              )}

              <button className="icon-btn" onClick={() => setOpen(!open)}>
                <FaSearch />
                <span className="icon-label">Search</span>
              </button>
            </div>

            {/* 🛒 CART WITH COUNT */}
            <div className="nav-icons cart-icon">
              <Link to="/cart" className="icon">
                <MdOutlineShoppingCart />

                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}

                <span className="icon-label">Cart</span>
              </Link>
            </div>

            {/* PROFILE */}
            <div className="nav-icons profile">
              <button className="icon-btn">
                <GoPerson />
              </button>

              <div className="hover-box">
                <p className="title">Hello</p>
                <p className="sub">Access account and manage orders</p>

                <button
                  className="login-btn"
                  onClick={() => setShowLogin(true)}
                >
                  Login / Signup
                </button>

                <hr />
                <p className="small-text">Please login</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Navbar;
