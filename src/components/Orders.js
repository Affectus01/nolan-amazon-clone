import React, { useState, useEffect } from "react";
import "../css/Orders.css";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";

function Orders() {
  const [{ cart, user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders bg-white">
      <h2>Your Orders</h2>

      <div className="orders__orders">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
