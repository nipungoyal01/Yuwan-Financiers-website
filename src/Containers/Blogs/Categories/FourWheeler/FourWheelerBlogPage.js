import React from 'react'
import BlogPost from '../../../../Components/BlogPost'
import { useParams } from 'react-router-dom'
import Sidebar from '../../../../Components/Sidebar'

import PageTitle from '../../../../Components/UI/PageTitle'
import FourWheelerData from './data'


const FourWheelerBlogPage=(props)=>  {
const url= useParams();
console.log(url);
    const FourWheelerBlogPage = FourWheelerData.data.find((FourWheelerBlogPage) => FourWheelerBlogPage.url === url);
    const RelatedArticles= FourWheelerData.data.filter((RelatedArticles) => RelatedArticles.url !== url);

    return(
            <>
            <section className="section-padding"/>
            <div className= "mobile-section-padding">
            <div className="container">
            <div className="row">
            <BlogPost
            name={FourWheelerBlogPage.name}
            img={FourWheelerBlogPage.img}
            para={FourWheelerBlogPage.description}
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
    
    
    export default FourWheelerBlogPage;
    