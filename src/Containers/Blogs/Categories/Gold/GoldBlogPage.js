import React from 'react'
import BlogPost from '../../../../Components/BlogPost'

import Sidebar from '../../../../Components/Sidebar'

import PageTitle from '../../../../Components/UI/PageTitle'
import GoldData from './data'


const GoldBlogPage=(props)=>  {
const url=props.match.params.url;
    const GoldBlogPage = GoldData.data.find((GoldBlogPage) => GoldBlogPage.url === url);
    const RelatedArticles= GoldData.data.filter((RelatedArticles) => RelatedArticles.url !== url);

    return(
            <>
            <section className="section-padding"/>
            <div className= "mobile-section-padding">
            <div className="container">
            <div className="row">
            <BlogPost
            name={GoldBlogPage.name}
            img={GoldBlogPage.img}
            para={GoldBlogPage.description}
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
    
    
    export default GoldBlogPage;
    