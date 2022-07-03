import React from 'react'
import  Accordion from 'react-bootstrap/Accordion'

/**
* @author
* @function AccordionCard
**/

const AccordionCard = (props) => {
    return (
        <>
                  <Accordion>
      <Accordion.Item eventKey={props.eventKey}>
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>
        {props.para}
        </Accordion.Body>
      </Accordion.Item>
   </Accordion>         
        </>
    )
}

export default AccordionCard