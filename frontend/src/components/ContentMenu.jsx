import React from "react";
import Container from "react-bootstrap/Container";
import Figurina from "./Figurina";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";

export default function ContentMenu() {
  let primi = [
    {
      nome: "Spaghetti alla Carbonara",
      descrizione: "Spaghetti con pancetta, uova e pecorino romano",
      prezzo: 12.0,
    },
    {
      nome: "Risotto ai Funghi",
      descrizione: "Riso Carnaroli con funghi porcini e parmigiano",
      prezzo: 14.5,
    },
    {
      nome: "Lasagna al Forno",
      descrizione: "Lasagna con ragù di carne, besciamella e parmigiano",
      prezzo: 13.0,
    },
    {
      nome: "Penne all'Arrabbiata",
      descrizione: "Penne con salsa di pomodoro piccante, aglio e peperoncino",
      prezzo: 10.0,
    },
    {
      nome: "Fettuccine Alfredo",
      descrizione: "Fettuccine con burro e parmigiano",
      prezzo: 11.5,
    },
    {
      nome: "Ravioli di Ricotta e Spinaci",
      descrizione:
        "Ravioli ripieni di ricotta e spinaci con salsa al burro e salvia",
      prezzo: 13.5,
    },
    {
      nome: "Gnocchi al Pesto",
      descrizione: "Gnocchi di patate con salsa al pesto di basilico",
      prezzo: 12.0,
    },
    {
      nome: "Tagliatelle al Ragù",
      descrizione: "Tagliatelle fresche con ragù di carne alla bolognese",
      prezzo: 14.0,
    },
    {
      nome: "Zuppa di Farro",
      descrizione: "Zuppa di farro con verdure fresche di stagione",
      prezzo: 9.0,
    },
    {
      nome: "Orecchiette alle Cime di Rapa",
      descrizione: "Orecchiette con cime di rapa, aglio e acciughe",
      prezzo: 11.0,
    },
  ];

  return (
    <Container>
      <Row className="d-flex flex-wrap align-items-center justify-content-between text-center p-3 m-2 ">
        <h1>La proposta culinaria del nostro ristorante</h1>
        <div>
          <Button variant="outline-secondary">I nostri Antipasti</Button>{" "}
          <Button variant="outline-secondary">Primi Piatti</Button>{" "}
          <Button variant="outline-secondary">Secondi&Contorni</Button>{" "}
          <Button variant="outline-secondary">La carta dei Vini</Button>{" "}
        </div>
      </Row>
      <Figurina primiPiatti={primi} />
    </Container>
  );
}
