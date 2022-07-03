import React, { useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
//import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import TestimonialGrid from "../../../../Components/UI/Grids/TestimonialGrid";
import anshulTest from "../../../../img/anshul.jpg";
import devenTest from "../../../../img/deven.png";
import nipunTest from "../../../../img/nipun.png";
//import AccordionCard from "../../../../Components/UI/AccordionCard";
import bannerimg1 from "../../../../img/Bannerimg1.jpeg";
import bannerimg2 from "../../../../img/Bannerimg2.jpeg";
import bannerimg3 from "../../../../img/Bannerimg3.jpeg";
import "../Vehicle.css";
import "./TwoWheeler.css";
import "../../../About/About.css";
import styled from "styled-components";

// import MobileOverview from '../../../../Components/UI/AccordionCard/MobileOverview'
// import MobileFeatureandBenefits from "../../../../Components/UI/AccordionCard/MobileFeatureandBenefits";
// import MobileElegibility from "../../../../Components/UI/AccordionCard/MobileElegibility";
// import MobileCharges from "../../../../Components/UI/AccordionCard/MobileCharges";

import OverviewContent from "../../../../Components/UI/OverviewContent";
//import FeatureandBenefits from "../../../../Components/UI/FeatureandBenefits";
import Elegibility from "../../../../Components/UI/Elegibility";
//import Charges from "../../../../Components/UI/Charges";
import Goldimg from '../../../../img/Gold/Gold.jpg'
import Silverimg from '../../../../img/Gold/Silver.jpg'
import ServiceGrids from '../../../../Components/UI/Grids/ServiceGrid/ServiceGrids'
import Three_wheeler from '../../../../img/Vehicles/Three_wheeler.jpg'
import Four_wheeler from '../../../../img/Vehicles/Four_wheeler.jpg'
import Heavy_vehicles from '../../../../img/Vehicles/Heavy_vehicles.jpg'
import Electric_vehicles from '../../../../img/Vehicles/Electric_vehicles.jpg'
import '../../../../Components/UI/Grids/BlogGrid/BlogGrid.css'
// import TwoWheelerdata from './TwoWheelerdata'
/**
 * @author
 * @function TwoWheeler
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

const Button = styled.button`
  opacity: 0.7;
  outline: 0;
  transition: 0.7s;
  ${({ active }) =>
    active &&
    `
 opacity:1;
 outline:0;
`}
`;

const TwoWheeler = (props) => {
  const sliderSettings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const types = [
    "Overview",
    "Feature & Benefits",
    "Eligibility & Documents",
    "Interest Rate & Charges",
  ];
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <Carousel className="banner">
        <Carousel.Item interval={1000}>
          <Link to="/vehicle">
            <img
              className="d-block w-100 bannerimg"
              src={bannerimg1}
              alt="Vehicle Loan "
            />
          </Link>
          <Carousel.Caption className="direct_contact"></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Link to="/mortage">
            <img
              className="d-block w-100 bannerimg"
              src={bannerimg3}
              alt="Third slide"
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

      {/* For Mobile Devices */}
      {/* <div className="displayornot1">
      <Accordion defaultActiveKey="0">
      <section className="feature-section section-padding">
      <div className="top-section1-heading">
      <div className="heading1">
      <h2>Two Wheeler Loan</h2>
      </div>
      </div>
      
      <Container>
      <Row>
      <Col className="">
        <div className="feature-grids clearfix">
      {TwoWheelerdata.Overviewdata.map((item,id)=>{
              return(
                <>
              <MobileOverview
              key={id}
      title={item.title}
      eventKey={item.eventKey}
      OverviewHeading={item.OverviewHeading}
      OverViewsubHeading={item.OverViewsubHeading}
      para1={item.para1}
      para2={item.para2}
      OverviewHeading1={item.OverviewHeading1}
      Bulletp1={item.Bulletp1}
      Bulletp2={item.Bulletp2}
      Bulletp3={item.Bulletp3}
      Bulletp4={item.Bulletp4}
      Bulletp5={item.Bulletp5}
      Bulletp6={item.Bulletp6}
      Bulletp7={item.Bulletp7}
      Bulletp8={item.Bulletp8}
      />
       </>
              )
           }
              )};
  {TwoWheelerdata.Overviewdata.map((item,id)=>{
              return(
      <MobileFeatureandBenefits
      key={id}
      title={item.title}
      eventKey={item.eventKey}
      OverviewHeading={item.OverviewHeading}
      OverViewsubHeading={item.OverViewsubHeading}
      para1={item.para1}
      para2={item.para2}
      OverviewHeading1={item.OverviewHeading1}
      Bulletp1={item.Bulletp1}
      Bulletp2={item.Bulletp2}
      Bulletp3={item.Bulletp3}
      Bulletp4={item.Bulletp4}
      Bulletp5={item.Bulletp5}
      Bulletp6={item.Bulletp6}
      Bulletp7={item.Bulletp7}
      Bulletp8={item.Bulletp8}
    />
    )
  }
     )};
      {TwoWheelerdata.Overviewdata.map((item,id)=>{
              return(
    <MobileElegibility
    title={item.title}
    eventKey={item.eventKey}
    ElegibilityHeading={item.ElegibilityHeading}
    ElegibilitysubHeading={item.ElegibilitysubHeading}
    para1={item.para1}
    ElegibilityHeading1={item.ElegibilityHeading1}
    ElegibilityRequirement1={item.ElegibilityRequirement1}
    ElegibilityRequirement2={item.ElegibilityRequirement2} 
    ElegibilityRequirement3={item.ElegibilityRequirement3}
    ElegibilityRequirement4={item.ElegibilityRequirement4}
    ElegibilityRequirement5={item.ElegibilityRequirement5}
    DocumentHeading1={item.DocumentHeading1}
    DocumentRequirement1={item.DocumentRequirement1}
    DocumentRequirement2={item.DocumentRequirement2}
    DocumentRequirement3={item.DocumentRequirement3}
    DocumentRequirement4={item.DocumentRequirement4}
    DocumentRequirement5={item.DocumentRequirement5}           
                    />
                    )
  }
     )};
      {TwoWheelerdata.Overviewdata.map((item,id)=>{
              return(
                     <MobileCharges 
                     key={id}
                  title={item.title}
                  eventKey={item.eventKey}
                 ChargesHeading={item.ChargesHeading}
                 ChargesubHeading={item.ChargesubHeading}
                 />        
                 )
                }
                   )};
                 
                 </div>
                 </Col>
                 </Row>
                 </Container>
                 </section>
                 </Accordion>
                 </div> */}
                 
                 {/* For Mobile Devices */}
                 <div className="displayornot">
                 <section className="feature-section section-padding">
                 <div className="top-section1-heading">
                 <div className="heading1">
                 <h2>Two Wheeler Loan</h2>
                 </div>
                 <div className="change-content">
                 {types.map((type) => (
              <Button active={active === type} onClick={() => setActive(type)}>
                {type}
              </Button>
            ))}
          </div>
        </div>
        <Container>
          <Row>
            <Col className="">
              <div className="feature-grids clearfix">
                {active === types[0] &&( 
                  <>
                    <OverviewContent
                     title="Overview"
                     eventKey="1"
                     OverviewHeading="Yuwan Finance Two Wheeler Loan Details"
                     OverViewsubHeading="Know all about Two Wheeler Loan offerings"
                     para1="Grab every opportunity to boost your professional practice without any delay with our Unsecured Professional Loans. This loan offering is designed to custom-fit the unique financial objectives of working professionals like Chartered Accountants, Company Secretaries and  Doctors. So, whether your professional plans are to expand office, scale up operations, meet working capital requirements or achieve a set goal, our Professional Loans help you not just grow but also flourish your practice with a cost-effective financial solution."
                     para2="Yuwan Finance partners you in your growth with quick and easy access to funds at the right time without the worries of providing any collateral or security. So now with your financial needs sorted, you can focus on your practice."
                                   OverviewHeading1="Why choose Yuwan Finance Two Wheeler Loan?"
                                   Bulletp1="Higher professional loan amount of up to ₹30 Lakhs"
                                   Bulletp2="Unsecured professional loans against no security"
                                   Bulletp3="Flexibility to repay up to 60 months"
                                   Bulletp4="Competitive professional loan interest rates"
                                   Bulletp5="Zero pre-payment or foreclosure charges"
                                   Bulletp6="Quick approvals and easy online application"
                                   Bulletp7="Simple and minimal documentation process"
                                   Bulletp8="Complete transparency with no hidden costs"
                    />
                  </>
                    )}
                 {active === types[1] &&( 
                  <>
                    <OverviewContent
                     title="Overview"
                     eventKey="1"
                     OverviewHeading="Yuwan Finance Two Wheeler Loan Details"
                     OverViewsubHeading="Know all about Two Wheeler Loan offerings"
                     para1="Grab every opportunity to boost your professional practice without any delay with our Unsecured Professional Loans. This loan offering is designed to custom-fit the unique financial objectives of working professionals like Chartered Accountants, Company Secretaries and  Doctors. So, whether your professional plans are to expand office, scale up operations, meet working capital requirements or achieve a set goal, our Professional Loans help you not just grow but also flourish your practice with a cost-effective financial solution."
                     para2="Yuwan Finance partners you in your growth with quick and easy access to funds at the right time without the worries of providing any collateral or security. So now with your financial needs sorted, you can focus on your practice."
                                   OverviewHeading1="Why choose Yuwan Finance Two Wheeler Loan?"
                                   Bulletp1="Higher professional loan amount of up to ₹30 Lakhs"
                                   Bulletp2="Unsecured professional loans against no security"
                                   Bulletp3="Flexibility to repay up to 60 months"
                                   Bulletp4="Competitive professional loan interest rates"
                                   Bulletp5="Zero pre-payment or foreclosure charges"
                                   
                                   Bulletp6="Quick approvals and easy online application"
                                   Bulletp7="Simple and minimal documentation process"
                                   Bulletp8="Complete transparency with no hidden costs"
                    />
                        {/* <FeatureandBenefits
                      key={id}
                      FeatureHeading={item.FeatureHeading}
                      FeaturesubHeading={item.FeaturesubHeading}
                      para1={item.para1}
                      para2={item.para2}
                      Bulletp1={item.Bulletp1}
                      Bulletp2={item.Bulletp2}
                      Bulletp3={item.Bulletp3}
                      Bulletp4={item.Bulletp4}
                      Bulletp5={item.Bulletp5}
                      Bulletp6={item.Bulletp6}
                      Bulletp7={item.Bulletp7}
                      Bulletp8={item.Bulletp8}
                      /> 
                    </>
                      )}))}
                    */}
                  </>
                )}
                {active === types[2] &&(
                  <>
                    <Elegibility
                    title="Elegibility & Critertia"
                            eventKey="3"
                            ElegibilityHeading="Two Wheeler Loan Eligibility & Documents"
                            ElegibilitysubHeading="Know the essentials before applying for a loan"
                            para1="We offer a flexible and quick Personal Loan to help every individual meet their financial needs. Check your eligibility and list of required documents below."
                            ElegibilityHeading1="Know your Eligibility Criteria"
                            ElegibilityRequirement1="Age Should be minimum 22 years at the time of loan application and maximum 58 years at the time of loan maturity." 
                        ElegibilityRequirement2="Total experience of minimum 1 year with 2 months’ stability with your current employer."
                            ElegibilityRequirement3="Minimum net monthly salary earning of 20,000 is required."
                            ElegibilityRequirement4="Applicant must be FULL TIME employed with LLP / Private Limited / Public Limited Company"
                            ElegibilityRequirement5="Only individuals with Indian Citizenship can apply for this loan." 
                            DocumentHeading1="Documents Required For Two Wheeler Loan"
                            DocumentRequirement1="PAN Card / Aadhaar Card."
                            DocumentRequirement2="Electricity Bill / Rent Agreement / Passport."
                            DocumentRequirement3="Latest Month Salary Slip."
                            DocumentRequirement4="Original PDF Salary Credit Statement for latest 3 months."
                            DocumentRequirement5="Degree Certificate – For Professionals (CA/CS/Doctor)."
                    />
                  </>
                )}
                {active === types[3] && (
                  <>
                    <Elegibility
                    title="Elegibility & Critertia"
                            eventKey="3"
                            ElegibilityHeading="Two Wheeler Loan Eligibility & Documents"
                            ElegibilitysubHeading="Know the essentials before applying for a loan"
                            para1="We offer a flexible and quick Personal Loan to help every individual meet their financial needs. Check your eligibility and list of required documents below."
                            ElegibilityHeading1="Know your Eligibility Criteria"
                            ElegibilityRequirement1="Age Should be minimum 22 years at the time of loan application and maximum 58 years at the time of loan maturity." 
                        ElegibilityRequirement2="Total experience of minimum 1 year with 2 months’ stability with your current employer."
                            ElegibilityRequirement3="Minimum net monthly salary earning of 20,000 is required."
                            ElegibilityRequirement4="Applicant must be FULL TIME employed with LLP / Private Limited / Public Limited Company"
                            ElegibilityRequirement5="Only individuals with Indian Citizenship can apply for this loan." 
                            DocumentHeading1="Documents Required For Two Wheeler Loan"
                            DocumentRequirement1="PAN Card / Aadhaar Card."
                            DocumentRequirement2="Electricity Bill / Rent Agreement / Passport."
                            DocumentRequirement3="Latest Month Salary Slip."
                            DocumentRequirement4="Original PDF Salary Credit Statement for latest 3 months."
                            DocumentRequirement5="Degree Certificate – For Professionals (CA/CS/Doctor)."
                    />
                 {/* <Charges 
                 key={id}
                 ChargesHeading={item.ChargesHeading}
                 ChargesubHeading={item.ChargesubHeading}
                 /> */}
                  </>
                  )}
              </div>
            </Col>
          </Row>
        </Container>
        </section>
        </div>

      {/* Testimonial Section */}
      <section className="section-padding testimonial-home-section Vehicle-section-2">
        <Container>
          <Row>
            <Col className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 ">
              <div className="testimonial-heading">
                <h2>What our Clients says about our Two wheeler Loans!!</h2>
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
      <h2>Explore Types of Vehicle Loans</h2>
      </div>
        <Container>
          <Row>
            <Col>
              <div className="feature-grids clearfix">
          <Slider {...settings}>
          <Link to="/threewheeler"><ServiceGrids imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Three_wheeler} alt="Three Wheeler" name="Three Wheeler"/></Link> 
          <Link to="/fourwheeler"><ServiceGrids imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Four_wheeler} alt="Four Wheeler" name="Four Wheeler"/></Link> 
          <Link to="/heavy"><ServiceGrids imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Heavy_vehicles} alt="Heavy Vehicles" name="Heavy Vehicles"/></Link> 
          <Link to="/elctric"><ServiceGrids imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Electric_vehicles} alt="Electric Vehicles" name="Electric Vehicles"/></Link> 
          </Slider>
          
          </div>
          </Col>
        </Row>
      </Container>
    </section>   

      <section className="blog-section section-padding">
      <div className="top-section1-heading">
      <h2>Related Products for you</h2>
      </div>
        <Container>
          <Row>
            <Col>
              <div className="feature-grids clearfix">
          <Slider {...settings}>
          <Link to="/threewheeler"><ServiceGrids imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Four_wheeler} alt="Mortage Loan" name="Mortage Loan"/></Link> 
          <Link to="/fourwheeler"><ServiceGrids imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Four_wheeler} alt="Personal Loan" name="Personal Loan"/></Link> 
          <Link to="/heavy"><ServiceGrids imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Goldimg} alt="Gold Loan" name="Gold Loan"/></Link> 
          <Link to="/elctric"><ServiceGrids imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Silverimg} alt="Silver Loan" name="Silver Loan"/></Link> 
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

export default TwoWheeler;
