import React, {Fragment} from "react";
import img from "../Navigation/img-src/Millennium.png"
import "./TemplateBot.css"
const TemplateBot = () => {
    return (
        <Fragment>
            <div className="template-container">
                <div className="template-img">
                    <img src={img} alt="" />
                </div>
                <div className="template-text">
                    <p>ig: @hotelkeren</p>
                    <p>fb: @hotelkeren</p>
                    <p>no: 08975717217</p>

                </div>
            </div>
        </Fragment>
    );
}

export default TemplateBot;