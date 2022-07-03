import React from 'react'
import PageTitle from '../../Components/UI/PageTitle'
import { Container, Card } from 'react-bootstrap'
import './policy.css'

/**
* @author
* @function Policy
**/

const Policy = (props) => {
    return (
        <>
            <PageTitle title="Privacy & Policy" para="This Page Contains The Privacy & Policy Information Regarding Our Website. Please Read All Of It Carefully." />
            <section className="policy-section section-padding">
                <Container>
                <Card>
                    <Card.Body>
                        <div className="h1 card-title">Privacy & Cookies Policy</div>
                        <Card.Text>
                            <p className="h2">Privacy Policy for Yuwan Financiers</p>

                              </Card.Text>
                    </Card.Body>
                </Card>
                </Container>
            </section>
        </>
    )
}


export default Policy