import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Card(props) {
  return (
    <Row>
      {props.piatti.map((piatto, i) => (
        <Col key={i}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/200/300" />
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
