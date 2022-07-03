import React, { useState } from "react";
import styled from "styled-components";

import Cards from "./Cards/Cards";
import SearchBar from "../../Components/SearchBar";

import '../Loans/Vehicle/Vehicle.css'
import Data from './data'
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceGrids from "../../Components/UI/Grids/ServiceGrid/ServiceGrids";

function Card() {

  return (
      <>
      <section className="vehicle-section mobile-section-padding">
      <div className="heading1">
      <h2>Blog Categories</h2>
      </div>
      
                   <Container>
                    <Row>
                      <Col>
                      <div className="feature-grids clearfix">
                      {Data.data.map((item,id)=>{
                        return(
                          <Link to={`${item.url}`}>
                          <ServiceGrids 
                          key={id}
                          imageclass={item.imageclass}
                          image_imgclass={item.image_imgclass}
                          contentclass={item.contentclass}
                      nameclass={item.nameclass}
                      descriptionclass={item.descriptionclass}
                      img={item.img}
                      alt={item.alt}
                      name={item.name}
                      />
                      </Link>
                      )
                    })} 
                     </div>
                     </Col>
                    </Row>
                  </Container>
              
                  </section>  
    </>
  );
}

export default Card;
