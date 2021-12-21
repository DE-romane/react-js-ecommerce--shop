import React from "react";
import { useStateValue } from "./StateProvider";
import { useState } from "react";

import { Popover, Transition } from "@headlessui/react";

import { Fragment } from "react";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  // const [open, setOpen] = useState(true);
  return (
    <div className="w-full max-w-sm px-4 ">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
              ${open ? "" : "text-opacity-90"}

              text-md  text-4xl relative
              p-1 rounded-full text-gray-500 focus:outline-none hover:text-gray-800


               
              `}
            >
              <span className="w-3 h-3 rounded-full absolute right-2 leading text-s bg-purple-200 text-white">
                {basket.length}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              {/* <span>Solutions</span> */}
              {/* <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              /> */}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white mr-5 z-10 w-80 max-w-sm px-4 mt-3 transform  -right-full sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 relative ">
                  <h1 className="mt-2 p-2">Shopping cart</h1>
                  <div className="mt-8 ">
                    <div>
                      {/*here product*/}
                      {basket.length === 0 ? (
                        <div className="h-20">
                          <h2 className="mt-2 p-2 ">
                            Your Shopping Basket is empty
                          </h2>
                        </div>
                      ) : (
                        <div>
                          <h2>Your Shopping Basket</h2>
                          {basket.map((item) => (
                            <CheckoutProduct
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              price={item.price}
                              rating={item.rating}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {basket.length === 0 ? (
                    ""
                  ) : (
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <Subtotal />
                    </div>
                  )}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>

    // <div className="w-1/2  max-w-md">
    //   <div className="h-full flex flex-col bg-gray-50 shadow-xl ">
    //     <div className="flex-1 py-6  px-4 sm:px-6">
    //       <div className="flex items-start justify-between">
    //         <h1>Shopping cart</h1>
    //       </div>

    //       <div className="mt-8">
    //         <div className="flow-root">
    //           {/*here product*/}
    //           {basket.length === 0 ? (
    //             <div>
    //               <h2>Your Shopping Basket is empty</h2>
    //             </div>
    //           ) : (
    //             <div>
    //               <h2 className="checkout__title">Your Shopping Basket</h2>
    //               {basket.map((item) => (
    //                 <CheckoutProduct
    //                   id={item.id}
    //                   title={item.title}
    //                   image={item.image}
    //                   price={item.price}
    //                   rating={item.rating}
    //                 />
    //               ))}
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //     {basket.length >= 0 && (
    //       <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
    //         <Subtotal />
    //       </div>
    //     )}

    //     <div className="mt-6">
    //       <a
    //         href="#"
    //         className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
    //       >
    //         Checkout
    //       </a>
    //     </div>
    //   </div>
    // </div>
    //end here

    // // </div>

    // </div>

    // <div className="checkout">
    //   <div className="checkout__left">
    //     {basket.length === 0 ? (
    //       <div>
    //         <h2>Your Shopping Basket is empty</h2>
    //         <p>
    //           you have no items in your basket. To buy one or more items click
    //           "Add to basket " next to the item.
    //         </p>
    //       </div>
    //     ) : (
    //       <div>
    //         <h2 className="checkout__title">Your Shopping Basket</h2>
    //         {basket.map((item) => (
    //           <CheckoutProduct
    //             id={item.id}
    //             title={item.title}
    //             image={item.image}
    //             price={item.price}
    //             rating={item.rating}
    //           />
    //         ))}
    //       </div>
    //     )}
    //   </div>
    //
    //   )}
    // </div>
  );
}

export default Checkout;
