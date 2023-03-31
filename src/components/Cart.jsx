// import React, { useState } from 'react';

// const Modal = ({ cartItems, setCartItems, showCart, setShowCart }) => {
//   const handleAddToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const handleRemoveFromCart = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems.splice(index, 1);
//     setCartItems(newCartItems);
//   };

//   const handleBuy = () => {
//     setCartItems([]);
//     setShowCart(false);
//   };

//   return (
//     <div className={showCart ? "modal active" : "modal"}>
//       <div className="modal-overlay" onClick={() => setShowCart(false)}></div>
//       <div className="modal-container">
//         <div className="modal-header">
//           <h3>Cart</h3>
//           <button className="close-button" onClick={() => setShowCart(false)}>x</button>
//         </div>
//         <div className="modal-body">
//           {cartItems.length === 0 && <p>Your cart is empty.</p>}
//           {cartItems.length > 0 && (
//             <ul>
//               {cartItems.map((item, index) => (
//                 <li key={index}>
//                   <span>{item}</span>
//                   <button onClick={() => handleRemoveFromCart(index)}>x</button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//         <div className="modal-footer">
//           <button className="buy-button" onClick={handleBuy}>Buy</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
