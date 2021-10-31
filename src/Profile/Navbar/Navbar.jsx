import React from "react";
import './navbar.css';

class Navbar extends React.Component {
    render(){
        return(
        <header>
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#skill">Skill</a></li>
                <li><a href="/#service">Service</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </header>
        )
    }
}

export default Navbar;