import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import Login from "../LoginForm/Login";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <nav className="navbar  px-5 bg-black fixed-top">
      <div className="container-fluid ">
        <a className="navbar-brand text-white">Tech-Shop</a>
        <div className="nav">
          <div className="nav-icons">
            {open && (
              <input
                type="text"
                className="search-input"
                placeholder="Search products..."
              />
            )}

            <a
              href="#"
              className="search-icon  "
              onClick={() => setOpen(!open)}
            >
              <FaSearch />
              <span className="icon-label">Search</span>
            </a>
          </div>

          <div className="nav-icons">
            <a href="#" className="icon">
              <MdOutlineShoppingCart />
              <span className="icon-label">Cart</span>
            </a>
          </div>
          <div className="nav-icons profile">
            <a href="#" className="icon">
              <GoPerson />
            </a>
            <div className="hover-box">
              <p className="title">Hello</p>
              <p className="sub">Access account and manage orders</p>
              <button className="login-btn" onClick={() => setShowLogin(true)}>
                Login / Signup
              </button>
              <hr />
              <p className="small-text">Please login</p>
              {showLogin && <Login onClose={() => setShowLogin(false)} />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
