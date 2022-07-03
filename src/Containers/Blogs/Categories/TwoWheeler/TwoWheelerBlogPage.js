import React from 'react'
import BlogPost from '../../../../Components/BlogPost'

import Sidebar from '../../../../Components/Sidebar'

import PageTitle from '../../../../Components/UI/PageTitle'
import Data from '../../data'


const TwoWheelerBlogPage=(props)=>  {
const url=props.match.params.url;
    const blogpage = Data.data.find((blogpage) => 
    blogpage.url === url);
    const RelatedArticles= Data.data.filter((RelatedArticles) => RelatedArticles.url !== url);
    return(
            <>
            <section className="section-padding"/>
            <div className= "mobile-section-padding">
            <div className="container">
            <div className="row">
            <BlogPost
            name={blogpage.name}
            img={blogpage.img}
            para={blogpage.description}
            />
            <Sidebar
            relatedarticles={RelatedArticles}
            />
            </div>
            </div>
            </div>
            </>
            )
        }
    
    
    export default TwoWheelerBlogPage;
    