import React, {Fragment} from "react";

const Branding = (props) => {
    const handlerBg = () => {
        if (props.kode===1){
            return "#faf7f1";
        }else{
            return "#eee7da";
        }
    }
    const bg = handlerBg();
    return (
        <Fragment>
            <div className="branding-container" style={{backgroundColor:bg}}>
                <div className="branding-text">
                    <p className="branding-title">{props.title}</p>
                    <hr />
                    <p className="branding-content">{props.body}</p>
                </div>
                <div className="branding-img">
                    <img src={props.img} alt="" />
                </div>
            </div>
        </Fragment>
    );
}
export default Branding;