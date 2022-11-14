import React, {Fragment} from "react";
import "./PostForm.css";
import axios from "axios";

const PostForm = () => {
    let post = {
        id: null,
        title: "",
        body: ""
    }
    const travelblog_db = "http://localhost:3004/posts";
    const getValue = (event) => {
        const value = event.target.value 
        const target = event.target.name
        const id = new Date().getTime()

        post[target] = value;
        post.id = id;
        
    }
    const submitHandler = () => {
        console.log(post);
        postDataToApi();
    }
    const postDataToApi = () => {
        axios.post(`${travelblog_db}`,post)
            .then((res) => {
                console.log(res);
            }, 
            (err) => {
                console.log(`error: ${err}`);
            })
    }
    return(
        <Fragment>
            <div className="postForm-container">
                <div className="form-container">
                    <form action="">
                        <label htmlFor="title"><p>Title</p></label>
                        <input  type="text" name="title" placeholder="input title" onChange={getValue}/>
                        <br />
                        <label htmlFor="body"><p>Blog Body</p></label>
                        <textarea  name="body" id="body" cols="30" rows="10" onChange={getValue}></textarea>
                        <br />
                        <button className="btn-add" onClick={submitHandler}>Add Data</button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
export default PostForm;