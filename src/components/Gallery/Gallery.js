
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';
const PexelsGallery = () => {
    const apiKey = 'A18L6UPAOtZeFZ4vLDzj2fO4wTeto2iIb2aqtyo2EA3agRXRdEN6YFRV';
    const [photos, setPhotos] = useState([]);
    const [loading, isLoading] = useState(true);
    const [error, isError] = useState("");

    const page = 1;
    const fetchPhotos = async () => {
        try {
            const response = await axios.get(
                `https://api.pexels.com/v1/curated?per_page=100&page=${page}`,
                {
                    headers: {
                        Authorization: apiKey,
                    },
                }
            );
            console.log(response.data.photos);
            setPhotos(response.data.photos);
        }
        catch (error) {
            isLoading(false)
            console.log('Error fetching photos:', error);
            isError(error);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, [apiKey]);


    return (

        <div className='gallery'>
            <div className='error-message'>  <p> {error !== "" && "Something Went Wrong"} </p> </div>
            <h1>Pexels Gallery</h1>
            {loading ? <div className='cards' >
                {photos.slice(0, 9).map(photo => (
                    <div key={photo.id} className='card'   >
                        <img
                            src={photo.src.medium}
                            alt={photo.photographer}
                        />
                        <p>Photo by {photo.photographer}</p>
                    </div>
                ))}
            </div> : "Loading Error ......"}
            
            <form method='post'>

                <input type='number' placeholder='Enter Page number' name='page' />
                <button type='submit'  > next</button>
            </form>
        </div>
    );
};

export default PexelsGallery;
