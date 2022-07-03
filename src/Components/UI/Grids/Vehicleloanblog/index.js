import React from 'react'
import Slider from "react-slick"
import Vehicleloanblogcomp from './Vehicleloanblogcomp'
import test from '../../../../img/test3.png'
import '../BlogGrid/BlogGrid.css'
/**
* @author
* @function Vehicleloanblog
**/
var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const Vehicleloanblog = (props) => {
    return (
        <>
        
        <div className="articles">
        <div className="popular">
        <div className="popular-articles">
        <Slider {...settings}>
        <Vehicleloanblogcomp img={test} alt="Image" title="Easy EMI" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," cardclass="card" imgclass="card-img-top" bodyclass="body" titleclass="card-title" textclass="card-text" btnclass="btn"/>
        <Vehicleloanblogcomp img={test} alt="Image" title="Easy EMI" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," cardclass="card" imgclass="card-img-top" bodyclass="body" titleclass="card-title" textclass="card-text" btnclass="btn"/>
        <Vehicleloanblogcomp img={test} alt="Image" title="Easy EMI" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," cardclass="card" imgclass="card-img-top" bodyclass="body" titleclass="card-title" textclass="card-text" btnclass="btn"/>
        <Vehicleloanblogcomp img={test} alt="Image" title="Easy EMI" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," cardclass="card" imgclass="card-img-top" bodyclass="body" titleclass="card-title" textclass="card-text" btnclass="btn"/>
        <Vehicleloanblogcomp img={test} alt="Image" title="Easy EMI" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," cardclass="card" imgclass="card-img-top" bodyclass="body" titleclass="card-title" textclass="card-text" btnclass="btn"/>
        <Vehicleloanblogcomp img={test} alt="Image" title="Easy EMI" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," cardclass="card" imgclass="card-img-top" bodyclass="body" titleclass="card-title" textclass="card-text" btnclass="btn"/>
        <Vehicleloanblogcomp img={test} alt="Image" title="Easy EMI" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," cardclass="card" imgclass="card-img-top" bodyclass="body" titleclass="card-title" textclass="card-text" btnclass="btn"/>
        <Vehicleloanblogcomp img={test} alt="Image" title="Easy EMI" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," cardclass="card" imgclass="card-img-top" bodyclass="body" titleclass="card-title" textclass="card-text" btnclass="btn"/>
        <Vehicleloanblogcomp img={test} alt="Image" title="Easy EMI" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," cardclass="card" imgclass="card-img-top" bodyclass="body" titleclass="card-title" textclass="card-text" btnclass="btn"/>
        </Slider>
        </div>
        </div>
        </div>
        </>
        )
}


export default Vehicleloanblog