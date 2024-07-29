import React from "react";
import "./App.css";
import ContentMenu from "./components/menu/ContentMenu";
import PrimaParte from "./components/Jumbotron/PrimaParte";
import BarraDiNavigazione from "./components/Navbar/BarraDiNavigazione";
import SecondoContenuto from "./components/galleryEcommenti/SecondoContenuto";

function App() {
  return (
    <>
      <BarraDiNavigazione />
      <PrimaParte />
      <ContentMenu />
      <SecondoContenuto />
    </>
  );
}

export default App;
