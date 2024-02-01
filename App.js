import React from "react";
import NavBar from "./components/Navbar/NavBar.jsx";
import Card from "./components/Card/Card.jsx";
import Avatar from "./components/Avatar/Avatar.jsx";
import "./App.css";
import datas from "./utils/data.js";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <Card/> */}
      <Avatar datas={datas.slice(0, 3)} title={'inspiring stories from Aakar'}/>
      <NavBar />
      <Avatar datas={datas.slice(3, 6)} title={'inspiring stories from mohit'}/>
    </>
  );
};

export default App;
