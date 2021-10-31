import React from "react";
import './skill.css'

class Skill extends React.Component {
    render() {
        return(
            <div className="skill" id="skill">
                <h2>Skill</h2>
                <div className="micro">
                    <h4>MICROCONTROLLER</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Con.</p>
                </div>
                <div className="iot">
                    <h4>INTERNET OF THINGS</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis.</p>                
                </div>
                <div className="web-dev">
                    <h4>WEB DEVELOPMENT</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum.</p>
                </div>
                <div className="backend">
                    <h4>BACKEND ENGINEER</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt.</p>
                </div>
            </div>
        )
    }
}

export default Skill;