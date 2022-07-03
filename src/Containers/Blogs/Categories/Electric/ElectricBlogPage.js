import React from 'react'
import BlogPost from '../../../../Components/BlogPost'

import Sidebar from '../../../../Components/Sidebar'

import PageTitle from '../../../../Components/UI/PageTitle'
import ElectricData from './data'


const ElectricBlogPage=(props)=>  {
const url=props.match.params.url;
    const ElectricBlogPage = ElectricData.data.find((ElectricBlogPage) => ElectricBlogPage.url === url);
    const RelatedArticles= ElectricData.data.filter((RelatedArticles) => RelatedArticles.url !== url);

    return(
            <>
            <section className="section-padding"/>
            <div className= "mobile-section-padding">
            <div className="container">
            <div className="row">
            <BlogPost
            name={ElectricBlogPage.name}
            img={ElectricBlogPage.img}
            para={ElectricBlogPage.description}
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
    
    
    export default ElectricBlogPage;
    