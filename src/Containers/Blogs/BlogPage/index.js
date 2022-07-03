import React, { Component } from 'react'
import BlogPost from '../../../Components/BlogPost'
import '../../../Components/BlogPost/BlogPost.css'
import Sidebar from '../../../Components/Sidebar'
import '../../../Components/Sidebar/Sidebar.css'
import PageTitle from '../../../Components/UI/PageTitle'
import TwoWheelerData from '../../Blogs/Categories/TwoWheeler/data'


const BlogPage=(props)=>  {
    console.warn(props);
const url=props.match.params.url;
    const blogpage = TwoWheelerData.data.find((blogpage) => blogpage.url === url);
    const RelatedArticles= TwoWheelerData.data.filter((RelatedArticles) => RelatedArticles.url !== url);
    return(
            <>
           <section className="section-padding"/>
            
            <div className="section-padding">
            <div className="container">
            <div className="row">
            <BlogPost
            name={blogpage.name}
            img={blogpage.img}
            para={blogpage.description}
            />
            <Sidebar
            name={RelatedArticles.name}
            />
            </div>
            </div>
            </div>
            </>
            )
        }
    
    
    export default BlogPage;
    