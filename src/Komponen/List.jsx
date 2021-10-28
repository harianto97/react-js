import React from "react";
import Image from "./Image";
class List extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li><Image link="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082014/html5_0.png?itok=piXl_C7P"/></li>
                    <li><Image link="https://logo-all.ru/uploads/posts/2016-02/0_css3_logo.jpg"/></li>
                    <li><Image link="https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png"/></li>
                </ul>
            </div>
        )
    }
}

export default List;