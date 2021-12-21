import React from "react";
import { Link } from "react-router-dom";

import { useStateValue } from "./StateProvider";

function Product({ id, company, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        company: company,
        title: title,
        price: price,
        // rating: rating,
        image: image,
      },
    });
  };
  return (
    <div class="relative bg-white w-32 h-56 md:w-40 md:h-60 my-2 mx-auto sm:m-4  shadow-sm rounded-2xl  p-2 ">
      <div className="flex items-center justify-center flex-shrink-0">
        <img
          className="  w-24 h-24 md:w-28 md:h-28 rounded-t-lg overflow-hidden object-contain object-center  "
          src={image}
          alt=""
        />
      </div>

      <div class="mt-4">
        <h3 className="text-gray-600 text-xs tracking-widest title-font mb-1">
          {company}
        </h3>
        <h2 className="text-gray-900 title-font text-base font-medium mr-2">
          {title}
        </h2>

        <div class="flex items-center justify-between ">
          <p className="text-xs absolute bottom-2 left-2 text-gray-600">
            {" "}
            ${price}
          </p>
          <button
            onClick={addToBasket}
            type="button"
            className="absolute bottom-1  right-1 w-8 h-8    text-base font-medium rounded-full text-gray-500 bg-gray-100 hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 m-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    /* <div className="product">
    //   <div className="product__info">
    //
    //     <p>{title}</p>
    //     <p className="product__price">
    //       <small>$</small>
    //       <strong>{price}</strong>
    //     </p>
    //     <div className="product__rating">
    //       {Array(rating)
    //         .fill()
    //         .map((_) => (
    //           <p>⭐</p>
    //     </div>
    //   </div>

    //   <img src={image} alt="" />
    //   <button >Add to basket</button>
    // </div>*/
  );
}

export default Product;
