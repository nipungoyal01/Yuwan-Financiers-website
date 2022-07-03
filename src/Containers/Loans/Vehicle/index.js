import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";

import ServiceGrids from "../../../Components/UI/Grids/ServiceGrid/ServiceGrids";

import { Link } from "react-router-dom";
import "./Vehicle.css";
import Slider from "react-slick";
import TestimonialGrid from "../../../Components/UI/Grids/TestimonialGrid";
import anshulTest from "../../../img/anshul.jpg";
import devenTest from "../../../img/deven.png";
import nipunTest from "../../../img/nipun.png";

// import AccordionCard from "../../../Components/UI/AccordionCard";
// import Two_wheeler from "../../../img/Vehicles/Two_wheeler.jpg";
// import Three_wheeler from "../../../img/Vehicles/Three_wheeler.jpg";
 import Four_wheeler from "../../../img/Vehicles/Four_wheeler.jpg";
// import Heavy_vehicles from "../../../img/Vehicles/Heavy_vehicles.jpg";
// import Electric_vehicles from "../../../img/Vehicles/Electric_vehicles.jpg";
import bannerimg1 from "../../../img/Bannerimg1.jpeg";
import bannerimg2 from "../../../img/Bannerimg2.jpeg";
import bannerimg3 from "../../../img/Bannerimg3.jpeg";
import Goldimg from "../../../img/Gold/Gold.jpg";
import Silverimg from "../../../img/Gold/Silver.jpg";
import "../../../Components/UI/Grids/BlogGrid/BlogGrid.css";
import Data from './data'
//import ErrorBoundary from "../../../ErrorBoundary";

