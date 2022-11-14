import React, {Fragment, useEffect, useState} from "react";
import "./Blogpost.css";
import CardPost from "./CardPost/CardPost";
import NavCategory from "./NavCategory/NavCategory";
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import PostForm from "./PostForm/PostForm";

const Blogpost = () => {
    const [post,setPost] = useState({id:"", title:"", body:""});
    const travelblog_db = "http://localhost:3004/posts";
    const location = useLocation();

    useEffect(() => {
        fetch(travelblog_db)
            .then(response => response.json())
            .then(data => setPost(data))
    })
    
    const getDataFromApi = () => {
        axios.get(`${travelblog_db}`)
            .then((res) => {
                setPost(res.data);
            });
    }
    
    return (
        <Fragment>
                <div className="blogpost-container">
                    <div className="nav">
                        <NavCategory/>
                    </div>
                    <div className="content-container">
                        <div className="action-container">
                        <Link to="/travel-blog/add-post"><button className="post-btn">Post Data</button></Link>
                        </div>
                        <div>
                            {   
                                /*
                                post.map(post => {
                                    return <CardPost data={post} />
                                    
                                })*/
                            }
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}
export default Blogpost;
