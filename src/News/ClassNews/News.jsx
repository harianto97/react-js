import React from "react";
import Search from "./Search";
import './index.css';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: []
        }
    }
    componentDidMount() {
        fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=94d0235861c54cc1be4fb98fd9e7779c`)
            .then(res => res.json())
            .then(res => {
                if (res.status === 'error') {
                    throw new Error(res.message);
                } else {
                    this.setState({
                        datas: res.articles
                    })
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {
        const { datas } = this.state;

        return (
            <div>
                <Search />
                <div className="container">
                    {datas.map(data => (
                        <div className="card" key={data.id}>
                            <div className="head-card">
                                <img src={data.urlToImage} alt="imgNews" />
                            </div>
                            <div className="body-card">
                                <h4>{data.title}</h4>
                                <h5>{data.source.name} - {data.publishedAt}</h5>
                                <p>{data.description}</p>
                                <a href={data.url}>Lanjutkan membaca...</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }


}

export default News;