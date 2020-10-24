import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import MobileHeader from "./components/MobileHeader";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HfHMwLdMUSrRZZ8toJwEQLrflBY0TfgHWQZurEmtIZdA7cxViAIPl5IWX7UIT78zVrYihQlApNYZlwrYS0DgmGj00Z3TL3cQm"
);

function App() {
  const [{ cart }, dispatch] = useStateValue();
  const [toggleMobile, setToggleMobile] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  useEffect(() => {
    const toggleHeader = () => {
      if (window.innerWidth <= 750) {
        setToggleMobile(true);
      } else {
        setToggleMobile(false);
      }
    };

    window.addEventListener("load", toggleHeader);
    window.addEventListener("resize", toggleHeader);
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            {toggleMobile ? <MobileHeader /> : <Header />}
            <Home />
            <Footer />
          </Route>
          <Route path="/orders">
            {toggleMobile ? <MobileHeader /> : <Header />}
            <Orders />
            <Footer />
          </Route>
          <Route path="/cart">
            {toggleMobile ? <MobileHeader /> : <Header />}
            <Cart />
            <Footer />
          </Route>
          <Route path="/payment">
            {toggleMobile ? <MobileHeader /> : <Header />}
            <Elements stripe={promise}>
              <Checkout />
            </Elements>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
