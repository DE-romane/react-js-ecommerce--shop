import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="flex flex-wrap  justify-between text-base font-medium text-gray-900">
      {/* price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items ) :{" "}
              <strong>{`  ${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        className="px-4 py-2 mt-4 mx-auto   text-base rounded-full text-white  bg-gray-500
 inline-flex focus:outline-none hover:bg-gray-700  "
      >
        Proceed To Buy
      </button>
    </div>
  );
}

export default Subtotal;
