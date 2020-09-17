import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import Axios from "axios";

export default function BookModal(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const bookHandler = () => {
    props.item.name = name;
    props.item.surname = surname;
    props.item.phone = phone;
    Axios.post(`http://localhost/book`, {
      data: props.item,
    });
  };
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
  console.log(props.item);
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        <FontAwesomeIcon color="black" icon={faHiking} />
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Бронировать
        </ModalHeader>
        <ModalBody>
          {/* // FORM */}
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="surname">Ваша Фамилия</Label>
                  <Input
                    onChange={(e) => setSurname(e.target.value)}
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder="Введите Вашу Фамилию"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Имя</Label>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Введите Ваше Имя"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="phone">Номер телефона</Label>
              <Input
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                name="phone"
                id="phone"
                placeholder="Введите номер мобильного телефона"
              />
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" name="check" id="acceptCheck" />
              <Label for="acceptCheck" check>
                Я принимаю условия пользовательского соглашения
              </Label>
            </FormGroup>
            <Button color="primary" onClick={bookHandler}>
              Забронировать
            </Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={toggle}>
            Выйти
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
