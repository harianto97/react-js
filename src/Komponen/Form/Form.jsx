import React from "react";
import './form.css';

class Form extends React.Component {
    render(){
        return(
            <form>
                <input type="text" name="name" id="fname" placeholder="First Name" /> <br/>
                <input type="text" name="name" id="lname" placeholder="Last Name" /> <br/>
                <input type="text" name="email" id="email" placeholder="Email" /> <br/>
                <textarea name="message" id="pesan" cols="20" rows="8" placeholder="Your Message"></textarea><br/>
                <button className="btn-form">Send</button>
            </form>
        )
    }
}

export default Form;