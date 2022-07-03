import React from "react";
import PageTitle from "../../../../Components/UI/PageTitle";
import "../../../Loans/Vehicle/Vehicle.css";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceGrids from "../../../../Components/UI/Grids/ServiceGrid/ServiceGrids";
import Two_wheeler from '../../../../img/Vehicles/Two_wheeler.jpg'
import Three_wheeler from '../../../../img/Vehicles/Three_wheeler.jpg'
import Four_wheeler from '../../../../img/Vehicles/Four_wheeler.jpg'
import Heavy_vehicles from '../../../../img/Vehicles/Heavy_vehicles.jpg'
import Electric_vehicles from '../../../../img/Vehicles/Electric_vehicles.jpg'

import HeavyData from './data'

const BlogHeavy = () => {
  return (
    <>
    <section className="section-padding"/>
      <section className="vehicle-section mobile-section-padding">
        <div className="heading1">
          <h2>Heavy Vehicle Blogs</h2>
        </div>
        <Container>
          <Row>
            <Col>
              <div className="feature-grids clearfix">
              {HeavyData.data.map((item,id)=>{
                return (
                  <Link to={`/blogs/heavy-vehicles-loan/${item.url}`}>

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

export default BlogHeavy;
