import React from 'react'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
/**
* @author
* @function AccordionCards
**/

const AccordionCards = (props) => {
    return (
        <>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={props.eventKey}>
                    {props.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={props.eventKey}>
                    <Card.Body>{props.para}<br></br>{props.para1}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </>
    )
}


export default AccordionCards