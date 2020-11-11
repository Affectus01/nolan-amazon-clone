import React, { useState, useEffect } from "react";
import "../css/Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ id }) {
  const [{ cart }, dispatch] = useStateValue();
  const [title, setTitle] = useState("");
  const [shortTitle, setShortTitle] = useState("");
  const [price, setPrice] = useState();
  const [rating, setRating] = useState();
  const [image, setImage] = useState("");

  useEffect(() => {
    db.collection("products")
      .where("id", "==", id)
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          setTitle(doc.data().title);
          setShortTitle(doc.data().shortTitle);
          setPrice(doc.data().price);
          setRating(doc.data().rating);
          setImage(doc.data().image);
        });
      });
  }, []);

  const addToCart = () => {
    //add item to the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        shortTitle: shortTitle,
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
