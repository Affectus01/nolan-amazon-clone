import React, { useState } from "react";
import "../css/CreateAccount.css";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import amazonLogo from "../images/amazon-login-logo.png";

function CreateAccount() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);

  const createUser = (e) => {
    e.preventDefault();

    let userInfo = auth.currentUser;

    userInfo
      .updateProfile({
        displayName: firstName,
        photoURL: "",
      })
      .then(() => {
        history.push("/");
      })
      .catch((error) => setError(true));
  };

  return (
    <div className="createAccount d-flex flex-column align-items-center bg-white">
      <Link to="/">
        <img
          className="createAccount__logo py-3 my-auto"
          src={amazonLogo}
          alt="Amazon"
        />
      </Link>

      <div className="createAccount__container d-flex flex-column rounded border border-secondary p-4">
        <h2 className="mb-3">Create Account</h2>

        <form>
          <div className="form-group">
            <label>E-mail</label>
            <input
              className="form-control border-dark"
              type="text"
              value={user?.email}
              disabled
            />
          </div>

          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control border-dark"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <label>Last Name</label>
            <input
              className="form-control border-dark"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {error && (
            <div className="border border-danger text-danger mt-2 px-4 py-2 text-center">
              <p className="m-0 p-0">An Error Has Occured</p>
            </div>
          )}

          <button
            className="createAccount__signInButton rounded border btn btn-block"
            onClick={createUser}
            type="Submit"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
