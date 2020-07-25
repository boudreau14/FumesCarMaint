import React from "react";

import "./style.css";


function ServCards() {

 var ServArr = [
  {
    "id": 1,
    "title": "Oil Change ",
    "description": "Oil Change description",
    "price": 25
  },
  {
    "id": 2,
    "title": "Battery Diagnostic and Replacement",
    "description": "Battery Diagnostic and Replacement description",
    "price": 30
  },
  {
    "id": 3,
    "title": "Tire Rotation",
    "description": "Tire Rotation description",
    "price": 15
  },
  {
    "id": 4,
    "title": "Brakes",
    "description": "Breaks description",
    "price": 100
  },
  {
    "id": 5,
    "title": "Filter Changes",
    "description": "Filter Changes description",
    "price": 100
  },
  {
    "id": 6,
    "title": "Fluids",
    "description": "Fluids description",
    "price": 100
  }
]
 

  function addCart(e) {
    console.log(e);
  }

    return (


<section className="serviceMain pt-5">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="card" id="servCard" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title" >Oil/Fluids</h5>
            <p className="card-text">stuff</p>
            <p className="card-text">stuff</p>
            <p className="card-text">stuff</p>
            <a href="#"  data-product="0" className="btn btn-primary" onClick={addCart(0)}>Add to Cart</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" id="servCard" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Batteries</h5>
            <p className="card-text">stuff</p>
            <p className="card-text">stuff</p>
            <p className="card-text">stuff</p>
            <a href="#" data-product="1" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" id="servCard" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Tires</h5>
            <p className="card-text">stuff</p>
            <p className="card-text">stuff</p>
            <p className="card-text">stuff</p>
            <a href="#" data-product="2" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="card" id="servCard" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Locks</h5>
            <p className="card-text">stuff</p>
            <p className="card-text">stuff</p>
            <p className="card-text">stuff</p>
            <a href="#" data-product="3" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" id="servCard" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Filter Changes</h5>
            <p className="card-text">stuff</p>
            <p className="card-text">stuff</p>
            <p className="card-text">stuff</p>
            <a href="#" data-product="4" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" id="servCard" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">And More!</h5>
            <p className="card-text">stuff</p>
            <p className="card-text">stuff</p>
            <p className="card-text">stuff</p>
            <a href="#" data-product="5" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default ServCards;