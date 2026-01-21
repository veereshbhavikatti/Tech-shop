import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Topproduct from '../Header/Topproduct';
import Products from '../products/Products';
import Sliders from '../Header/Sliders';
import Sliders2 from '../Header/Sliders2';
import Cart from '../Addtocart/Cart';
import AllProducts from '../Header/Allproducts';

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Sliders />
            <Sliders2 />
            <Topproduct />
          </>
        }
      />
      <Route path='/allproducts' element={<AllProducts/>}/>
      <Route path="/product/:id" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default Routing;

