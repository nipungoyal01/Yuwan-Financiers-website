import React from 'react'

/**
* @author
* @function BlogList
**/

const BlogList = (props) => {
    return (
        <>
            <div className="post standard-format">
                <div className="entry-media">
                    <img src={props.blogImg} alt={props.heading} />
                    <div className="cat">{props.cat}</div>
                </div>
                <div className="entry-meta">
                    <span>{props.date}</span>
                    <span>By: <a href={props.link}>{props.author}</a></span>
                </div>
                <div className="entry-details">
                    <h3> <a href={props.link}> {props.heading} </a>
                    </h3>
                    <p>{props.para}</p>
                    <a className="read-more" href={props.link}>Read More</a>
                </div>
            </div>
        </>
    )
}


export default BlogList