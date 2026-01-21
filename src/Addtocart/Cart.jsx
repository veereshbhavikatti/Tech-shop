import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import "./cart.css";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalOriginalPrice = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );

  const totalFinalPrice = cartItems.reduce(
    (sum, item) => sum + item.finalPrice * item.quantity,
    0
  );

  const discount = totalOriginalPrice - totalFinalPrice;

  /* ================= EMPTY CART ================= */
  if (cartItems.length === 0) {
    return (
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h2>Your Cart is Empty 🛒</h2>

        <Link to="/allproducts">
          <button
            style={{
              marginTop: "20px",
              padding: "10px 25px",
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Browse All Products
          </button>
        </Link>
      </div>
    );
  }

  /* ================= CART WITH ITEMS ================= */
  return (
    <div className="cart-page">
      {/* CART ITEMS */}
      <div className="products-cart">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="cart-item"
            style={{ display: "flex", marginBottom: "20px" }}
          >
            {/* DELETE ICON */}
            <div
              className="delete-icon"
              onClick={() => dispatch(removeFromCart(item.id))}
              style={{ cursor: "pointer" }}
              title="Remove item"
            >
              <MdDelete size={22} />
            </div>

            {/* IMAGE */}
            <div className="img">
              <img
                src={item.images[0]}
                alt={item.title}
                width="100"
              />
            </div>

            {/* INFO */}
            <div className="img-information">
              <h3>
                {item.title} {item.info}
              </h3>

              <p>
                ₹{item.finalPrice}
                <span> ₹{item.originalPrice}</span>
              </p>

              {/* QUANTITY BUTTONS */}
              <div className="buttons">
                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  -
                </button>

                <span style={{ margin: "0 10px" }}>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  +
                </button>
              </div>

              <div className="line"></div>
            </div>
          </div>
        ))}
      </div>

      {/* ORDER SUMMARY */}
      <div className="ORDER-SUMMARY">
        <h3>Order Summary</h3>

        <pre>
          <h5>Original Price: ₹{totalOriginalPrice}</h5>
        </pre>
        <pre>
          <h5>Discount: -₹{discount}</h5>
        </pre>
        <pre>
          <h5>Delivery: FREE</h5>
        </pre>

        <hr />

        <pre>
          <h3>Total Price: ₹{totalFinalPrice}</h3>
        </pre>

        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
