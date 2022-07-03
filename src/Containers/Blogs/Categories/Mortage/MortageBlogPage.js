import React from 'react'
import BlogPost from '../../../../Components/BlogPost'

import Sidebar from '../../../../Components/Sidebar'

import PageTitle from '../../../../Components/UI/PageTitle'
import MortageData from './data'


const MortageBlogPage=(props)=>  {
const url=props.match.params.url;
    const MortageBlogPage = MortageData.data.find((MortageBlogPage) => MortageBlogPage.url === url);
    const RelatedArticles= MortageData.data.filter((RelatedArticles) => RelatedArticles.url !== url);

    return(
            <>
            <section className="section-padding"/>
            <div className= "mobile-section-padding">
            <div className="container">
            <div className="row">
            <BlogPost
            name={MortageBlogPage.name}
            img={MortageBlogPage.img}
            para={MortageBlogPage.description}
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
    
    
    export default MortageBlogPage;
    