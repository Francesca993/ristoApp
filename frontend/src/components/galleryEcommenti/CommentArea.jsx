import React from "react";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/Container";

export default function CommentArea() {
  return (
    <Container>
      <Row>
        <h1>LASCIA UN COMMENTO</h1>
      </Row>
      <Row>
        <form action="/submit" method="POST">
          <label for="username">Nome utente:</label>
          <input type="text" id="username" name="username" value="" />
          <label for="commento">Nome utente:</label>
          <input type="text" id="commento" name="commento" value="" />
        </form>
      </Row>
    </Container>
  );
}
