import React from 'react'

const Vehicleloanblogcomp = (props) => {
    return (
    <>
    <div>
    <div className={props.cardclass} style={{width: "16rem"}}>
<img className={props.imgclass} src={props.img} alt={props.alt} height="200px" />
<div className={props.bodyclass}>
<h5 className={props.cardtitle}>{props.title}</h5>
<p className={props.textclass}>{props.text}</p>
<a href="" className={props.btnclass}>Read More</a>
</div>
</div>
</div>
    </>
    );
}
export default Vehicleloanblogcomp