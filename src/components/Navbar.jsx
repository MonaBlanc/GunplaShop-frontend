import React, { useState } from 'react';
import Cart from './Cart';



// Define your existing Navbar component
const Navbar = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {cartItems, setCartItems} = props;

  function handleCartClick(e) {
    e.preventDefault();
    setIsCartOpen(!isCartOpen);
  }  

  return (
<nav class="bg-white shadow">
  <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
    <div class="flex justify-between items-center">
        <div class="mx-auto">
            <a class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="/">        
              <img className="w-28" src="images/GunLogo.png" alt="" />
            </a>
        </div>
      <div class="flex md:hidden">
        <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="md:flex items-center">
    <div class="flex justify-center md:block">
    <a className="relative text-gray-700 hover:text-gray-600" href="/" onClick={handleCartClick}>
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <span className="absolute bottom-3 right-5 text-indigo-500 font-bold text-xs">{cartItems.length}</span>
      </svg>
      {cartItems.length > 0 && <span className="absolute bottom-2 right-5 font-bold text-indigo-500 p-1 text-xs">{cartItems.length}</span>}
    </a>

      {isCartOpen && <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        isOpen={isCartOpen}
        closeModal={() => setIsCartOpen(false)}
      />
      }
    </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;


