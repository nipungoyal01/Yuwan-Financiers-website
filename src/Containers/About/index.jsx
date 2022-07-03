import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import ServiceGrids from '../../Components/UI/Grids/ServiceGrid/SerivceGrids'
import ServiceGrid from '../../Components/UI/Grids/ServiceGrid'
import SerGrid from '../../Components/UI/Grids/ServiceGrid/SerGrid'
import PageTitle from '../../Components/UI/PageTitle'
import Loansheader from '../../Components/UI/Loansheader'
import './About.css'
import aboutUs from '../../img/about.png'
import Director2 from '../../img/Director2.jpeg'
import whyUs from '../../img/why-choose-us-vec.png'
import HomeHeading from '../../Components/UI/Home/HomeHeadings'
import styled from 'styled-components'
import aboutus_img from '../../img/About-background.jpg'
import Gallery from '../../Components/UI/Gallery'

/**
* @author
* @function About
**/
 const Button=styled.button`
 opacity: 0.7;
 outline:0;
 transition:0.7s;
${({active}) =>
 active && `
 opacity:1;
 outline:0;
`}
`

const About = (props) => {
  const types = ['Key Management', 'Advisors', 'Board of Directors']
  const [active, setActive] = useState(types[0]);
  const[modalIsOpen,setModalIsOpen]=useState(false);
  return(
    <>
    <PageTitle/>
    <section className="feature-section section-padding">
    <div className="top-section1-heading">
    <h2>LEADERSHIP TEAM</h2>
    <p className="team-subtitle">The team at Yuwan Finance is a power-packed combination of intellectual depth,
      extensive experience and incisive knowledge. Our leaders are industry experts,
    who bring together thought leadership and experience, to design intelligent solutions.</p>
    <div className="change-content">
    {types.map(type =>(
      <Button active={active === type} onClick={()=> setActive(type)}>{type}</Button>))}
    </div>
    </div>
      <Container>
        <Row>
          <Col className="">
            <div className="feature-grids clearfix">
            {active===types[0] && 
            <>
            <SerGrid modalimg={Director2} closebuttonclass="close-button" Modalpara="modalpara" ParentModalclass="parent-modal-class" Modalclass="child-modal-class" Modalimgclass="Modal-img col-lg-5 col-md-4 col-4 col-sm-3" Modalcontentclass="Modal-content col-lg-7 col-md-8 col-8 col-sm-9" buttonclass="Modal-button" imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Director2} alt="Director of Yuwan Finance" name="Abhishek gupta" description="Director of Yuwan Finance" />
            <SerGrid modalimg={Director2} closebuttonclass="close-button" Modalpara="modalpara" ParentModalclass="parent-modal-class" Modalclass="child-modal-class" Modalimgclass="Modal-img col-lg-5 col-md-4 col-4 col-sm-3" Modalcontentclass="Modal-content col-lg-7 col-md-8 col-8 col-sm-9" buttonclass="Modal-button" imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Director2} alt="Director of Yuwan Finance" name="Abhishek gupta" description="Director of Yuwan Finance"/>
         </>
          }
            {active===types[1] && 
            <>
            <SerGrid modalimg={Director2} closebuttonclass="close-button" Modalpara="modalpara" ParentModalclass="parent-modal-class" Modalclass="child-modal-class" Modalimgclass="Modal-img col-lg-5 col-md-4 col-4 col-sm-3" Modalcontentclass="Modal-content col-lg-7 col-md-8 col-8 col-sm-9" buttonclass="Modal-button" imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Director2} alt="Director of Yuwan Finance" name="Abhishek gupta" description="Director of Yuwan Finance" />
            <SerGrid modalimg={Director2} closebuttonclass="close-button" Modalpara="modalpara" ParentModalclass="parent-modal-class" Modalclass="child-modal-class" Modalimgclass="Modal-img col-lg-5 col-md-4 col-4 col-sm-3" Modalcontentclass="Modal-content col-lg-7 col-md-8 col-8 col-sm-9" buttonclass="Modal-button" imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Director2} alt="Director of Yuwan Finance" name="Abhishek gupta" description="Director of Yuwan Finance"/>
            <SerGrid modalimg={Director2} closebuttonclass="close-button" Modalpara="modalpara" ParentModalclass="parent-modal-class" Modalclass="child-modal-class" Modalimgclass="Modal-img col-lg-5 col-md-4 col-4 col-sm-3" Modalcontentclass="Modal-content col-lg-7 col-md-8 col-8 col-sm-9" buttonclass="Modal-button" imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Director2} alt="Director of Yuwan Finance" name="Abhishek gupta" description="Director of Yuwan Finance"/>
            <SerGrid modalimg={Director2} closebuttonclass="close-button" Modalpara="modalpara" ParentModalclass="parent-modal-class" Modalclass="child-modal-class" Modalimgclass="Modal-img col-lg-5 col-md-4 col-4 col-sm-3" Modalcontentclass="Modal-content col-lg-7 col-md-8 col-8 col-sm-9" buttonclass="Modal-button" imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Director2} alt="Director of Yuwan Finance" name="Abhishek gupta" description="Director of Yuwan Finance"/>
         </>
          }
          {active===types[2] && 
            <>
            <SerGrid modalimg={Director2} closebuttonclass="close-button" Modalpara="modalpara" ParentModalclass="parent-modal-class" Modalclass="child-modal-class" Modalimgclass="Modal-img col-lg-5 col-md-4 col-4 col-sm-3" Modalcontentclass="Modal-content col-lg-7 col-md-8 col-8 col-sm-9" buttonclass="Modal-button" imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Director2} alt="Director of Yuwan Finance" name="Abhishek gupta" description="Director of Yuwan Finance" />
            <SerGrid modalimg={Director2} closebuttonclass="close-button" Modalpara="modalpara" ParentModalclass="parent-modal-class" Modalclass="child-modal-class" Modalimgclass="Modal-img col-lg-5 col-md-4 col-4 col-sm-3" Modalcontentclass="Modal-content col-lg-7 col-md-8 col-8 col-sm-9" buttonclass="Modal-button" imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Director2} alt="Director of Yuwan Finance" name="Abhishek gupta" description="Director of Yuwan Finance"/>
            <SerGrid modalimg={Director2} closebuttonclass="close-button" Modalpara="modalpara" ParentModalclass="parent-modal-class" Modalclass="child-modal-class" Modalimgclass="Modal-img col-lg-5 col-md-4 col-4 col-sm-3" Modalcontentclass="Modal-content col-lg-7 col-md-8 col-8 col-sm-9" buttonclass="Modal-button" imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Director2} alt="Director of Yuwan Finance" name="Abhishek gupta" description="Director of Yuwan Finance"/>
            <SerGrid modalimg={Director2} closebuttonclass="close-button" Modalpara="modalpara" ParentModalclass="parent-modal-class" Modalclass="child-modal-class" Modalimgclass="Modal-img col-lg-5 col-md-4 col-4 col-sm-3" Modalcontentclass="Modal-content col-lg-7 col-md-8 col-8 col-sm-9" buttonclass="Modal-button" imageclass="image" image_imgclass="image__img" contentclass="image__overlay" nameclass="image__title" descriptionclass="image__description" img={Director2} alt="Director of Yuwan Finance" name="Abhishek gupta" description="Director of Yuwan Finance"/>
         </>
          }
          
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="about-us-section section-padding">
    
      <Container>
        <Row>
          <Col lg={6} xs={12} className="col about-us-data">
            <HomeHeading class="about-us-heading" span="About us" h2="We embrace your dreams of financial growth." />
            <div className="about-details">
              <h5>Take an instant loan with Yuwan Finance and let your dreams come true!</h5>
              <p>Have you been thinking about buying something with someone else's money? If yes, then you have came to the right place. We Yuwan Financiers provides you instant and low fees procedre loan that can cover your all finances.</p>
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div className="img-holder" >
              <img src={aboutUs} alt="About Us" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="why-choose-us-section section-padding">
    
      <Container className="container2">
        <Row>
        
          <Col className="col">
          <HomeHeading className="why-us-heading" h2="Why Choose Us?" p="We not only provide you with different types of excellent services but we also provide you with an opportunity to earn extra side income with us." />
          <div className="why-us-grids">
              <ServiceGrid gridClass="grid" iconDiv="icon"  FontClass="fas fa-rocket" heading="Fast and Easy Process" para="Get loan instantly with easy procedure." />
              <ServiceGrid gridClass="grid" iconDiv="icon"  FontClass="fas fa-gem" heading="Low fees procedure" para="We make sure that our client gets best and affordable services." />
              <ServiceGrid gridClass="grid" iconDiv="icon"  FontClass="far fa-file-alt" heading="Easy EMI" para="Pay all your EMI with ease." />
            </div>
          </Col>
          <Col className="col img-container" lg={6} md={12} xs={12}>
            <div className="img-holder"  >
              <img src={whyUs} alt="Why Choose Us" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>


    <section className="Gallery-section section-padding">   
      <Container>
        <Row>
          <Col className="col">
          <div className="Gallery-heading">
          <h2>Image Gallery</h2>
          </div>
          <Gallery img1={Director2} img2={Director2} img3={Director2} img4={Director2} img5={Director2} img6={Director2} modalimg={Director2} 
          closebuttonclass="close-button" Modalclass="child-modal-class" Modalimgclass="Modal-img2 col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-12" />
          </Col>
        </Row>
      </Container>
    </section>
    </>
   )
  }


export default About