import React from "react";
import menuplates from "./assets/menuplates.json";
import Card from "./Card";
import Container from "react-bootstrap/Container";

export default function Content() {
  return (
    <Container>
      <Card piatti={menuplates} />
    </Container>
  );
}
