import React from "react";
import "./FeatureandBenefits.css";
import {Accordion} from 'react-bootstrap'; 
import AccordionCards from '../AccordionCard/AccordionCards'
import '../../../Containers/Loans/Vehicle/Vehicle.css'

function FeatureandBenefits(props) {
  return (
      <>
    <div className="feature-content">
      <div className="card-body">
        <div className="feature-inner-content">
          <h3>{props.FeatureHeading}</h3>
          <h4>{props.FeaturesubHeading}</h4>
          <p>
          {props.para1}
          </p>
          <p>
            {props.para2}
          </p>
        
          <div className="feature-Bullet-content pt-4">
          <div className="row">
          <div className="feature-Bullet-points offset-lg-1 col-lg-5">
          <Accordion>
          <AccordionCards fontclass="fas fa-coins" title="Multi-purpose high loan amount" eventKey="0" para="We provide customized Personal Loans up to ₹30 Lakhs, so you can fulfil your every big or small needs with ease" />
          <AccordionCards title="No collateral/security" eventKey="1" para="As it is an unsecured loan, you don’t have to worry about providing any collateral for security." />
          <AccordionCards title="Attractive interest rates" eventKey="2" para="Our Personal Loan Interest rates are affordable and competitive, making it a smart choice to fulfil your needs." />
          </Accordion>
          </div>
          <div className="feature-Bullet-points col-lg-5 ml-4">
          <Accordion>
          <AccordionCards title="Minimum documentation" eventKey="3" para="The documents required for Personal Loan are minimum and easy to share, making it a loan which is hassle-free for you." />
          <AccordionCards title="Quick approvals" eventKey="4" para="To ensure you meet your financial needs easily, we have a quick and easy process and provide you with instant loan disbursal." />
          <AccordionCards title="Flexible repayment tenure" eventKey="5" para="You can choose a flexible repayment tenure of up to 60 months as per your convenience." />
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

export default FeatureandBenefits;
