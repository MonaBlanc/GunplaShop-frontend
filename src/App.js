import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './components/Products';

export default function App() {
  return (
    // <Router>
    //     <Routes>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/Products" component={Products} />
    //     </Routes>
    // </Router>
    <div>
    <Products />
  </div>
  );
}

// import React, { useState } from 'react';
// import Products from './components/Products';
// import ProductDetails from './components/ProductDetails';

// function App() {
//   const [currentPage, setCurrentPage] = useState('Products');
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handlePageChange = (pageName) => {
//     setCurrentPage(pageName);
//   }

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setCurrentPage('ProductDetails');
//   }

//   return (
//     <div className="App">
//       <header>
//         <button onClick={() => handlePageChange('Products')}>Products</button>
//       </header>
//       <main>
//         {currentPage === 'Products' && <Products handlePageChange={handlePageChange} handleProductClick={handleProductClick} />}
//         {currentPage === 'ProductDetails' && <ProductDetails handlePageChange={handlePageChange} product={selectedProduct} />}
//       </main>
//     </div>
//   );
// }

// export default App;
