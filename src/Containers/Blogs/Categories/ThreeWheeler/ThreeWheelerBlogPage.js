import React from 'react'
import BlogPost from '../../../../Components/BlogPost'

import Sidebar from '../../../../Components/Sidebar'

import PageTitle from '../../../../Components/UI/PageTitle'
import ThreeWheelerData from './data'


const ThreeWheelerBlogPage=(props)=>  {
const url=props.match.params.url;
    const ThreeWheelerBlogPage = ThreeWheelerData.data.find((ThreeWheelerBlogPage) => ThreeWheelerBlogPage.url === url);
    const RelatedArticles= ThreeWheelerData.data.filter((RelatedArticles) => RelatedArticles.url !== url);

    return(
            <>
            <section className="section-padding"/>
            <div className= "mobile-section-padding">
            <div className="container">
            <div className="row">
            <BlogPost
            name={ThreeWheelerBlogPage.name}
            img={ThreeWheelerBlogPage.img}
            para={ThreeWheelerBlogPage.description}
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
    
    
    export default ThreeWheelerBlogPage;
    