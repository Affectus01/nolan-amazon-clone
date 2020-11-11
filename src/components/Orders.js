import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Orders.css";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";

function Orders() {
  const [{ cart, user }] = useStateValue();
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(false);

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

    if (orders.length < 0) {
      setError(true);
    }
  }, [user]);

  return (
    <div className="orders bg-white m-auto">
      <h2 className="pl-1 pl-md-5 py-3">Your Orders</h2>

      {error && (
        <div className="orders__errorMessage text-center">
          <p className="border border-primary py-2 mx-5">
            You currently have no orders!
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

      <div className="orders__orders px-1 px-md-5 pb-4">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
