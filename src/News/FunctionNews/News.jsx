import { useEffect, useState } from "react";
import Search from "./Search";
import './index.css';

const News = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=94d0235861c54cc1be4fb98fd9e7779c`)
            .then(res => res.json())
            .then(res => {
                if (res.status === 'error') {
                    throw new Error(res.message);
                } else {
                    setData(res.articles);
                }
            })
            .catch(err => {
                alert(err);
            })
    }, [])
    
    return (
        <div>
            <Search />
            <div className="container">
                {data.map(d => (
                    <div className="card">
                        <div className="head-card">
                            <img src={d.urlToImage} alt="pict" />
                        </div>
                        <div className="body-card">
                            <h4>{d.title}</h4>
                            <h5>{d.source.name} - {data.publishedAt}</h5>
                            <p>{d.description}</p>
                            <a href={d.url}>Lanjutkan membaca...</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )


}

export default News;