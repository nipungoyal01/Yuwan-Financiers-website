import React from 'react'

/**
* @author
* @function ServiceGrids
**/

const ServiceGrids = (props) => {
   
    return (
        <>
            <div className={props.imageclass}>
            <img className={props.image_imgclass} src={props.img} alt={props.alt}/>
            <div className={props.contentclass}>
            <div className={props.nameclass}>{props.name}</div>
            <p className={props.descriptionclass}>{props.description}</p>
            </div>
            </div>            
        </>
    )
}


export default ServiceGrids