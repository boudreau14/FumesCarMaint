import React from 'react';

function Register() {
    return (
        <div className="card">
  <h5 className="card-header info-color white-text text-center py-4">
    <strong>Sign up</strong>
  </h5>
  <div className="card-body px-lg-5 pt-0">
    <form className="md-form" style={{color: '#757575'}}>
      <input type="text" id="materialRegisterFormFirstName" className="form-control" />
      <label htmlFor="materialRegisterFormFirstName">First name</label>
      <input type="email" id="materialRegisterFormLastName" className="form-control" />
      <label htmlFor="materialRegisterFormLastName">Last name</label>
      <input type="email" id="materialRegisterFormEmail" className="form-control" />
      <label htmlFor="materialRegisterFormEmail">E-mail</label>
      <input type="password" id="materialRegisterFormPassword" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" />
      <label htmlFor="materialRegisterFormPassword">Password</label>
      <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
        At least 8 characters and 1 digit
      </small>
      <input type="password" id="materialRegisterFormPhone" className="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" />
      <label htmlFor="materialRegisterFormPhone">Phone number</label>
      <small id="materialRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
        Optional - for two step authentication
      </small>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="materialRegisterFormNewsletter" />
        <label className="form-check-label" htmlFor="materialRegisterFormNewsletter">Subscribe to our newsletter</label>
      </div>
      <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>
      <div className="text-center">
        <p>or sign up with:</p>
        <a type="button" className="btn-floating btn-fb btn-sm">
          <i className="fab fa-facebook-f" />
        </a>
        <a type="button" className="btn-floating btn-tw btn-sm">
          <i className="fab fa-twitter" />
        </a>
        <a type="button" className="btn-floating btn-li btn-sm">
          <i className="fab fa-linkedin-in" />
        </a>
        <a type="button" className="btn-floating btn-git btn-sm">
          <i className="fab fa-github" />
        </a>
        <hr />
        <p>By clicking
          <em>Sign up</em> you agree to our
          <a href target="_blank">terms of service</a> and
          <a href target="_blank">terms of service</a>. </p>
          <p>Already a member?
      <a href="/Login">Login</a>
    </p>
      </div>
    </form>
  </div>
</div>

        
    )
}

export default Register;