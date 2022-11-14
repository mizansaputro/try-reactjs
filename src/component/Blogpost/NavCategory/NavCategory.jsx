import React, {Fragment} from "react";

const NavCategory = () => {
    return (
        <Fragment>
            <div className="navCategory-container">
                <p className="category-text">Wisata Alam</p>
                <hr />
                <p className="category-text">Kuliner</p>
                <hr />
                <p className="category-text">Hotel</p>
                <hr />
                <p className="category-text">Liburan</p>
                <hr />
            </div>
        </Fragment>
    );
}
export default NavCategory;
