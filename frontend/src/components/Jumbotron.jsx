import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

export default function Jumbotron() {
  return (
    <Container xs="12" md="12" lg="12">
      <div>
        <div class="p-5 mb-4 rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">
              Eccellenza culinaria in uno scenario da sogno!
            </h1>
            <p class="col-md-8 fs-4">
              Una scenografia romantica ed incantevole, cornice perfetta per
              godere di una cucina di altissimo livello e di un servizio in sala
              attento alle esigenze più esclusive.
            </p>
            <Button variant="outline-secondary" size="lg">
              Guarda il menù
            </Button>{" "}
            <Button variant="outline-secondary" size="lg">
              Fai una prenotazione
            </Button>{" "}
          </div>
        </div>
      </div>
    </Container>
  );
}
