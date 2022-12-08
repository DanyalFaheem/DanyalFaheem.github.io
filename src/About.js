import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO MAESTRO PIZZINI</h1>
            <p>
              We have come up with the best place for you to visit in your leisure time. 
              Deliciousness is our speciality along with cheap rates and great service.
              Dont forget to visit 👌
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
