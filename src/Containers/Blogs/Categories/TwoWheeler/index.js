import React from "react";
import PageTitle from "../../../../Components/UI/PageTitle";
import "../../../Loans/Vehicle/Vehicle.css";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceGrids from "../../../../Components/UI/Grids/ServiceGrid/ServiceGrids";

import Card from '../../../Card'


import "./TwoWheeler.css";
import TwoWheelerData from "./data";
import BlogCard from '../../../../Components/BlogCard'


const BlogTwowheeler = () => {

  return (
    <>
     
      <section className="section-padding"/>
      <section className="vehicle-section mobile-section-padding">
      <div className="heading1">
      <h2>Two Wheeler Blogs</h2>
    </div>

        <Container>
          <Row>
            <Col>
              <div className="feature-grids clearfix">
               
              {TwoWheelerData.data.map((item)=>{
              return (
                <Link to={`/blogs/two-wheeler-loan/${item.url}`}>
                <ServiceGrids 
                Link={`/blogs/two-wheeler-loan/${item.url}`}
                key={item.id}
                 imageclass={item.imageclass}
                 image_imgclass={item.image_imgclass}
                contentclass={item.contentclass}
                nameclass={item.nameclass}
                descriptionclass={item.descriptionclass}
                img={item.img}
                alt={item.alt}
                name={item.name}
                description={item.description}
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
};

export default BlogTwowheeler;
