import React from "react";
import { Col, Row } from "reactstrap";
import TourCard from "../Card/Card";
import "./Main.css";
import ContentPagination from "../ContentPagination/ContentPagination";

export default function Main() {
  return (
    <div>
      <TourCard />
      <Row>
        <div className='contentPaginationBlock'>
          <ContentPagination/>
        </div>
          
     
      </Row>
    </div>
  );
}
