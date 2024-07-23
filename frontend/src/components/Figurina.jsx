import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Figurina(props) {
  return (
    <Row>
      {props.primiPiatti.map((piatto, i) => (
        <Col key={i}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/400/500" />
            <Card.Body>
              <Card.Title>{piatto.nome}</Card.Title>
              <Card.Text>{piatto.descrizione}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
