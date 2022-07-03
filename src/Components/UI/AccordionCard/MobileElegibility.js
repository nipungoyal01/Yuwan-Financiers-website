import React from 'react'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import '../Elegibility/Elegibility.css'
/**
* @author
* @function MobileElegibility
**/

const MobileElegibility = (props) => {
    return (
        <>
            <Card>
                <Accordion.Button as={Card.Header} eventKey={props.eventKey}>
                    {props.title}
                </Accordion.Button>
                <Accordion.Collapse eventKey={props.eventKey}>
                    <Card.Body>
                    <div className="Elegibility-content">
      <div className="card-body">
        <div className="Elegibility-inner-content">
          <h3>{props.ElegibilityHeading}</h3>
          <h4>{props.ElegibilitysubHeading}</h4>
          <p>{props.para1}</p>
          <h3 className="Heading-padding">{props.ElegibilityHeading1}</h3>
            <div className="table-responsive mt-3 mb-3">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td className="th border-white wd30">Criteria</td>
                    <td className="th">Requirement</td>
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>
                    {props.ElegibilityRequirement1}
                    </td>
                  </tr>
                  <tr>
                    <td>Experience</td>
                    <td>
                    {props.ElegibilityRequirement2}
                    </td>
                  </tr>
                  <tr>
                    <td>Income</td>
                    <td>
                    {props.ElegibilityRequirement3}
                    </td>
                  </tr>
                  <tr>
                    <td>Employer Category</td>
                    <td>
                    {props.ElegibilityRequirement4}
                    </td>
                  </tr>
                  <tr>
                    <td>Citizenship</td>
                    <td>
                    {props.ElegibilityRequirement5}
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>

          <h3 className="Heading-padding">{props.DocumentHeading1}</h3>
            <div className="table-responsive mt-3 mb-3">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td className="th border-white wd30">Documents</td>
                    <td className="th">Requirement</td>
                  </tr>
                  <tr>
                    <td>KYC Documents</td>
                    <td>
                    {props.DocumentRequirement1}
                    </td>
                  </tr>
                  <tr>
                    <td>Current Address Proof</td>
                    <td>
                    {props.DocumentRequirement2}
                    </td>
                  </tr>
                  <tr>
                    <td>Income Documents Latest Month Salary Slip.</td>
                    <td>
                    {props.DocumentRequirement3}
                    </td>
                  </tr>
                  <tr>
                    <td>Bank Account Statement</td>
                    <td>
                    {props.DocumentRequirement4}
                    </td>
                  </tr>
                  <tr>
                    <td>Employment and Qualification Proof</td>
                    <td>
                    {props.DocumentRequirement5}
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </>
    )
}


export default MobileElegibility