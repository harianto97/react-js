import React from "react";
import "./index.css"

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            datas: []
        };
    }
    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://newsapi.org/v2/everything?q=${this.state.keyword}&language=id&apiKey=94d0235861c54cc1be4fb98fd9e7779c`)
            .then(res => res.json())
            .then(res => {
                if (res.status === 'error') {
                    throw new Error(res.message);
                }
                if (res.status !== 'error') {
                    if (res.totalResults === 0) {
                        alert('Hasil Pencarian Tidak Ditemukan');
                    } else {
                        this.setState({
                            datas: res.articles
                        });
                    }
                }
            })
            .catch(err => {
                alert(err);
            })
    };


    render() {
        return (
            <div>
                <div className="nav">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.keyword}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Cari</button>
                    </form>
                </div>
                <div className="container">
                    {this.state.datas.map(data => (
                        <div className="card">
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
        )
    }
}

export default Search;