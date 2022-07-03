import React from "react";
import "./OverviewContent.css";

function OverViewContent(props) {
  return (
    <div className="overview-content">
      <div className="card-body">
        <div className="overview-inner-content">
          <h3>{props.OverviewHeading}</h3>
          <h4>{props.OverViewsubHeading}</h4>
          <p>
          {props.para1}
          </p>
          <p>
            {props.para2}
          </p>
          <h3 className="Heading-padding">
          {props.OverviewHeading1}
          </h3>
          <div className="overview-Bullet-content pt-4">
          <div className="row">
          <div className="overview-Bullet-points offset-lg-1 col-lg-5">
          <ul>
          <li>
          <p>{props.Bulletp1}</p>
          </li>
          <li>
          <p>{props.Bulletp2}</p>
          </li>
          <li>
          <p>{props.Bulletp3}</p>
          </li>
          <li>
          <p>{props.Bulletp7}</p>
          </li>
          </ul>
          </div>
          <div className="overview-Bullet-points offset-lg-1 col-lg-4 offset-lg-1">
          <ul >
          <li>
          <p>{props.Bulletp4}</p>
          </li>
          <li>
          <p>{props.Bulletp5}</p>
          </li>
          <li>
          <p>{props.Bulletp6}</p>
          </li>
          <li>
          <p>{props.Bulletp8}</p>
          </li>
          </ul>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverViewContent;
