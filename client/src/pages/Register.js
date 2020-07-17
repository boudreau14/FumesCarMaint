import React, { useState } from "react";
import api from "../utils/api";
import { Alert } from "reactstrap";

function Register() {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [phone, setPhone] = useState([]);
  const [street, setStreet] = useState([]);
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);
  const [zip, setZip] = useState([]);
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);
  
  const registerSubmit = (e) => {
    e.preventDefault();
    api
      .register({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        street: street,
        city: city,
        state: state,
        zip: zip,
        make: make,
        model: model,
      })
      .then((res) => console.log(res.data));
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
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />{" "}
          <input
            type="text"
            id="materialRegisterFormLastName"
            className="form-control"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />{" "}
          <input
            type="phone"
            id="materialRegisterFormPhone"
            className="form-control"
            aria-describedby="materialRegisterFormPhoneHelpBlock"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />{" "}
          <input
            type="email"
            id="materialRegisterFormEmail"
            className="form-control"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <input
            type="password"
            id="materialRegisterFormPassword"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby="materialRegisterFormPasswordHelpBlock"
          />{" "}
          <small
            id="materialRegisterFormPasswordHelpBlock"
            className="form-text text-muted mb-4"
          >
            {" "}
            At least 8 characters and 1 digit{" "}
          </small>{" "}
          
          <div className="form-check">
            {" "}
            <input
              type="text"
              id="StreetAddress"
              className="form-control"
              placeholder="Street Address"
              onChange={(e) => setStreet(e.target.value)}
            />{" "}
            <input
              type="text"
              id="City"
              className="form-control"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />{" "}
            <input
              type="text"
              id="State"
              className="form-control"
              placeholder="State (ex. OH)"
              onChange={(e) => setState(e.target.value)}
            />{" "}
            <input
              type="number"
              id="zip"
              className="form-control"
              placeholder="Zip Code (ex. 12345)"
              onChange={(e) => setZip(e.target.value)}
            />{" "}
            <input
              type="text"
              id="Make"
              className="form-control"
              placeholder="Make (ex. Ford)"
              onChange={(e) => setMake(e.target.value)}
            />{" "}
            <input
              type="text"
              id="Model"
              className="form-control"
              placeholder="Model (ex. Mustang)"
              onChange={(e) => setModel(e.target.value)}
            />{" "}
            <label
              className="form-check-label"
              htmlFor="materialRegisterFormNewsletter"
            >
            </label>{" "}
          </div>{" "}
          <button
            className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
            type="submit"
            onClick={registerSubmit}
          >
            Register
          </button>{" "}
        </form>{" "}
      </div>
    </div>
  );
}
export default Register;
