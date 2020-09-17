import React, { useContext, useEffect} from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../Card/Card.css";
import {Card,CardImg,CardText,CardBody,CardTitle,} from "reactstrap";
import "./Card.css";
import { ToursContext } from "../../contexts/tours/tours.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import ModalEdit from "../ModalEdit/ModalEdit";
import BookModal from "../BookModal/BookModal";

const TourCard = (props) => {
  const { toursState, toursDispatch } = useContext(ToursContext);
  const fetchData = () => {
    toursDispatch({
      type: "GET_DATA",
    });
  };

  useEffect(fetchData, []);

  let isAdminCards = true; //TODO Доделать норм админку и убрать этот костыль



  function deleteHandler(item) {
    console.log(item)
    toursDispatch({
      type: "DELETE_ITEM",
      payload: item.id,
    });
  }

  return (
    <div>
      <Container className="main">
        <Row>
          {toursState.tours.map((item) => (
            <Col key={item.id} lg="4">
              <Card id={item.id} className="card" className="mb-5">
                <div className="cardImage">
                  <CardImg
                    className="cardImage"
                    top
                    width="100%"
                    src={item.image}
                    alt="Card image cap"
                  />
                </div>
                <CardBody>
                  <CardTitle>
                    <h2>{item.location}</h2>
                  </CardTitle>
                  <CardText>
                    Уровень сложности: {item.complexity} <br />
                    Когда: {item.date}
                    <br />
                    Цена: {`${item.price} сом`}
                    <br />
                    Сбор: {item.meeting}
                    <br />
                    Тип похода: {item.tourType}
                  </CardText>
                  <div className="cardButtons">
                  <BookModal item={item}/>
                    {/* <Button color="primary">
                      <a className="links" className="links" href='./book'>
                        <FontAwesomeIcon color="black" icon={faHiking} />
                      </a>
                    </Button> */}
                    {isAdminCards ? (
                      <>
                        <Button
                          onClick={() => deleteHandler(item)}
                          color="danger"
                        >
                          <FontAwesomeIcon color="black" icon={faTrash} />
                        </Button>
                        <ModalEdit data={item} className="ModalEdit"/>
                      </>
                    ) : null}
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TourCard;
