import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Figurina(props) {
  return (
    <Row>
      {props.piatti.map((piatto, i) => (
        <Col xs="12" md="12" lg="6" key={i}>
          <Card className="p-3 m-4" style={{ maxWidth: 500 }}>
            <Card.Img
              variant="top"
              src={piatto.immagine}
              style={{ maxWidth: 460, height: 350, maxHeight: 350 }}
            />
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
