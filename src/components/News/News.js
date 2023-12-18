import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';

const NewsComponent = () => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);

    const fetchNews = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${page}`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );
            setArticles(response.data.articles);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

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
    }, [apiKey, page]);

    return (
        <div>
            <h1>Top News Headlines</h1>
            {loading ? (
                <div>
                    {articles.map((article) => (
                        <div key={article.title}>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
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

export default NewsComponent;
