import React from "react";
import Pict from "../../Image/Pict.png";
import './hero.css';

class Hero extends React.Component {
    render(){
        return(
            <div className="hero">
                <h5>Hello!</h5>
                <h4><strong>I Am Moh. Harianto</strong></h4>
                <h6>A Software Engineer</h6>
                <img src={Pict} alt="myself" />
            </div>
        )
    }
}

export default Hero;