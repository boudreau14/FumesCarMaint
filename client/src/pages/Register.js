import React, { useState } from "react";
import api from "../utils/api";

function Register() {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [phone, setPhone] = useState([]);

  const registerSubmit = e => {
    e.preventDefault();
    api.register({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone
    }).then(res =>
      console.log(res.data)
    )
  };

  return (
    <div className="card">
      {" "}
      <h5 className="card-header info-color white-text text-center py-4">
        {" "}
        <strong>Sign up</strong>{" "}
      </h5>{" "}
      <div className="card-body px-lg-5 pt-0">
        {" "}
        <form className="md-form" style={{ color: "#757575" }}>
          {" "}
          <input
            type="text"
            id="materialRegisterFormFirstName"
            className="form-control"
            onChange={e => setFirstName(e.target.value)}
          />{" "}
          <label htmlFor="materialRegisterFormFirstName">First name</label>{" "}
          <input
            type="email"
            id="materialRegisterFormLastName"
            className="form-control"
            onChange={e => setLastName(e.target.value)}
          />{" "}
          <label htmlFor="materialRegisterFormLastName">Last name</label>{" "}
          <input
            type="email"
            id="materialRegisterFormEmail"
            className="form-control"
            onChange={e => setEmail(e.target.value)}
          />{" "}
          <label htmlFor="materialRegisterFormEmail">E-mail</label>{" "}
          <input
            type="password"
            id="materialRegisterFormPassword"
            className="form-control"
            onChange={e => setPassword(e.target.value)}
            aria-describedby="materialRegisterFormPasswordHelpBlock"
          />{" "}
          <label htmlFor="materialRegisterFormPassword">Password</label>{" "}
          <small
            id="materialRegisterFormPasswordHelpBlock"
            className="form-text text-muted mb-4"
          >
            {" "}
            At least 8 characters and 1 digit{" "}
          </small>{" "}
          <input
            type="password"
            id="materialRegisterFormPhone"
            className="form-control"
            aria-describedby="materialRegisterFormPhoneHelpBlock"
            onChange={e => setPhone(e.target.value)}
          />{" "}
          <label htmlFor="materialRegisterFormPhone">Phone number</label>{" "}
          <small
            id="materialRegisterFormPhoneHelpBlock"
            className="form-text text-muted mb-4"
          >
            {" "}
            Optional - for two step authentication{" "}
          </small>{" "}
          <div className="form-check">
            {" "}
            <input
              type="checkbox"
              className="form-check-input"
              id="materialRegisterFormNewsletter"
            />{" "}
            <label
              className="form-check-label"
              htmlFor="materialRegisterFormNewsletter"
            >
              Subscribe to our newsletter
            </label>{" "}
          </div>{" "}
          <button
            className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
            type="submit"
            onClick={registerSubmit}
          >
            Sign in
          </button>{" "}
        </form>{" "}
      </div>
    </div>
  );
}
export default Register;
