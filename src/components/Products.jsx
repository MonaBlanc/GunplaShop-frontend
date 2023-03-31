import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { getProducts } from '../container/actions';

// const products = [
//   {
//     id: 1,
//     name: 'Aerial Gundam 1/144',
//     href: '#',
//     imageSrc: 'https://riseofgunpla.com/wp-content/uploads/2023/03/aerial_permet_score_6_003-1-1000x1000.jpg',
//     imageAlt: "Aerial Gundam",
//     price: '49€',
//     Grade: 'HG',
//     quantity: 0
//   },
//   {
//     id: 2,
//     name: 'Michaelis Gundam 1/144',
//     href: '#',
//     imageSrc: 'https://riseofgunpla.com/wp-content/uploads/2022/09/156_5202_o_1ge1pnrtrr9718ijikbgkh11tv2i-1000x1000.webp',
//     imageAlt: "Michaelis Gundam",
//     price: '19€',
//     Grade: 'HG',
//     quantity: 0
//   },  
//   {
//     id: 3,
//     name: 'Perfect Strike Gundam 1/60',
//     href: '#',
//     imageSrc: 'https://riseofgunpla.com/wp-content/uploads/2020/07/pg-perfect_strike-5-1000x1000.webp',
//     imageAlt: "Perfect Strike",
//     price: '280€',
//     Grade: 'PG',
//     quantity: 0
//   },
//   {
//     id: 4,
//     name: 'Age-2 Gundam 1/100',
//     href: '#',
//     imageSrc: 'https://riseofgunpla.com/wp-content/uploads/2022/10/N2216816001007_014-1024x1024.webp',
//     imageAlt: "Age-2 Gundam",
//     price: '85€',
//     Grade: 'MG',
//     quantity: 0
//   },
//   {
//     id: 5,
//     name: 'Barbatos Gundam 1/100',
//     href: '#',
//     imageSrc: 'https://riseofgunpla.com/wp-content/uploads/2021/12/156_4789_s_ezg7netm7izmo986ggr0b39wy470-1024x1024.webp',
//     imageAlt: "Barbatos Gundam",
//     price: '175€',
//     Grade: 'MG',
//     quantity: 0
//   },  
//   {
//     id: 6,
//     name: 'Astray Gold Gundam 1/144',
//     href: '#',
//     imageSrc: 'https://riseofgunpla.com/wp-content/uploads/2020/07/55485126_581047855743197_3755563676145287168_o-1024x1024.webp',
//     imageAlt: "Astray Gundam",
//     price: '70€',
//     Grade: 'RG',
//     quantity: 0
//   },  
//   {
//     id: 7,
//     name: 'EVA-01 Evangelion 01 1/100',
//     href: '#',
//     imageSrc: 'https://riseofgunpla.com/wp-content/uploads/2021/09/1000163907_6-1024x1024.webp',
//     imageAlt: "EVA 01",
//     price: '99€',
//     Grade: 'RG',
//     quantity: 0
//   },  
//   {
//     id: 8,
//     name: 'Hello Kitty Gundam SD',
//     href: '#',
//     imageSrc: 'https://riseofgunpla.com/wp-content/uploads/2020/07/sdex-hello_kitty_rx782-8-1024x1024.webp',
//     imageAlt: "Hello Kitty Gundam",
//     price: '30€',
//     Grade: 'SD',
//     quantity: 0
//   }
// ];

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
            console.log(data);
              setProducts(data);
          }).catch(error => {
              alert(error.data.err);
          }); 
  }, [])

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
  };

  const filteredProducts = selectedGrade === 'All'
    ? products
    : products.filter(product => product.Grade === selectedGrade);

    const handleQuantityChange = (event) => {
      setQuantity(parseInt(event.target.value)); // <-- Update quantity state when the user selects a new quantity
    };

  return (
    <div>
      <Navbar />
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
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
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
                    <p className="text-gray-700 font-medium">{selectedProduct.price}</p>
                    <div className='stars flex space-x-2'></div>
                    <div className="flex items-center mt-2 gap-x-1.5">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                      Qté : 
                    </label>
                      <input className='outline-0 w-16 px-2 border-2 border-gray-800' type="Number" id='quantity' />
                      <div className='btns space-x-5'>
                        <button className='bg-stone-800 text-white rounded-md border border-transparent shadow-sm px-5 py-2'>Add To Cart</button>
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

  