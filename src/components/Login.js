import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/Login.css";
import amazonLogo from "../images/amazon-login-logo.png";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState(false);
  const [createAccountError, setCreateAccountError] = useState(false);

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => setSignInError(true));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/CreateAccount");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login d-flex flex-column align-items-center bg-white">
      <Link to="/">
        <img
          className="login__logo py-3 my-auto"
          src={amazonLogo}
          alt="Amazon"
        />
      </Link>

      <div className="login__container d-flex flex-column rounded border border-secondary p-4">
        <h2 className="mb-3">Sign-In</h2>

        <form>
          <div className="form-group">
            <label>E-mail</label>
            <input
              className="form-control border-dark"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control border-dark"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="login__signInButton rounded border btn btn-block"
            onClick={signIn}
            type="Submit"
          >
            Sign In
          </button>
        </form>

        {signInError && (
          <div className="border border-danger text-danger mt-2 px-4 py-2 text-center">
            <p className="m-0 p-0">Incorrect Username or Password</p>
          </div>
        )}

        <p className="mt-3 text-muted">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <small className="text-center mb-1 text-muted">New to Amazon?</small>

        <button
          className="login__registerButton btn btn-block btn-outline-dark"
          onClick={register}
        >
          Create your Amazon account
        </button>

        {createAccountError && (
          <div className="border border-danger text-danger mt-2 px-4 py-2 text-center">
            <p className="m-0 p-0">Username Already Exists</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
