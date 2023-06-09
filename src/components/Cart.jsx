  import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { Fragment, useEffect, useState } from 'react';
import "./Cart.scss";



  export default function Cart(props) {
      const [open, setOpen] = useState(true)
      const [totalPrice, setTotalPrice] = useState(0)
      const cartItems = props.cartItems
      const setCartItems = props.setCartItems
      console.log("Cart")
      console.log(cartItems)

    // Calculate the total price based on the sum of the prices of the products in the cart
    const calculateTotalPrice = () => {
      const newTotalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
      setTotalPrice(newTotalPrice)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
      calculateTotalPrice();
    }, [calculateTotalPrice]);
    


  // Change the state update function to use the callback syntax
      const removeFromCart = (id) => {
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id))
        calculateTotalPrice()
      }

    // Calculate the total price when the component mounts
    useState(() => {
      calculateTotalPrice()
    }, [])

    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul className="-my-6 divide-y divide-gray-200">
                            {cartItems!== [{}] && cartItems.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>{product.name}</a>
                                        </h3>
                                        <p className="ml-4">{product.price}€</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">{product.Grade}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">Qty {product.quantity}</p>

                                      <div className="flex">
                                        <button   onClick={() => removeFromCart(product.id)}
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>{totalPrice}€</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6 flex justify-center">
                        <button id='button' className='bg-indigo-500 hover:text-indigo-500 hover:border-indigo-500 text-white'   onClick={() => {
                        document.documentElement.classList.toggle('checked-out');
                      }}>
                          <svg style={{width:'24px',height:'24px'}}  viewBox="0 0 24 24" id="cart">
                            <path id='path' d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                          </svg>
                          <span>Checkout</span>
                          <svg id="check" style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
                            <path stroke-width="2" fill="none" stroke="#ffffff" d="M 3,12 l 6,6 l 12, -12"/>
                          </svg>
                        </button>

                          {/* <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </a> */}
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{' '} 
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
  }
  