/**
 * @author
 * @function Vehicle
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
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


const Vehicle = (props) => {
  const sliderSettings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Carousel className="banner">
        <Carousel.Item interval={1000}>
          <Link to="/vehicle">
            <img
              className="d-block w-100 bannerimg"
              src={bannerimg1}
              alt="Vehicle Loan"
            />
          </Link>
          <Carousel.Caption className="direct_contact"></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Link to="/mortage">
            <img
              className="d-block w-100 bannerimg"
              src={bannerimg3}
              alt="Mortage Loan"
            />
          </Link>
          <Carousel.Caption className="direct_contact"></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/gold">
            <img
              className="d-block w-100 bannerimg"
              src={bannerimg2}
              alt="Gold Loan"
            />
          </Link>
          <Carousel.Caption className="direct_contact"></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Grid Section */}
      <section className="vehicle-section section-padding">
        <div className="heading1">
          <h2>Vehicle Loans</h2>
        </div>
        <Container>
          <Row>
            <Col>
          
              <div className="feature-grids clearfix">
            { Data.data.map((item,id)=>{
              return(
                <>
                <Link to={`/vehicle/${item.url}`}>
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
                    </>
                    )})}
                   
           </div>
           </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding testimonial-home-section Vehicle-section-2">
        <Container>
          <Row>
            <Col className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 ">
              <div className="testimonial-heading">
                <h2>What our Clients says about our Vehicle Loans!!</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-xs-12">
              <div className="testimonial-slider">
                <div className="testimonial-content-active text-center">
                  <Slider {...sliderSettings}>
                    <TestimonialGrid
                      imgSrc={anshulTest}
                      para='"Your customer service is very good and your team is also very helpful and friendly. I got my website ready as expected and according to my requirements without any problem. I definitely recommend others to get their services done by here only."'
                      name="Anshul Laddha"
                    />

                    <TestimonialGrid
                      imgSrc={devenTest}
                      para='"It has been a nice experience being with your agency. You helped me to earn some side money with little efforts only. I am very happy to be a part of this community. And I would like to continue my business in future also for better support."'
                      name="Devendra Singh"
                    />

                    <TestimonialGrid
                      imgSrc={nipunTest}
                      para='"Being a part of this team is an amazing and wonderfull experience where we all learn and earn together. All of our clients also have a wonderfull experience with us and highly recommend working with us or getting services from us. What are you waiting for?"'
                      name="Nipun Goyal"
                    />
                  </Slider>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
     
       {/* <section className="faq-section section-padding">
        <Container>
          <div className="faq-heading">
            <h2>Frequently Asked Questions!!</h2>
          </div>
          <Row>
            <Col lg={6}>
              <Accordion>
                <AccordionCard
                  title="1. How much money you can borrow?"
                  eventKey="0"
                  para="Loans can be applied by individuals and by co-applicants, partners in parternship firms adn directors in private linited companies can apply for a join loan. In case of individuals blood relatives can avail of a joint loan."
                />
                <AccordionCard
                  title="2. How can you apply?"
                  eventKey="1"
                  para="Loans can be applied by individuals and by co-applicants, partners in partnership firms and directors in private limited companies can apply for a join loan. In case of individuals blood relatives can avail of a joint loan."
                />
                <AccordionCard
                  title="3. Who can avail of a loan?"
                  eventKey="2"
                  para="Loans can be applied by individuals and by co-applicants, partners in parternship firms adn directors in private linited companies can apply for a join loan. In case of individuals blood relatives can avail of a joint loan."
                />
              </Accordion>
            </Col>
            <Col lg={6}>
              <Accordion>
                <AccordionCard
                  title="4. How to get more benefits from Yuwan Finance?"
                  eventKey="3"
                  para="Loans can be applied by individuals and by co-applicants, partners in parternship firms adn directors in private linited companies can apply for a join loan. In case of individuals blood relatives can avail of a joint loan."
                />
                <AccordionCard
                  title="5. What are the other services that we provide?"
                  eventKey="4"
                  para="Loans can be applied by individuals and by co-applicants, partners in parternship firms adn directors in private linited companies can apply for a join loan. In case of individuals blood relatives can avail of a joint loan."
                />
                <AccordionCard
                  title="6. How to contact in Yuwan Finance office?"
                  eventKey="5"
                  para="Loans can be applied by individuals and by co-applicants, partners in parternship firms adn directors in private linited companies can apply for a join loan. In case of individuals blood relatives can avail of a joint loan."
                />
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>  */}

      <section className="blog-section section-padding">
        <div className="top-section1-heading">
          <h2>Related Products for you</h2>
        </div>
        <Container>
          <Row>
            <Col>
              <div className="feature-grids clearfix">
                <Slider {...settings}>
                  <Link to="/threewheeler">
                    <ServiceGrids
                      imageclass="image"
                      image_imgclass="image__img"
                      contentclass="image__overlay"
                      nameclass="image__title"
                      descriptionclass="image__description"
                      img={Four_wheeler}
                      alt="Mortage Loan"
                      name="Mortage Loan"
                    />
                  </Link>
                  <Link to="/fourwheeler">
                    <ServiceGrids
                      imageclass="image"
                      image_imgclass="image__img"
                      contentclass="image__overlay"
                      nameclass="image__title"
                      descriptionclass="image__description"
                      img={Four_wheeler}
                      alt="Personal Loan"
                      name="Personal Loan"
                    />
                  </Link>
                  <Link to="/heavy">
                    <ServiceGrids
                      imageclass="image"
                      image_imgclass="image__img"
                      contentclass="image__overlay"
                      nameclass="image__title"
                      descriptionclass="image__description"
                      img={Goldimg}
                      alt="Gold Loan"
                      name="Gold Loan"
                    />
                  </Link>
                  <Link to="/elctric">
                    <ServiceGrids
                      imageclass="image"
                      image_imgclass="image__img"
                      contentclass="image__overlay"
                      nameclass="image__title"
                      descriptionclass="image__description"
                      img={Silverimg}
                      alt="Silver Loan"
                      name="Silver Loan"
                    />
                  </Link>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding"></section>
      </>
  );
};

export default Vehicle;
