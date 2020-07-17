import React, { useState } from "react";
import api from "../utils/api";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  let history = useHistory();

  const logInSubmit = (e) => {
    e.preventDefault();
    api
      .logIn({
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        history.push("/");
      });
  };

  return (
    <form className="border border-light p-5">
      <p className="h4 mb-4 text-center">Sign in</p>
      <input
        type="email"
        id="defaultLoginFormEmail"
        className="form-control mb-4"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="defaultLoginFormPassword"
        className="form-control mb-4"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="d-flex justify-content-between">
        <div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="defaultLoginFormRemember"
            />
            <label
              className="custom-control-label"
              htmlFor="defaultLoginFormRemember"
            >
              Remember me
            </label>
          </div>
        </div>
        <div>
          <a href>Forgot password?</a>
        </div>
      </div>
      <button
        className="btn btn-info btn-block my-4"
        type="submit"
        onClick={logInSubmit}
      >
        Sign in
      </button>
      <div className="text-center">
        <p>
          Not a member?
          <a href="/register">Register</a>
        </p>
        <p>or sign in with:</p>
        <a type="button" className="light-blue-text mx-2">
          <i className="fab fa-facebook-f" />
        </a>
        <a type="button" className="light-blue-text mx-2">
          <i className="fab fa-twitter" />
        </a>
        <a type="button" className="light-blue-text mx-2">
          <i className="fab fa-linkedin-in" />
        </a>
        <a type="button" className="light-blue-text mx-2">
          <i className="fab fa-github" />
        </a>
      </div>
    </form>
  );
}

export default Login;
