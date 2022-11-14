import React, {Fragment} from "react"
import './Home.css'
import Banner from "./Banner/Banner"
import Introduction from "./Introduction/Introduction";
import Branding from "./Branding/Branding";
import Card from "./Card/Card";
//import TemplateBot from "../TemplateBot/TemplateBot";

const Home = () => {
    return(
        <Fragment>
            
            <Banner/>
            <Introduction/>
            <Branding kode={1} img="https://wallpaperaccess.com/full/101348.jpg" title="Perjalanan yang menyenangkan dan akan selalu terkenang" body="Saat trip menuju destinasi wisata akan sangat menyenangkan. Kita akan melewati pemandangan yang sangat indah. Akses jalan menuju destinasi wisata juga sangat nyaman."/>
            <Branding kode={2} img="https://i0.wp.com/scoutingmagazine.org/wp-content/uploads/2017/08/Family-Camping.jpg?ssl=1" title="Pengalaman Tak Terlupakan Saat Berkunjung ke Banjarnegara" body="Banyak pengalaman menarik yang akan sulit anda lupakan ketika mengunjungi Banjarnegara. Tempat yang sangat indah untuk membuat kenangan bersama teman, pasangan atau keluarga. Tempat destinasi wisata yang ramah lingkungan bagi anak-anak.."/>
            <Card/>
            
        </Fragment>
    );
}
export default Home;
