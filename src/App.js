import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Cart from './Pages/Cart';
import { useState } from 'react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log(cartItems);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Products addToCart={addToCart} />}
        ></Route>
        <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
  );
}
