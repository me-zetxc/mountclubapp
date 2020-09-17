import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
} from "reactstrap";
import Modal from "../ModalAdd/ModalAdd";
import ModalAuth from "../ModalAuth/ModalAuth";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import SearchBar from '../SeachBar/SearchBar'

let isAdmin = false; //TODO Доделать админ панель

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Router>
        <Navbar color="white" light expand="md" fixed="top">
          <NavbarBrand href="/">
            <img
              width="100px"
              height="100px"
              src="https://static10.tgstat.ru/channels/_0/9d/9d54ff8ed2e13b5285647d021a9abe9e.jpg"
            ></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Modal
                  buttonLabel={<FontAwesomeIcon color="black" icon={faPlus} />}
                />
              </NavItem>
              <NavItem style={{ marginLeft: "10px" }}>
                <ModalAuth buttonLabel={<FontAwesomeIcon color="black" icon={faSignInAlt} />} />
              </NavItem>

              {isAdmin ? (
                <NavItem>
                  <Button color="info">Пользователи</Button>
                </NavItem>
              ) : null}
              {isAdmin ? (
                <NavItem>
                  <Button color="info">Владельцы</Button>
                </NavItem>
              ) : null}
            </Nav>
            <SearchBar/>
            {/* <Input placeholder="Поиск" style={{ width: "20%" }} />
            <Button color="success">Искать</Button> */}
          </Collapse>
        </Navbar>
      </Router>
    </div>
  );
};

export default NavigationBar;
