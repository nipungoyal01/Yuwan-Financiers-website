import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'
// import { useSelector, useDispatch } from 'react-redux'
// import { newsletter } from '../../actions/newsletter.action'
//import {toastr} from 'react-redux-toastr'
//import logo from '../../img/Logo.jpg'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
    // 2-D Array for Footer Icons having links and icon names
    const FooterIconListItems = [
        ["https://instagram.com/the_miracle_solutions", "fa-facebook-f"], ["https://instagram.com/the_miracle_solutions", "fa-twitter"],
        ["https://instagram.com/the_miracle_solutions", "fa-instagram"], ["https://instagram.com/the_miracle_solutions", "fa-linkedin-in"]
    ]

    // 2-D Array for Footer Company List having links and Respective Name
    const FooterCompanyList = [
        ["/about", "About us"], ["/team", "Directors"], ["/conference", " Conferences"], ["/contact", "Contact us"]
    ]

    // 2-D Array for Footer Company List 2 having links and Respective Name
    const FooterCompanyList2 = [
        ["/insurance", "Insurance"], ["/emicalculator", "EMI Calculator"], ["/policy", "Privacy Policy"], ["/testimonial", "Testimonials"], ["/faq", "FAQ"]
    ]

    // 2-D Array for Footer Service List  having links and Service Name
    const FooterServiceList = [
        ["/vehicle", "Vehicle Loan"], ["/mortage", "Mortage Loan"], ["/gold", "Gold Loan"], ["/personal", "Personal Loan"] 
    ]

    //  Function To Render Icon List
    const renderIconListItems = () => {
        return (  FooterIconListItems.map((val, index) => { return <li key={index}> <a href={val[0]} target="_blank" rel="noopener noreferrer"> <i className={`fab ${val[1]}`} aria-hidden="true"></i> </a> </li> }) )
    }

    // Function To Render Company List
    const renderCompanyList = () => {
        return ( FooterCompanyList.map((val, index) => { return ( <li key={index}> <Link to={val[0]}> {val[1]} </Link> </li> ) }) )
    }

    // Function To Render Company List 2
    const renderCompanyList2 = () => {
        return ( FooterCompanyList2.map((val, index) => { return ( <li key={index}> <Link to={val[0]}> {val[1]} </Link> </li> ) }) )
    }

    // Function To Render Service List 
    const renderServiceList = () => {
        return ( FooterServiceList.map((val, index) => { return ( <li key={index}> <a href={val[0]} target="_blank" rel="noopener noreferrer"> {val[1]} </a> </li> ) }) )
    }

    // const [email, setEmail] = useState('')
    // const news = useSelector(state => state.news)

    // const dispatch = useDispatch();

    // const onNewsSubmit = (e) => {
    //     e.preventDefault();
    //     setEmail('');
    //     dispatch(newsletter({email}));
    // }

    // useEffect(() => {
    //     if(news.loading) {
    //         toastr.info("Loading...");
    //         toastr.loading = "";
    //     }
    //     if(news.message) {
    //         toastr.success("Success", news.message);
    //         news.message = "";
    //     } else if(news.error) {
    //         toastr.warning("Oops", news.error);
    //         news.error = "";
    //     }
    // }, [news, news.message, news.error, news.loading])

    return (
        <>
            <footer fixed="bottom" className="site-footer">
                <div className="upper-footer">
                    <Container>
                        <Row>
                          
                            <Col lg={3} sm={6} xs={12}>
                                <div className="widget footer-company-section">
                                    <h3 className="widget-title">Company</h3>
                                    <ul>
                                        {renderCompanyList()}
                                    </ul>
                                </div>
                            </Col>
                            
                            <Col lg={3} sm={6} xs={12}>
                                <div className="widget footer-service-section">
                                    <h3 className="widget-title">Loans</h3>
                                    <ul>
                                      {renderServiceList()}
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                            <div className="widget footer-company-section">
                            <h3 className="widget-title">Extras</h3>
                            <ul>
                                {renderCompanyList2()}
                            </ul>
                        </div>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                <div className="widget footer-newsletter-section">
                                    <h3 className="widget-title">Newsletter</h3>
                                    <p>
                                        You will be notified about the current News and Events in the company.
                                    </p>
                                    <form> {/*onsubmit={onNewsSubmit} */}
                                        <div className="newsletter-input-div">
                                            <input type="email" className="form-control newsletter-input" placeholder="Email Address *"  /> {/*value={email} onChange={e => setEmail(e.target.value)} required*/}
                                            <button type="submit">
                                                <i className="far fa-envelope"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="lower-footer">
                    <Container>
                        <Row>
                            <div className="seperator"></div>
                            <Col xs={12}>
                                <p className="copyright">
                                    Copyright © 2021 <span style={{color:"#FC6E36"}}>Yuwan Financiers Private Limited </span> All rights reserved.
                               </p>
                                <div className="extra-links">
                                    <ul>
                                        <li>{renderIconListItems()}</li>
                                        {/* <li><Link to="/faq">FAQ</Link></li> */}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}


export default Footer