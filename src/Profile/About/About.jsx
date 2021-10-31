import React from "react";
import './about.css';

class About extends React.Component {
    render() {
        return(
            <div className="about" id="about">
                <h2>About Me</h2>
                <p>I am graduated from Electrical/Electronic Engineering and an IT Enthusiast</p>
                <p>I know about Microcontroller and have implemented it in severel project like IoT (Internet of Things)</p>
                <p>Now, I become a frelance software enginner at <a href="https://komputermu.net/">KOMPUTERMU-ID.</a></p>
                <p>If you have a problem or need solution about IT (Hardware, Networking and Software)</p>
                <p>You can contact our company</p>
            </div>
        )
    }
}

export default About;