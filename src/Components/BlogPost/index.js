import React, {useState,useEffect} from 'react'
import './BlogPost.css'
import Nature from '../../img/Nature.jpg'
import Data from '../../Containers/Blogs/Categories/TwoWheeler/data'

function BlogPost(props) {
    



    return (
        <div className="blogPost">
            <div className="blogHeader">
            <span className="head-title">{}</span>
            <h1 className="post-title">{props.name}</h1>
            <span className="posted-by">posted on <span className="Main-span">21 July 2016</span> by <span className="Main-span">sara Blogging Tips</span></span>
            </div>

            <div className="postimage">
            <img src={props.img} alt="Post Image"></img>
            </div>
            
            <div className="post-content">
            <h3>Hi there!!</h3>
            <p>
            {props.para}
            </p>
            </div>
        </div>
      
    )
}

export default BlogPost
