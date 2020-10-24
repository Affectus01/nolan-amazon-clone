import React from "react";
import "../css/CheckoutProduct.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../StateProvider";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckoutProduct({
  id,
  image,
  title,
  shortTitle,
  price,
  rating,
  hideButton,
}) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    //remove item from cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
    cartNotify();
  };

  const Msg = () => (
    <div>
      <p>{shortTitle} was removed from the cart</p>
    </div>
  );

  const cartNotify = () =>
    toast(<Msg />, {
      className: "border border-danger",
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

  return (
    <div className="checkoutProduct d-flex flex-column flex-lg-row my-3 py-3 border-top border-secondary">
      <img className="checkoutProduct__image" src={image} alt={title} />

      <div className="checkoutProduct__info ml-2">
        <div className="d-flex flex-column flex-lg-row">
          <p className="checkoutProduct__title mr-3 mb-0">{title}</p>
          <p className="checkoutProduct__price mb-0 ml-lg-auto">
            <span>$</span>
            <span>{price}</span>
          </p>
        </div>

        <div className="checkoutProduct__rating d-flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon />
            ))}
        </div>

        {!hideButton && (
          <button
            onClick={removeFromCart}
            className="checkoutProduct__removeButton border rounded mt-2"
          >
            Remove From Cart
          </button>
        )}
      </div>

      <ToastContainer
        className="toast__container"
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        closeButton={false}
      />
    </div>
  );
}

export default CheckoutProduct;
