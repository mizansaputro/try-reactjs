import React, {Fragment} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./Navigation.css";
import logo from "./img-src/Millennium.png"
import Home from "../Home/Home";
import Blogpost from "../Blogpost/Blogpost";
import PostForm from "../Blogpost/PostForm/PostForm";
//import TemplateBot from "../TemplateBot/TemplateBot";
const Navigation = () =>{
    return (
        <Router>
            <Fragment>
                <div className="nav-container">
                    <div className="nav-left-container">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav-right-container">
                        <p><Link to="/">Beranda</Link></p>
                        <p>Paket Wisata</p>
                        <p><Link to="/travel-blog">Travel Blog</Link></p>
                        <p>Kontak</p>
                    </div>
                </div>
            </Fragment>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/travel-blog" element={<Blogpost/>}/>
                <Route path="/travel-blog/add-post" element={<PostForm />}/>
            </Routes>
        </Router>
    );
}
export default Navigation;