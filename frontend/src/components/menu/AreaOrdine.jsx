import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function AreaOrdine() {
  // CREATE (CRUD) -> Funzione per gestire l'aggiunta di un nuovo elemento
  const handleAddItem = () => {
    // Creiamo un nuovo oggetto elemento con il valore dell'input
    const newItem = { name: inputValue };

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

    // Resettiamo il valore dell'input
    setInputValue("");
  };
  return (
    <Container>
      <Row>
        <Col>
          <Button variant="secondary" onClick={handleAddItem()}>
            Aggiungi al carrello
          </Button>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Quantità</option>
            <option value={"1"}>1</option>
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
