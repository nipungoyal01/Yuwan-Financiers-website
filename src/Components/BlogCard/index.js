import React from 'react'
import {Link} from 'react-router-dom'
/**
* @author
* @function BlogCard
**/

const BlogCard = (props) => {
   
    return (
        <>
        <div className="col-lg-4 col-md-6">
        <div className="shadow blg_hgt pb-3 mb-4">
            <img src={props.img} alt={props.alt} />
            <div className="mediatext">
                <a href="factors-to-consider-while-taking-used-car-loan.php">
                    <h5>{props.name}</h5>
                </a>
                <p>{props.description}</p>
                <div className="row align-items-center">
                    <div className="col-9">
                        <div>
                          <Link to={props.Link}>
                          <span className="txt">Read More</span>
                          </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}


export default BlogCard