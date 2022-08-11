// import logo from './logo.svg';
// import './App.css';
import React from "react";
// import style from "./component/style";
import Navbar from "./component/Navbar";
import RestaurantData from "./component/RestaurantData";
import Restaurant from "./component/Restaurant";
// import About from "./component/About";
// import Home from "./component/Home";

import "./style.css" ;


function App() {
  return (
    // <h1>hello daulat welcome</h1>
    <>
    <Navbar title="Myapp" home="Home" about="About us"/>
    {/* <About/> */}
    <Restaurant/>
    </>
  );
}

export default App;
