import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { getProducts } from '../container/actions';

export default function Products() {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedGrade, setSelectedGrade] = useState('All');
  const [quantity, setQuantity] = useState(1); // <-- Add quantity state
  const [products, setProducts] = useState([{}]);
  useEffect(() => { 
      const products = dispatch(getProducts());
      products
          .then(data => {
            // console.log(data);
            setProducts(data);
          }).catch(error => {
            alert(error.data.err);
          }); 
          // eslint-disable-next-line
  }, []) 


  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product }]);
    // console.log(product);
  };

  console.log(cartItems);

  const handleAddToCart = (quantity, selectedProduct) => {
    console.log('Add to cart clicked'); // Add this line
    // console.log(selectedProduct);
    addToCart({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      imageSrc: selectedProduct.imageSrc,
      imageAlt: selectedProduct.imageAlt,
      Grade: selectedProduct.Grade,
      quantity: quantity // <-- Pass the updated quantity to the addToCart function
    });
  };

  
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
  };

  const filteredProducts = selectedGrade === 'All'
    ? products
    : products.filter(product => product.grade === selectedGrade);

    const handleQuantityChange = (event) => {
      setQuantity(parseInt(event.target.value)); // <-- Update quantity state when the user selects a new quantity
    };

  return (
    <div>
    <Navbar cartItems={cartItems} setCartItems={setCartItems}/>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Some of our products...
          </h2>
  
          <div className="flex justify-center mt-4 space-x-4">
            <button
              className={`rounded-md border border-gray-300 px-4 py-2 font-medium ${
                selectedGrade === 'All' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => handleGradeClick('All')}
            >
              All Grades
            </button>
            <button
              className={`rounded-md border border-gray-300 px-4 py-2 font-medium ${
                selectedGrade === 'HG' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => handleGradeClick('HG')}
            >
              HG
            </button>
            <button
              className={`rounded-md border border-gray-300 px-4 py-2 font-medium ${
                selectedGrade === 'RG' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => handleGradeClick('RG')}
            >
              RG
            </button>
            <button
              className={`rounded-md border border-gray-300 px-4 py-2 font-medium ${
                selectedGrade === 'MG' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => handleGradeClick('MG')}
            >
              MG
            </button>
            <button
              className={`rounded-md border border-gray-300 px-4 py-2 font-medium ${
                selectedGrade === 'PG' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => handleGradeClick('PG')}
            >
              PG
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative"
                onClick={() => handleProductClick(product)}
              >
                  <div
                  className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price} €</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {Object.keys(selectedProduct).length !== 0 ? (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
  
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
  
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    {selectedProduct.name}
                  </h3>
                  <div className="mt-2 flex flex-col items-center">
                    <img
                      src={selectedProduct.imageSrc}
                      alt={selectedProduct.imageAlt}
                      className="h-80 mx-auto object-cover object-center"
                    />
                    <p className="mt-2 text-sm text-gray-500">{selectedProduct.description}</p>
                    <p className="mt-2 text-sm text-gray-500">{selectedProduct.color}</p>
                    <p className="text-gray-700 font-medium">{selectedProduct.price}€</p>
                    <div className='stars flex space-x-2'></div>
                    <div className="flex items-center mt-2 gap-x-1.5">
                    <label htmlFor="quantity" className="font-medium text-gray-700">Quantity:</label>
                        <select id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange} className="rounded-md border border-gray-300 px-2 py-1">
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                          ))}
                        </select>
                      <div className='btns space-x-5'>
                      <button
                        className="bg-indigo-500 text-white px-4 py-2 rounded-md"
                        onClick={() => handleAddToCart(quantity, selectedProduct)}
                      >
                        Add to Cart
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-900 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm"
                onClick={() => setSelectedProduct({})}
              >
                Close
              </button>
              </div>
            </div>
          </div>
        </div>
      ): null}
      <Footer />
    </div>
  );
}

  