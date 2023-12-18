import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Gallery.css';

const PexelsGallery = () => {
    const apiKey = process.env.REACT_APP_GALLERY_API_KEY;
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);

    const fetchPhotos = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `https://api.pexels.com/v1/curated?per_page=9&page=${page}`,
                {
                    headers: {
                        Authorization: apiKey,
                    },
                }
            );
            setPhotos(response.data.photos);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }, [ page]);

    const handleNext = () => {
        setPage(page + 1);
    };

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, [fetchPhotos]);

    return (
        <div className='gallery'>
            <div className='error-message'>
                <p>{error !== "" && "Something Went Wrong"}</p>
            </div>
            <h1>Pexels Gallery</h1>
            <div>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>

           
                <input
                    type='number'
                    placeholder='Enter Page number'
                    name='page'
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                />
            {loading ? (
                <div className='cards'>
                    {photos.map((photo) => (
                        <div key={photo.id} className='card'>
                            <img src={photo.src.medium} alt={photo.photographer} />
                            <p>Photo by {photo.photographer}</p>
                        </div>
                    ))}
                </div>
            ) : (
                "Loading Error ......"
            )}

         
              
        </div>
    );
};

export default PexelsGallery;
