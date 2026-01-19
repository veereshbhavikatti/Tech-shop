import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import "./cart.css"
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

  return (
    <div>
      {cartItems.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        <div className="cart-page">
          {/* CART ITEMS */}
          <div className="products-cart">
            {cartItems.map((item) => (
              <div key={item.id} style={{ marginBottom: "20px", display:"flex" }}>
               <div className="delete-icon"> <MdDelete /></div>
                <div className="img">
                  <img src={item.images[0]} width="100" />
                </div>

                <div className="img-information">
                  <h3>{item.title}{ item.info}</h3>
                <p>₹{item.finalPrice}   <span>      ₹{item.originalPrice}</span></p> 
              
                <div className="buttons">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    -
                  </button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>
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
            <h3>Order Summary </h3>
            <pre><h5>Original Price:         ₹{totalOriginalPrice}</h5></pre>
            <pre><h5>Discount:              -₹{discount}</h5></pre>
            <pre><h5>Delivery:               FREE</h5></pre>
            <hr />
           <pre> <h3>Total price:  ₹{totalFinalPrice}</h3></pre>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
