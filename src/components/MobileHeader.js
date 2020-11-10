import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/MobileHeader.css";
import logo from "../images/amazon-mobile-logo.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import SearchIcon from "@material-ui/icons/Search";
import MobileMenu from "./MobileMenu";

function MobileHeader() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [showMenu, setShowMenu] = useState(false);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="mobileHeader">
      {showMenu && <MobileMenu toggleMenu={toggleMenu} />}
      <div className="mobileHeader__line1 d-flex align-items-center p-0 p-md-3">
        <div className="mobileHeader__line1Left">
          <MenuIcon
            onClick={toggleMenu}
            className="mobileHeader__menuIcon text-white"
          />

          <Link to="/">
            <img
              className="mobileHeader__logo m-0"
              src={logo}
              alt="Amazon Logo"
            />
          </Link>
        </div>

        <div className="mobileHeader__line1Right ml-auto d-flex align-items-center">
          <Link to={!user && "/Login"}>
            <span
              onClick={handleAuthentication}
              className="mx-0 mx-sm-3 text-white align-self-center"
            >
              Hello {user ? user?.displayName : "Guest"}
            </span>
          </Link>

          <div className="mobileHeader__cart mr-1 text-white align-items-center">
            <Link to="/Cart">
              <ShoppingCartIcon className="mobileHeader__cartLink text-white p-1" />
            </Link>

            <span className="mobileHeader__cartCount">
              <span>{cart?.length}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mobileHeader__line2 p-3">
        <div className="mobileHeader__search align-items-center d-flex input-group">
          <input
            type="text"
            placeholder="Search Amazon"
            className="mobileHeader__searchInput form-control py-4"
            aria-label="search"
            aria-describedby="button-addon1"
          />
          <div className="input-group-append">
            <SearchIcon
              className="mobileHeader__searchIcon p-1 rounded"
              id="button-addon1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
