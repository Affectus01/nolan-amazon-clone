import React from "react";
import "../css/Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../StateProvider";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ id, title, shortTitle, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    //add item to the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        shortTitle,
        image: image,
        price: price,
        rating: rating,
      },
    });
    cartNotify();
  };

  const Msg = () => (
    <div>
      <p>{shortTitle} was added to the cart</p>
    </div>
  );

  const cartNotify = () =>
    toast(<Msg />, {
      className: "border border-success",
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

  return (
    <div className="product d-flex flex-column align-items-center justify-content-center p-4 w-100 bg-white">
      <div className="product__info mb-4">
        <p className="m-0">{title}</p>
        <p className="product__price m-0">
          <span>
            <sup>$</sup>
          </span>
          <span>{price}</span>
        </p>
        <div className="product__rating d-flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon />
            ))}
        </div>
      </div>

      <img className="w-100 mb-4" src={image} alt="Product" />

      <button className="btn border rounded mb-1" onClick={addToCart}>
        Add To Cart
      </button>

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

export default Product;
