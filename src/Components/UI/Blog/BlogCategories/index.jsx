import React from 'react'

/**
* @author
* @function BlogCategories
**/

const BlogCategories = (props) => {
  return(
    <>
    <li>
        <a href={props.link}> {props.title} <span>{props.total}</span> </a>
    </li>
    </>
   )
  }


export default BlogCategories