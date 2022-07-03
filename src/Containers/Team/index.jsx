import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageTitle from '../../Components/UI/PageTitle'
import './Team.css'
import HomeHeading from '../../Components/UI/Home/HomeHeadings'
// import img1 from '../../img/img-team.jpg'
// import TeamGrid from '../../Components/UI/Grids/TeamGrid'
// import team1 from '../../img/lakshay.webp'
// import team2 from '../../img/uma.webp'
// import team3 from '../../img/nipun2.jpg'

/**
* @author
* @function Team
**/

const Team = (props) => {
    return (
        <>
           <PageTitle title="Team" para="This is where you'll learn about our team members and their positions." />
           <section className="section-padding team-section">
           <Container>
                <Row>
                    <Col className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                        <HomeHeading class="team-section-heading clearfix" span="Our Team" h2="Meet our professional team members" p="These are the people behind all this hard work." />
                    </Col>
                </Row>
               
            </Container>
           </section>
        </>
    )
}


export default Team