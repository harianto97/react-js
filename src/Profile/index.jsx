import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skill from "./Skill/Skill";
import Service from "./Service/Service";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

class Profile extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Hero />
                <About />
                <Skill />
                <Service />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Profile;