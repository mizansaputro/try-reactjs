import React, {Fragment} from "react";

const CardPost = (props) => {
    return (
        <Fragment>
            <div className="cardPost-container">
                <p className="card-title">{props.data.title}</p>
                
                <p className="card-body">{props.data.body}</p>
            </div>
        </Fragment>
    );
}
export default CardPost;