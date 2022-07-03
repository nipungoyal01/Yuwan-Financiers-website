import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Loansheader.css'
import Video from '../../../Video/Video.mp4'
/**
* @author
* @function Loansheader
**/

const Loansheader = (props) => {
  return(
    <>
    <div className="Header-section">
    <div className="Header_img">  
   <img src={props.Headerimg} alt={props.Headeralt} /> 
    <div className="Header_content">
    
     </div>
    </div> 
    </div> 
    </>
   )
  }


export default Loansheader