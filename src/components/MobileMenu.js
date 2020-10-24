import React from "react";
import "../css/MobileMenu.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import CloseIcon from "@material-ui/icons/Close";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import Slide from "@material-ui/core/Slide";

function MobileMenu({ toggleMenu }) {
  const [{ user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="mobileMenu position-fixed w-100">
      <CloseIcon
        onClick={toggleMenu}
        className="mobileMenu__closeIcon position-absolute p-3 m-2 text-white"
      />
      <Slide
        direction="right"
        in={toggleMenu}
        mountOnEnter
        unmountOnExit
        timeout={{
          appear: 500,
          enter: 300,
          exit: 500,
        }}
      >
        <div className="mobileMenu__menuWrapper bg-white p-2">
          <h3 className="mobileMenu__header">
            <span>
              <PersonOutlineIcon className="mobileMenu__headerIcon" />
            </span>
            <span>{user ? user?.email : "Guest"}</span>
          </h3>

          <ul className="mobileMenu__menu mb-0 py-3 pl-0 border-top border-dark">
            <li>
              <Link to="/" onClick={toggleMenu}>
                <span>Home</span>
              </Link>
            </li>
            <li>Account</li>
            <li>Orders</li>
            <li>Buy Again</li>
            <li>Lists</li>
          </ul>

          <h3 className="mobileMenu__header">Settings</h3>
          <ul className="mobileMenu__menu mb-0 py-3 pl-0 border-top border-dark">
            <li>
              <Link to={!user && "/Login"}>
                <span onClick={handleAuthentication}>Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </Slide>
    </div>
  );
}

export default MobileMenu;
