import React from "react";
import { Accordion } from "react-bootstrap";
import AccordionCards from "../AccordionCard/AccordionCards";
import "../../../Containers/Loans/Vehicle/Vehicle.css";
import "../FeatureandBenefits/FeatureandBenefits.css";

function Charges(props) {
  return (
    <>
      <div className="feature-content">
        <div className="card-body">
          <div className="feature-inner-content">
            <h3>{props.ChargesHeading}</h3>
            <h4>{props.ChargesubHeading}</h4>
            <p>{props.para1}</p>
            <h3 className="Heading-padding">{props.ChargesHeading1}</h3>
            <div className="feature-Bullet-content pt-4">
              <div className="row">
                <div className="feature-Bullet-points offset-lg-1 col-lg-5">
                  <Accordion>
                    <AccordionCards
                      title="Interest rate"
                      eventKey="0"
                      para="With our Two wheeler Loan, you can get ready to fulfil every need with one of the lowest interest rates in the industry starting at 9.99%. Your loan interest rate offer greatly depends on your loan eligibility, credit score, and other criteria. You can calculate your EMI with our EMI Calculator."
                    />
                    <AccordionCards
                      title="Loan processing fees"
                      eventKey="1"
                      para="Starting from 0% up to 2% Plus taxes"
                    />
                  </Accordion>
                </div>
                <div className="feature-Bullet-points col-lg-5 ml-4">
                  <Accordion>
                    <AccordionCards
                      title="Pre-payment charges"
                      eventKey="3"
                      para="No charges are applied upon foreclosure of your loan any time before the fixed tenure provided it is closed from owned funds"
                    />
                    <AccordionCards
                      title="Late payment penalty"
                      eventKey="4"
                      para="Rs. 500 bouncing charge (per bounce) + taxes as bouncing charges."
                      para1="2% penalty will be levied on the unpaid overdue interest if any. (this is a monthly charge)."
                    />
                  </Accordion>
                </div>
              </div>
            </div>
            <p className="TC">T&C Apply</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Charges;
