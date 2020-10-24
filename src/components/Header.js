import React from "react";
import "../css/Header.css";
import logo from "../images/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header d-flex align-items-center position-sticky">
      <Link to="/">
        <img className="header__logo m-0" src={logo} alt="Amazon Logo" />
      </Link>

      <div className="header__search align-items-center d-flex input-group">
        <div className="input-group-prepend border-right border-dark">
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              All
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {/* 57 items */}
              <a className="dropdown-item py-0" href="#">
                Action
              </a>
              <a className="dropdown-item py-0" href="#">
                Another action
              </a>
              <a className="dropdown-item py-0" href="#">
                Something else here
              </a>
              <a className="dropdown-item py-0" href="#">
                Action
              </a>
              <a className="dropdown-item py-0" href="#">
                Another action
              </a>
              <a className="dropdown-item py-0" href="#">
                Something else here
              </a>
              <a className="dropdown-item py-0" href="#">
                Action
              </a>
              <a className="dropdown-item py-0" href="#">
                Another action
              </a>
              <a className="dropdown-item py-0" href="#">
                Something else here
              </a>
              <a className="dropdown-item py-0" href="#">
                Action
              </a>
              <a className="dropdown-item py-0" href="#">
                Another action
              </a>
              <a className="dropdown-item py-0" href="#">
                Something else here
              </a>
              <a className="dropdown-item py-0" href="#">
                Action
              </a>
              <a className="dropdown-item py-0" href="#">
                Another action
              </a>
              <a className="dropdown-item py-0" href="#">
                Something else here
              </a>
              <a className="dropdown-item py-0" href="#">
                Action
              </a>
              <a className="dropdown-item py-0" href="#">
                Another action
              </a>
              <a className="dropdown-item py-0" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
        <input
          type="text"
          className="header__searchInput form-control"
          placeholder="Search Amazon"
          aria-label="search"
          aria-describedby="button-addon1"
        />
        <div className="input-group-append">
          <button className="header__searchButton btn">
            <SearchIcon className="header__searchIcon" id="button-addon1" />
          </button>
        </div>
      </div>

      <div className="header__nav d-flex">
        <Link to={!user && "/Login"}>
          <div
            onClick={handleAuthentication}
            className="header__option d-flex text-white flex-column px-3 mx-1"
          >
            <span className="header__optionLineOne">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option d-flex text-white flex-column px-3 mx-1">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option d-flex text-white flex-column px-3 mx-1">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionCart d-flex align-items-center text-white px-3 mx-1">
          <Link className="header__cartLink" to="/Cart">
            <ShoppingCartIcon />
          </Link>

          <span className="header__optionLineTwo header__cartCount ml-1">
            <span>{cart?.length}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
