import React, {useState} from 'react'
import Slider from "react-slick"
import { Col, Container, Modal, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ServiceGrids from '../ServiceGrid/ServiceGrids'
import './BlogGrid.css'
import '../../../../Containers/Home/Home.css'

import Two_wheeler from '../../../../img/Vehicles/Two_wheeler.jpg'
import '../../../../Containers/About/About.css'

/**
* @author
* @function BlogGrid
**/



var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
      
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const BlogGrid = (props) => {
    return (
        <>
        <section className="blog-section section-padding">
    <div className="top-section1-heading">
    <h2>Recent Articles</h2>
    </div>
      <Container>
        <Row>
          <Col>
            <div className="feature-grids clearfix">
        <Slider {...settings}>
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        </Slider>
        
        </div>
        </Col>
      </Row>
    </Container>
  </section>
        <section className="blog-section section-padding">
    <div className="top-section1-heading">
    <h2>Popular Articles</h2>
    </div>
      <Container>
        <Row>
          <Col>
            <div className="feature-grids clearfix">
        <Slider {...settings}>
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        <Link to="/twowheeler"><ServiceGrids imageclass="image col-md-12" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Two_wheeler} alt="Two Wheeler" name="Two Wheeler" description="Director of Yuwan Finance"/></Link> 
        </Slider>
        
        </div>
        </Col>
      </Row>
    </Container>
  </section>
        </>
        )
}


export default BlogGrid