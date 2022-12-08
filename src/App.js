import React from "react";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Shop from "./Shop";
import Menu from "./Menu";
import Clients from "./Clients";
import Prices from "./Prices";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
    </div>
  );
}

export default App;
