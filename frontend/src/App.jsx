import React from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import ContentMenu from "./components/ContentMenu";
import PrimaParte from "./components/PrimaParte";
import BarraDiNavigazione from "./components/BarraDiNavigazione";

function App() {
  return (
    <>
      <BarraDiNavigazione />
      <PrimaParte />
      <Jumbotron />
      <ContentMenu />
    </>
  );
}

export default App;
