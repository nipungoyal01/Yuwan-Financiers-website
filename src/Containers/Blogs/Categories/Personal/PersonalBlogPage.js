import React from 'react'
import BlogPost from '../../../../Components/BlogPost'

import Sidebar from '../../../../Components/Sidebar'

import PageTitle from '../../../../Components/UI/PageTitle'
import PersonalData from './data'


const PersonalBlogPage=(props)=>  {
const url=props.match.params.url;
    const PersonalBlogPage = PersonalData.data.find((PersonalBlogPage) => PersonalBlogPage.url === url);
    const RelatedArticles= PersonalData.data.filter((RelatedArticles) => RelatedArticles.url !== url);

    return(
            <>
            <section className="section-padding"/>
            <div className= "mobile-section-padding">
            <div className="container">
            <div className="row">
            <BlogPost
            name={PersonalBlogPage.name}
            img={PersonalBlogPage.img}
            para={PersonalBlogPage.description}
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
    
    
    export default PersonalBlogPage;
    