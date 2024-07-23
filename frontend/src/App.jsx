import React from "react";
import "./App.css";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import ContentMenu from "./components/ContentMenu";
import PrimaParte from "./components/PrimaParte";

function App() {
  return (
    <>
      <Header />
      <PrimaParte />
      <Jumbotron />
      <ContentMenu />
    </>
  );
}

export default App;
