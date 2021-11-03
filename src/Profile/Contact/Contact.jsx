import React from "react";
import Form from "../../Komponen/Form/Form";
import './contact.css';

class Contact extends React.Component {
    render() {
        return(
            <div className="contact" id="contact">
                <h2>Contact</h2>
                <h4>If You Have Question or Offer a Job to Me,</h4>
                <h4>Let's Connect</h4>
                <Form />
            </div>
        )
    }
}

export default Contact;