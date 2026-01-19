import React, { useState } from "react";
import productsData from "../Data/productsData";
import "./Topproducts.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Topproduct() {
  const [products, setProducts] = useState(productsData);
  const dispatch = useDispatch();
const navigate = useNavigate();

  const filterProduct = (category)=>{
    if(category == "All"){
      setProducts(productsData)
    }else{
      const filtered = productsData.filter((item)=>
      item.category === category
    );
      setProducts(filtered);
    }
  }

  const handleAddToCart = (item) => {
  dispatch(addToCart(item));
  navigate("/cart");
};
  return (
    
    <div className="top-product">
      <div className="product-header">
        <h1>Top Products</h1>
      </div>
      <div className="product-btn">
        <button className="btn-product" onClick={()=> filterProduct("All")}> All</button>
        <button className="btn-product" onClick={()=>filterProduct("Headphones")}>HeadPhones</button>
        <button className="btn-product" onClick={()=>filterProduct("Earbuds")}>Earbuds</button>
        <button className="btn-product" onClick={()=>filterProduct("Earphones")}>Earphones</button>
        <button className="btn-product" onClick={()=>filterProduct("Neckbands")}>Neckbands</button>
      </div>
      <div className="products">
        <div className="all-products">
          {products.map((item) => (
           

            <div className="product-card">
              <Link to={`/product/${item.id}`} key={item.id}>
              <img src={item.images[0]}  />
              </Link>
              <h5>{item.rateCount}</h5>
              <h4>{item.title}</h4>
              <h6 className="h6">{item.info}</h6>
              <div className="line"></div>
              <div className="prices">
                <h6>₹{item.finalPrice}</h6>
              <h6>₹{item.originalPrice}</h6>
              </div>
             
              <button className="addtocart"  onClick={()=> handleAddToCart(item)}>Add to cart</button>
              
            </div>
            
            
          ))}
          
        </div>
        
      </div>
    </div>
  );
}

export default Topproduct;
