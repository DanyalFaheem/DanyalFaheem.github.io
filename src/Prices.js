import React from "react";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza1.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Crown Crust Pizza</h1>
              <p className="price__text">
                <p className="price_rs">9" | Rs.1150 </p>
                <p className="price_rs">12" | Rs.1550 </p>
                <p className="price_rs">15" | Rs.2000 </p>
              </p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza2.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Stuff Crust Pizza</h1>
              <p className="price__text">
                <p className="price_rs">9" | Rs.1200 </p>
                <p className="price_rs">12" | Rs.1600 </p>
                <p className="price_rs">15" | Rs.2400 </p>
              </p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza3.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Cheezy Treat</h1>
              <p className="price__text">
                <p className="price_rs">9" | Rs.1150 </p>
                <p className="price_rs">12" | Rs.1500 </p>
                <p className="price_rs">15" | Rs.2300 </p>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Prices;
