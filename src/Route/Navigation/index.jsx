import React from "react";
import { Link } from "react-router-dom";
import './index.css';

class Navigation extends React.Component {
    render(){
        return(
        <nav className="bottom-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/news">News Web</Link></li>
            </ul>
        </nav>
        )
    }
}

export default Navigation;