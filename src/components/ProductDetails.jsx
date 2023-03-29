import React from 'react'
const ProductDetails = (props) => {
  return (
    <div className='w-3/5 m-auto'>
      <div className='flex items-center my-10 space-x-10'>
          <div>
            <h2 className="text-xl font-bold mb-2">{props.product.name}</h2>
            <p className="text-gray-500 mb-2">{props.product.Class}</p>
            <img
              src={props.product.imageSrc}
              alt={props.product.imageAlt}
              className="h-80 w-full object-cover object-center mb-2"
            />
            <p className="text-gray-700 font-medium">{props.product.price}</p>
          </div>
          <div className='stars flex space-x-2'>
          </div>
          <input className='outline-0 w-16 px-2 border-2 border-gray-800' type="Number" id='amount' />
          <div className='btns space-x-5'>
            <button className='bg-stone-800 text-white px-5 py-2'>Add To Cart</button>
          </div>
      </div>
    </div>
  )
}

export default ProductDetails