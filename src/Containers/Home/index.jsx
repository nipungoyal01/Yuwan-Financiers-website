// Basic Imports
import React, { useState } from 'react'
import { Row, Col, Container, Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import bannerimg1 from "../../img/Bannerimg1.jpeg"
import bannerimg2 from "../../img/Bannerimg2.jpeg"
import bannerimg3 from "../../img/Bannerimg3.jpeg"

import ContactImg from "../../img/ContactImg.jpg"

// Components Import
import HomeHeading from '../../Components/UI/Home/HomeHeadings'
import ServiceGrid from '../../Components/UI/Grids/ServiceGrid'
import TestimonialGrid from '../../Components/UI/Grids/TestimonialGrid';

// Css Import
import './Home.css'

// Images Import
// import vidImg from '../../img/video-img.jpg'
//import vidImg from '../../img/customer_service.svg'
// import port1 from '../../img/img-1.jpg'
// import port2 from '../../img/img-2.jpg'
// import port3 from '../../img/img-3.webp'
// import port4 from '../../img/img-4.jpg'
// import port5 from '../../img/img-5.jpg'
// import port6 from '../../img/img-6.webp'
// import test1 from '../../img/f1.webp'
import anshulTest from '../../img/anshul.jpg'
import devenTest from '../../img/deven.png'
import nipunTest from '../../img/nipun.png'
// import test2 from '../../img/f2.webp'
// import heroVec from '../../img/10140.jpg'
// import heroVec from '../../img/hero.png'

/**
* @author
* @function Home
**/
// const FooterIconListItems = [
//   ["https://instagram.com/the_miracle_solutions", "fa-facebook-f"], ["https://instagram.com/the_miracle_solutions", "fa-twitter"],
//   ["https://instagram.com/the_miracle_solutions", "fa-instagram"], ["https://instagram.com/the_miracle_solutions", "fa-linkedin-in"]
// ]
// const renderIconListItems = () => {
//   return (  FooterIconListItems.map((val, index) => { return <li key={index}> <a href={val[0]} target="_blank" rel="noopener noreferrer"> <i className={`fab ${val[1]}`} aria-hidden="true"></i> </a> </li> }) )
// }
const Home = (props) => {

  const [isOpen, setOpen] = useState(false)
  const sliderSettings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,   
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <>
      <div className="Home-div">
                <Carousel className="banner">
  <Carousel.Item interval={1000}>
  <Link to="/vehicle">
  <img
  className="d-block w-100 bannerimg"
  src={bannerimg1}
  alt="Vehicle Loan "
  />
  </Link>  
  <Carousel.Caption className="direct_contact">

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <Link to="/mortage">
  <img
      className="d-block w-100 bannerimg"
      src={bannerimg3}
      alt="Third slide"
    />
  </Link>
  <Carousel.Caption className="direct_contact">

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Link to="/gold">
  <img
  className="d-block w-100 bannerimg"
  src={bannerimg2}
  alt="Gold Loan"
  />
  </Link>
  <Carousel.Caption className="direct_contact">

      </Carousel.Caption>
  </Carousel.Item>
</Carousel>


        

        {/* About Us Section */}
       
        <section className="section-padding about-us-home-section home-section-1">
            <Container className="sec">
            <div className="heading1">
            <h2>Loans</h2>
            </div>
           
                <Col lg={12} sm={12}>
                <div className="feature-grids clearfix">
               <Link to="/vehicle"><ServiceGrid gridClass="grid" FontClass="fas fa-motorcycle font-icon vehicle" className="veh" heading="Vehicle Loan" para="The easier path into auto finance."/></Link> 
               <Link to="/mortage"><ServiceGrid gridClass="grid" FontClass="fas fa-landmark font-icon mortage" heading="Mortage Loan" para="Handling tough but important Financial Tasks" /></Link>
               <Link to="/gold"><ServiceGrid gridClass="grid" FontClass="fas fa-coins font-icon gold" heading="Gold Loan" para="Double your pleasure, Double your Gold" /></Link>
               <Link to="/personal"><ServiceGrid gridClass="grid" FontClass="fas fa-users font-icon personal" heading="Personal Loan" para="A better way of financial freedom" /></Link>
               </div>
                </Col>
           
            </Container>
            </section>  

        <section className="section-padding about-us-home-section home-section-1">
            <Container className="sec">
              <Row>
                <Col className="section1text">
                  <HomeHeading class="home-section-1-heading" h2="We embrace your dreams of financial growth." />
                  <div className="home-section-1-details">
                    <h5>
                    If there’s a corner, we’re around it.
                    </h5>
                    <p>
                    You are about to invest your money, time and energy. We Yuwan Financiers don't want to waste your efforts. It is an all in one place for all your Finance. Our objective is to make finance available at a reasonable cost & deliver in a transparent manner.
                    </p>
                    <Link to="/about" className="btn-theme about-btn">More About Us</Link>
                  </div>
                </Col>
              </Row>
            </Container>
            </section>  

        {/* Video CTA section */}
        <section className="video-cta-area">
          <Container>
          <div className="heading1">
            <h2>Contact us</h2>
            </div>
            <Row>
              <Col className="col-xs-12">
                <div className="video-img-holder img-holder">
                  <img src={ContactImg} alt="video vector" />
                  <div className="video-btn">
                    <div>
                  
                    </div>
                    <button onClick={() => setOpen(true)} className="wrap">
                      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjk0Ljg0MyAyOTQuODQzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOTQuODQzIDI5NC44NDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0yNzguNTI3LDc5Ljk0NmMtMTAuMzI0LTIwLjAyMy0yNS4zOC0zNy43MDQtNDMuNTM4LTUxLjEzMmMtMi42NjUtMS45Ny02LjQyMS0xLjQwNy04LjM5MiwxLjI1N3MtMS40MDcsNi40MjEsMS4yNTcsOC4zOTINCgkJYzE2LjY4NywxMi4zNCwzMC41MjEsMjguNTg2LDQwLjAwOCw0Ni45ODNjOS45NCwxOS4yNzcsMTQuOTgsNDAuMTI4LDE0Ljk4LDYxLjk3NmMwLDc0LjY3MS02MC43NSwxMzUuNDIxLTEzNS40MjEsMTM1LjQyMQ0KCQlTMTIsMjIyLjA5MywxMiwxNDcuNDIxUzcyLjc1LDEyLDE0Ny40MjEsMTJjMy4zMTMsMCw2LTIuNjg3LDYtNnMtMi42ODctNi02LTZDNjYuMTMzLDAsMCw2Ni4xMzMsMCwxNDcuNDIxDQoJCXM2Ni4xMzMsMTQ3LjQyMSwxNDcuNDIxLDE0Ny40MjFzMTQ3LjQyMS02Ni4xMzMsMTQ3LjQyMS0xNDcuNDIxQzI5NC44NDIsMTIzLjk3NywyODkuMjAxLDEwMC42NDUsMjc4LjUyNyw3OS45NDZ6Ii8+DQoJPHBhdGggZD0iTTEwOS42OTksNzguOTY5Yy0xLjg3NiwxLjA2Ny0zLjAzNSwzLjA1OS0zLjAzNSw1LjIxNnYxMzEuNjc0YzAsMy4zMTQsMi42ODcsNiw2LDZzNi0yLjY4Niw2LTZWOTQuNzRsODguODMzLDUyLjg4Mw0KCQlsLTY1LjMyNCw0Mi4wODdjLTIuNzg1LDEuNzk1LTMuNTg5LDUuNTA4LTEuNzk0LDguMjkzYzEuNzk2LDIuNzg2LDUuNTA4LDMuNTksOC4yOTQsMS43OTRsNzMuNDY1LTQ3LjMzMw0KCQljMS43NDYtMS4xMjUsMi43ODYtMy4wNzMsMi43NDktNS4xNWMtMC4wMzctMi4wNzctMS4xNDUtMy45ODctMi45My01LjA1TDExNS43MzMsNzkuMDI5DQoJCUMxMTMuODc3LDc3LjkyNiwxMTEuNTc1LDc3LjkwMiwxMDkuNjk5LDc4Ljk2OXoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" alt="Play Button" />
                    </button>
                  </div>
                </div>
                <div className="content">
                  <h2>
                    Have A Query? Feel Free To Contact With Us!
                  </h2>
                  <p>We are available here 24*7 for you to reach out to us incase you have any queries or any doubts you have regading our services or our website. We'll resolve all of your queries.</p>
                  <Link className="btn-theme" to="/contact">Contact With Us</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Testimonial Section */}
        <section className="section-padding testimonial-home-section home-section-5">
            <Container>
              <Row>
                <Col className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 ">
                <div className="testimonial-heading">
                <h2>What our Clients says about us!!</h2>
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
      </div>
    </>
  )
}


export default Home