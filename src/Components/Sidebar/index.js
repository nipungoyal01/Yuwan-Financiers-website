import React from 'react'
import './Sidebar.css'

import { Link } from 'react-router-dom'

const Sidebar=({relatedarticles}) =>{
    return (
      <>
      
        
        <div className="Sidebar" data-spy="affix" data-offset-top="205">
            <div className="cardheader">
            <div className="card-title">
            <span className="head-title">Related Articles</span>
            </div>
           <div className="Related-Blogs">  
        {relatedarticles.map((relatedarticle,id)=>{
          return<>
          <Link key={id} to={`${relatedarticle.url}`}>
          <h3 key={id}>{relatedarticle.name}</h3>
          <span>{relatedarticle.date}</span>
          </Link>
          </>
        })
      }  
          </div>
            </div>
        </div>
    
        </>
    )
}

export default Sidebar
