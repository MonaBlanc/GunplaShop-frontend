import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const products = [
  {
    id: 1,
    name: 'Aerial Gundam 1/144',
    href: '#',
    imageSrc: 'https://riseofgunpla.com/wp-content/uploads/2023/03/aerial_permet_score_6_003-1-1000x1000.jpg',
    imageAlt: "Aerial Gundam",
    price: '49€',
    Class: 'Gundam: Witch from Mercury',
  },
  {
    id: 2,
    name: 'Michaelis Gundam 1/144',
    href: '#',
    imageSrc: 'https://riseofgunpla.com/wp-content/uploads/2022/09/156_5202_o_1ge1pnrtrr9718ijikbgkh11tv2i-1000x1000.webp',
    imageAlt: "Michaelis Gundam",
    price: '19€',
    Class: 'Gundam: Witch from Mercury',
  },  
  {
    id: 3,
    name: 'Perfect Strike Gundam 1/60',
    href: '#',
    imageSrc: 'https://riseofgunpla.com/wp-content/uploads/2020/07/pg-perfect_strike-5-1000x1000.webp',
    imageAlt: "Aerial Gundam",
    price: '280€',
    Class: 'Gundam: Gundam Seed',
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  }

  return (
    <div>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Some of our products...
          </h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div
                  className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
                  onClick={() => handleProductClick(product)}
                >
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
      {selectedProduct && (
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
                  <div className="mt-2">
                    <img
                      src={selectedProduct.imageSrc}
                      alt={selectedProduct.imageAlt}
                      className="h-80 mx-auto object-cover object-center"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{selectedProduct.description}</p>
                  <p className="mt-2 text-sm text-gray-500">{selectedProduct.color}</p>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-900 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

  