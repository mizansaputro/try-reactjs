import React, {Fragment} from "react";
import ComponentCard from "./ComponentCard/ComponentCard"; 

const Card = () => {
    return (
        <Fragment>
            <div className="card-container">
                <div className="card-text">
                    <p className="card-title">Beranekaragam Destinasi Wisata</p>
                    <hr />
                    <p className="card-body">Destinasi wisata untuk bersenang-senang bersama teman, pasangan, atau keluarga sangat Beranekaragam</p>
                </div>
                <div className="card-comp">
                    <ComponentCard img="https://cdn.nativeindonesia.com/foto/telaga-warna-dieng/Telaga-Warna-Dieng.jpeg" title="Telaga Warna"/>
                    <ComponentCard img="https://asset.kompas.com/crops/NCAQMm6oRt-73HTsM3dqOofSzzI=/0x0:780x390/780x390/data/photo/2014/12/29/0917031sunrisee1780x390.jpg" title="Bukit Sikunir"/>
                    <ComponentCard img="https://asset.kompas.com/crops/SBHjAzjSkLc99jTELjHrdU1KiOM=/0x0:1800x1200/750x500/data/photo/2021/09/25/614ea1f2206ed.jpg" title="Candi Arjuna"/>
                    
                </div>
            </div>
        </Fragment>
    );
}
export default Card;