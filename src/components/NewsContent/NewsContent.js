import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './NewsContent.css';
import logo from '../../assets/game (1).jpg';


const NewsContent = () => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);

    const fetchNews =  useCallback (
        async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=in&pageSize=20&page=${page}`,
                    {
                        headers: {
                            Authorization: `Bearer ${apiKey}`,
                        },
                    }
                );
                setArticles(response.data.articles);
                console.log(response.data)
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }
    , [apiKey,page])
      

    const handleNext = () => {
        setPage(page + 1);
    };

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    return (
        <div className='' >
            {loading ? (
                <div className='news-content-main' >
                    {articles.map((article) => (
                        <div className='news-content' key={article.title}>

                                 <h1>{article.title} </h1>

                                 <div className='internal-image'> <img src= {article.urlToImage} alt= {logo} /></div>  

                                       <p>{article.content} </p>
                            
                        
                             
                            <hr />
                        </div>
                    ))}
                </div>
            ) : (
                <p>{error !== '' ? 'Something went wrong' : 'Loading...'}</p>
            )}

            <div>
                <button onClick={handlePrevious} disabled={page === 1}>
                    Previous
                </button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default NewsContent;
