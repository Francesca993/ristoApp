import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function AreaOrdine() {
  return (
    <Container>
      <Row>
        <Col>
          <Button variant="secondary">Aggiungi al carrello</Button>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Quantità</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="1">7</option>
            <option value="1">8</option>
            <option value="1">9</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
}
