import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Заголовок</h5>
            <p>
                Описание
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Контакты</h5>
            <ul className='Footer__contacts'>
              <li className="list-unstyled">Телефон: +996 312 909 115</li>
              <li className="list-unstyled">Моб.: +996 556 101 933</li>
              <li className="list-unstyled">+996 705 101 733</li>
              <li className="list-unstyled">WhatsApp: +996 556 101 933</li>
              <li className="list-unstyled">Email: trek@elcat.kg</li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr></hr>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <div>Будущие иконки телеграм, инстаграм, и прочие соц сети</div>
          <div>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
          </div>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
