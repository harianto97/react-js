import { useEffect, useState } from "react";

const Search = () => {
    const [search, setSearch] = useState('');
    const [keyword, setKeyword] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (keyword) {
            fetch(`https://newsapi.org/v2/everything?q=${keyword}&language=id&apiKey=94d0235861c54cc1be4fb98fd9e7779c`)
                .then(res => res.json())
                .then(res => {
                    if (res.status === 'error') {
                        throw new Error(res.message);
                    }
                    if (res.status !== 'error') {
                        if (res.totalResults === 0) {
                            alert('Hasil Tidak Ditemukan');
                        } else {
                            setData(res.articles);
                        }
                    }
                })
                .catch(err => {
                    alert(err);
                })
        }
    }, [keyword])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        setKeyword(search);
        e.preventDefault();
    }

    return (
        <div>
            <div className="nav">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={search}
                        onChange={handleChange}
                    />
                    <button type="submit">Cari</button>
                </form>
            </div>
            <div className="container">
                {data.map(d => (
                    <div className="card" key={d.source.id}>
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

export default Search;