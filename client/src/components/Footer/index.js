import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
  <div className="footer_content">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="footer_logo text-center"><a href="#"><img src="images/logo_3.png" alt /></a></div>
        </div>
      </div>
      <div className="row footer_row">
        <div className="col-lg-4 footer_col">
          <div className="footer_item text-center">
            <div className="footer_icon d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
              <div><img src="assets/phone.png" alt="phone" /></div>
            </div>
            <div className="footer_title">talk to me</div>
            <div className="footer_list">
              <ul>
                <p>+1 330 571 3020</p>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 footer_col">
          <div className="footer_item text-center">
            <div className="footer_icon d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
              <div><img src="assets/email.png" alt="email" /></div>
            </div>
            <div className="footer_title">connect</div>
            <div className="footer_list">
              <ul>
                <p>dfuenning@gmail.com</p>
                <a href="https://github.com/DFuenning" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/derekfuenning/" target="_blank">linkedin</a>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 footer_col">
          <div className="footer_item text-center">
            <div className="footer_icon d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
              <div><img src="assets/location.png" alt="location" /></div>
            </div>
            <div className="footer_title">location</div>
            <div className="footer_list">
              <ul>
                <p>Akron, OH</p>
                <p style={{color: 'rgb(255, 123, 0)'}}>Go Browns</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
