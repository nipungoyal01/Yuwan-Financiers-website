import React, { useState } from "react";
import styled from "styled-components";
import "../../Containers/About/About.css";

const Button = styled.button`
  opacity: 0.7;
  outline: 0;a
  transition: 0.7s;
  ${({ active }) =>
    active &&
    `
 opacity:1;
 outline:0;
`}
`;
function ChangeContent() {
  const types = [
    "Two Wheeler",
    "Three Wheeler",
    "Four Wheeler",
    "Heavy Vehicles",
    "Electric Vehicles",
    "Mortage Loan",
    "Gold Loan",
    "Silver Loan",
    "Personal Loan"
  ];
  const [active, setActive] = useState(types[0]);
  return (
    <div className="feature-section">
      <div className="top-section1-heading">
      <h2>Blogs</h2>
        <div className="change-content">
          {types.map((type) => (
            <Button active={active === type} onClick={() => setActive(type)}>
              {type}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChangeContent;

