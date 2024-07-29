import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function AreaOrdine({ piatto, immagine }) {
  const handleAddItem = () => {
    // Creiamo un nuovo oggetto elemento con il valore dell'input
    const newItem = { nome: piatto, foto: immagine };

    // POST all'API per aggiungere il nuovo elemento
    fetch("http://localhost:5401/ListaOrdine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specifica il tipo di contenuto come JSON
      },
      body: JSON.stringify(newItem), // Convertiamo il nuovo oggetto elemento in una stringa JSON
    })
      .then((response) => response.json()) // Convertiamo la risposta in formato JSON
      .then((data) => setItems([...items, data])); // Aggiorniamo la lista degli elementi con il nuovo elemento
  };

  return (
    <Container>
      <Row>
        <Col>
          <Button type="submit" variant="secondary" onSubmit={handleAddItem()}>
            Aggiungi al carrello
          </Button>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="number"
              placeholder="Quantità"
              min="1"
              max="10"
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}
