import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import "../css/Subtotal.css";
import { useStateValue } from "../StateProvider";

function Subtotal({ cartTotal }) {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();
  const [checkoutDisabled, setCheckoutDisabled] = useState(false);

  useEffect(() => {
    if (cartTotal <= 0) {
      setCheckoutDisabled(true);
    }
  }, [cartTotal]);

  return (
    <div className="subtotal d-flex flex-column justify-content-between rounded p-3">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} items): <strong>{value}</strong>
            </p>
            <p>
              <small className="subtotal__gift d-flex align-items-center">
                <input className="mr-1" type="checkbox" /> This Order Contains A
                Gift
              </small>
            </p>
          </>
        )}
        decimalScale={2}
        value={cartTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button
        onClick={(e) => history.push("/payment")}
        className="subtotal__checkoutButton btn border rounded"
        disabled={checkoutDisabled}
      >
        Proceed To Checkout
      </button>
    </div>
  );
}

export default Subtotal;
