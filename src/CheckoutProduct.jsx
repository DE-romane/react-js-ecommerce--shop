import React from "react";
// import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <ul className=" divide-y divide-gray-200">
      <li
        key={id}
        className="py-6  flex items-center p-2  transition duration-150 ease-in-out rounded-lg "
      >
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white sm:h-14 sm:w-14">
          <img src={image} alt="product" />
        </div>

        <div className="ml-4 flex-1 flex flex-col">
          <div>
            <div
              className="flex 
            
            justify-between text-base font-medium text-gray-900"
            >
              <h3 className="ml-1">{title}</h3>
              <p className="ml-4">$ {price}</p>
            </div>
          </div>
          <button
            onClick={removeFromBasket}
            type="button"
            className="font-medium w-12 text-indigo-600 hover:text-indigo-500"
          >
            Remove
          </button>
        </div>
      </li>
    </ul>
  );
}

export default CheckoutProduct;
