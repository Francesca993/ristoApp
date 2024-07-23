import React from "react";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Jumbotron from "./components/Jumbotron";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Jumbotron />
      <Content />
    </>
  );
}

export default App;
