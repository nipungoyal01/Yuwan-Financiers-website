import React from 'react'
import BlogPost from '../../../../Components/BlogPost'

import Sidebar from '../../../../Components/Sidebar'

import PageTitle from '../../../../Components/UI/PageTitle'
import HeavyData from './data'


const HeavyBlogPage=(props)=>  {
const url=props.match.params.url;
    const HeavyBlogPage = HeavyData.data.find((HeavyBlogPage) => HeavyBlogPage.url === url);
    const RelatedArticles= HeavyData.data.filter((RelatedArticles) => RelatedArticles.url !== url);

    return(
            <>
            <section className="section-padding"/>
            <div className= "mobile-section-padding">
            <div className="container">
            <div className="row">
            <BlogPost
            name={HeavyBlogPage.name}
            img={HeavyBlogPage.img}
            para={HeavyBlogPage.description}
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
    
    
    export default HeavyBlogPage;
    