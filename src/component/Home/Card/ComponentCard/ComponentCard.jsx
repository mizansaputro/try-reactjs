import React, {Fragment} from "react";

const ComponentCard = (props) => {
    return (
        <Fragment>
            <div className="comp-container">
                <div className="comp-img">
                    <img src={props.img} alt="" />
                </div> 
                <div className="comp-text">
                    <p className="text-title">{props.title}</p>
                </div>

            </div>
        </Fragment>
    );  
}
export default ComponentCard;