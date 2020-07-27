import React from "react";

import "./style.css";

function Feedback() {
    return (
<section className="getService">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="card" id="getCard">
          <div className="card-title pt-5">
            <h2>Need Service?</h2>
            <h4>Click the button to schedule an appointment right now!</h4>
          </div>
          <div className="card-body" id="bodyCard">
            <a href="/services.html" className="btnG">Schedule</a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card" id="helpCard">
          <div className="card-title pt-5">
            <h1 className="section-title">We would love your feedback!</h1>
          </div>
          <div className="row">
            {/* contact form */}
            <div className="col">
              <form className="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                <p>How has your experience been so far using Fumes?</p>
                <input type="radio" id="bad" name="bad" defaultValue="bad" />
                <label htmlFor="male">Needs Improvement</label><br />
                <input type="radio" id="OK" name="OK" defaultValue="OK" />
                <label htmlFor="female">It's been OK</label><br />
                <input type="radio" id="Great" name="Great" defaultValue="Great" />
                <label htmlFor="other">So far, Great!</label>
                {/* Message */}
                <div className="form-group label-floating pt-3">
                  <label htmlFor="message" className="control-label">How can we improve?</label>
                  <textarea className="form-control" rows={3} id="message" name="message" required data-error="Write your message" defaultValue={""} />
                  <div className="help-block with-errors" />
                </div>
                {/* Form Submit */}
                <div className="form-submit mt-5">
                  <button className="btn btn-success" type="submit" id="form-submit"><i className="material-icons mdi mdi-message-outline" /> Send Message</button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    )
}

export default Feedback;