import React from "react";
import menuplates from "./assets/menuplates.json";
import Container from "react-bootstrap/Container";
import MyCard from "./MyCard";

export default function Content() {
  return (
    <Container>
      <MyCard piatti={menuplates} />
    </Container>
  );
}
