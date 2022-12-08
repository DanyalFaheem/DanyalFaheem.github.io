import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Best We Got</h3>
            <h1>Chicken Tikka Flavor 9"</h1>
            <p>
              Made With Tantalizing Odour. <br /> 
              Filled With Purely Cooked Chicken Including Olive <br />
              Fries & Cold Drink For Every Individual <br />
              In Just RS.1800
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                ORDER HERE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
