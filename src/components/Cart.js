import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Cart.css";
import shoppingCartHeaderAd from "../images/shopping-cart-header.png";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import { getCartTotal } from "../reducer";
import CheckoutProduct from "./CheckoutProduct";

function Cart() {
  const [{ user, cart }, dispatch] = useStateValue();
  const [error, setError] = useState(false);
  var cartTotal = getCartTotal(cart);

  useEffect(() => {
    if (cartTotal <= 0) {
      setError(true);
    }
  }, [cartTotal]);

  return (
    <div className="cart d-flex p-4 m-auto flex-column flex-lg-row">
      <div className="cart__left mr-auto order-2 order-lg-1 w-100">
        <img
          src={shoppingCartHeaderAd}
          alt="Shopping Cart Ad"
          className="cart__ad border border-secondary rounded w-100 d-none d-lg-block"
        />

        <div>
          <h3 className="cart__title py-4">Your Shopping Cart</h3>
          {error && (
            <div className="orders__errorMessage text-center">
              <p className="border border-primary py-2">
                You currently have no items in your cart!
              </p>

              <p>
                {user ? (
                  <Link to="/">Start Shopping</Link>
                ) : (
                  <Link to="/Login">Sign In</Link>
                )}
              </p>
            </div>
          )}
          <p className="cart__priceTitle font-weight-bold text-right pr-2 mb-0">
            Price
          </p>

          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              shortTitle={item.shortTitle}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}

          <p className="cart__priceTitle font-weight-bold text-right pr-2 mb-0 text-right border-top border-secondary">
            Total: ${cartTotal}
          </p>
        </div>
      </div>

      <div className="cart__right ml-2 order-1 order-lg-2">
        <Subtotal cartTotal={cartTotal} />
      </div>
    </div>
  );
}

export default Cart;
