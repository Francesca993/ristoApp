import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import CommentArea from "./CommentArea";

export default function SecondoContenuto() {
  return (
    <Container>
      <Row>
        <h1>Fotogallery & Recensioni</h1>
      </Row>
      <Row>
        <Col>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/1300/500"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>
                  “Cucina non è mangiare. è molto, molto di più. Cucina è
                  poesia”
                </h3>
                <p>Heinz Beck</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/1300/500"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>
                  “Un artista è chi sa far bene una cosa. Cucinare, per
                  esempio.”
                </h3>
                <p>Andy Warhol</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/1300/500"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>
                  “Il dolce dev’essere spettacolare, perché arriva quando il
                  gourmet non ha più fame.”
                </h3>
                <p>Alexandre Grimod</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <CommentArea />
      </Row>
    </Container>
  );
}
