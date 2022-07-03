import React from 'react'
import BlogPost from '../../../../Components/BlogPost'

import Sidebar from '../../../../Components/Sidebar'

import PageTitle from '../../../../Components/UI/PageTitle'
import SilverData from './data'


const SilverBlogPage=(props)=>  {
const url=props.match.params.url;
    const SilverBlogPage = SilverData.data.find((SilverBlogPage) => SilverBlogPage.url === url);
    const RelatedArticles= SilverData.data.filter((RelatedArticles) => RelatedArticles.url !== url);

    return(
            <>
            <section className="section-padding"/>
            <div className= "mobile-section-padding">
            <div className="container">
            <div className="row">
            <BlogPost
            name={SilverBlogPage.name}
            img={SilverBlogPage.img}
            para={SilverBlogPage.description}
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
    
    
    export default SilverBlogPage;
    