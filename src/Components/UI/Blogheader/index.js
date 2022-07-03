import React from 'react'
import './blogheader.css'

function blogheader(props) {
    return (
       <>
       <div className="blogHeader-section">
       <div className="blogHeader_img">  
      <img src={props.Headerimg} alt={props.Headeralt} /> 
       <div className="blogHeader_content">

       </div>
       </div>
       </div>
       </>
    )
}

export default blogheader
