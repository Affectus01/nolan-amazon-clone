import { ModeComment } from "@material-ui/icons";
import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import moment from "moment";
import "../css/Order.css";

function Order({ order }) {
  return (
    <div className="order bg-white border border-secondary p-4 m-2 position-relative">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id position-absolute">
        <small>{order.id}</small>
      </p>
      {order.data.cart?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          shortTitle={item.shortTitle}
          price={item.price}
          image={item.image}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="order__total text-right">Order Total: {value}</p>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
