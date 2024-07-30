import React from "react";
import "./App.css";
import ContentMenu from "./components/menu/ContentMenu";
import PrimaParte from "./components/Jumbotron/PrimaParte";
import BarraDiNavigazione from "./components/Navbar/BarraDiNavigazione";
import SecondoContenuto from "./components/galleryEcommenti/SecondoContenuto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <BarraDiNavigazione />
      <Routes>
        <Route path="/" element={<PrimaParte />} />
        <Route path="/menu" element={<ContentMenu />} />
        <Route path="/gallery" element={<SecondoContenuto />} />
      </Routes>
    </Router>
  );
}

export default App;
