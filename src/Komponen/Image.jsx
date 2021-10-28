import React from "react";

class Image extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            linkGambar: this.props.link,
        };
    }

    render() {
        return(
            <img src={this.state.linkGambar} alt="logo" width="200px" height="170px"/>
        )
    }
}

export default Image;