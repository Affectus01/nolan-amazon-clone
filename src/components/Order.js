import { ModeComment } from "@material-ui/icons";
import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import moment from "moment";
import "../css/Order.css";

function Order({ order }) {
  return (
    <div className="order bg-white border border-secondary p-4 rounded position-relative">
      <div className="order__header d-flex flex-md-row flex-column justify-content-between">
        <div className="pb-2 pb-md-0">
          <p className="font-weight-bold">ORDER PLACED</p>
          <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
        </div>

        <div className="pb-2 pb-md-0">
          <p className="font-weight-bold">TOTAL</p>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p className="order__total">{value}</p>
              </>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>

        <div className="pb-2 pb-md-0">
          <p className="font-weight-bold">ORDER #</p>
          <p className="order__id">
            <small>{order.id}</small>
          </p>
        </div>
      </div>

      {order.data.cart?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          shortTitle={item.shortTitle}
          price={item.price}
          image={item.image}
          rating={item.rating}
          showRemoveButton
          showBuyAgainButton={true}
        />
      ))}
    </div>
  );
}

export default Order;
