import React, {useEffect} from "react";
import "./style.css";



function ServCards() {

  useEffect(() => {

    console.log("any old string")
  },[])

  var ServArr = [
    {
      id: 1,
      title: "Oil Change ",
      description: "Oil Change description",
      price: 25,
    },
    {
      id: 2,
      title: "Battery Diagnostic and Replacement",
      description: "Battery Diagnostic and Replacement description",
      price: 30,
    },
    {
      id: 3,
      title: "Tire Rotation",
      description: "Tire Rotation description",
      price: 15,
    },
    {
      id: 4,
      title: "Brakes",
      description: "Breaks description",
      price: 100,
    },
    {
      id: 5,
      title: "Filter Changes",
      description: "Filter Changes description",
      price: 100,
    },
    {
      id: 6,
      title: "Fluids",
      description: "Fluids description",
      price: 100,
    },
  ];

  const addCart = (e) => {
    let cart = [];
    cart.push(e);
    console.log(cart);
  };

  return (
    <section className="serviceMain pt-5">
      <div className="container" id="cardGrid">
       
           {ServArr.map((allServices) => {
             return (
              <React.Fragment>
                 <div className="card-box" id="servCard" style={{ width: "18rem" }}>
              <div className="card-body">
                <h2 className="card-title">{allServices.title}</h2>
                <p className="card-text">{allServices.description}</p>
                <p className="card-text">$ {allServices.price}</p>
                
                <i
                  href="#"
                  data-product="0"
                  className="card-link fa fa-cart-plus"
                  onClick={() => addCart(allServices.title)}
                >
                  Add to Cart
                </i>
              </div>
            </div>
              </React.Fragment>
             )
           })}
          
          
            {/* <div className="card-box" id="servCard" style={{ width: "18rem" }}>
              <div className="card-body">
                <h2 className="card-title"> {ServArr[1].title}</h2>
                <p className="card-text">{ServArr[1].description}</p>
                <p className="card-text">$ {ServArr[1].price}</p>
                <i
                  href="#"
                  data-product="1"
                  onClick={() => addCart(ServArr[1].title)}
                  className="card-link fa fa-cart-plus"
                >
                   Add to Cart
                </i>
              </div>
            </div>
        
          
            <div className="card-box" id="servCard" style={{ width: "18rem" }}>
              <div className="card-body">
                <h2 className="card-title"> {ServArr[2].title}</h2>
                <p className="card-text">{ServArr[2].description}</p>
                <p className="card-text">$ {ServArr[2].price}</p>
                <i
                  href="#"
                  data-product="2"
                  onClick={() => addCart(ServArr[2].title)}
                  className="card-link fa fa-cart-plus"
                >
                  Add to Cart
                </i>
              </div>
            </div>
         
        
            <div className="card-box" id="servCard" style={{ width: "18rem" }}>
              <div className="card-body">
                <h2 className="card-title"> {ServArr[3].title}</h2>
                <p className="card-text">{ServArr[3].description}</p>
                <p className="card-text">$ {ServArr[3].price}</p>
                <i
                  href="#"
                  data-product="3"
                  onClick={() => addCart(ServArr[3].title)}
                  className="card-link fa fa-cart-plus"
                >
                  Add to Cart
                </i>
              </div>
           </div>
          
            <div className="card-box" id="servCard" style={{ width: "18rem" }}>
              <div className="card-body">
                <h2 className="card-title"> {ServArr[4].title}</h2>
                <p className="card-text">{ServArr[4].description}</p>
                <p className="card-text">$ {ServArr[4].price}</p>
                <i
                  href="#"
                  data-product="4"
                  onClick={() => addCart(ServArr[4].title)}
                  className="card-link fa fa-cart-plus"
                >
                  Add to Cart
                </i>
              </div>
            </div>
          
            <div className="card-box" id="servCard" style={{ width: "18rem" }}>
              <div className="card-body">
                <h2 className="card-title">{ServArr[5].title}</h2>
                <p className="card-text">{ServArr[5].description}</p>
                <p className="card-text">$ {ServArr[5].price}</p>
                <i
                  href="#"
                  data-product="5"
                  onClick={() => addCart(ServArr[5].title)}
                  className="card-link fa fa-cart-plus"
                >
                  Add to Cart
                </i>
              </div>
          </div> */}
         
          </div> 
    </section>
  );
}

export default ServCards;
