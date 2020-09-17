import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "./Header.css";
//TODO Доделать адаптивку
export default function Header() {
  return (
    <div className="header">
      <Container className="headerContainer">
        <Row className="d-flex justify-content-center pt-5">
          <h2 style={{ color: "white" }}>Туры</h2>
        </Row>

        <Row className="headerButtons mx-0 px-0 justify-content-around">
          <div className="tourButtons justify-content-center">
            <form action="./main">
              <Button size="lg" color="success">
                Однодневные
              </Button>
            </form>
          </div>
          <div className="tourButtons justify-content-center">
            <form action="./main">
              <Button size="lg" color="primary">
                Многодневные
              </Button>
            </form>
          </div>
          <div className="tourButtons justify-content-center">
            <form action="./main">
              <Button size="lg" color="danger">
                Альпинизм
              </Button>
            </form>
          </div>
        </Row>
      </Container>
    </div>
  );
}
