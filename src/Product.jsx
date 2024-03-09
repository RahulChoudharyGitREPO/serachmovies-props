import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesList from './MoviesList';

function Product() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const API_BASE_URL = 'http://www.omdbapi.com';
    const API_KEY = `3e6ce17c`;

    useEffect(() => {
        const searchMovies = async (title) => {
            try {
                const response = await axios.get(`${API_BASE_URL}?apikey=${API_KEY}&s=${title}`);
                setMovies(response.data.Search);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setLoading(false);
                setError(true);
            } finally {
                setLoading(false); // Always set loading to false after the request
            }
        };

        searchMovies('spiderman'); // Search for "Avengers" movies

    }, []);
    if (loading) return <p>.....Loading...</p>
    if (error) return <p>Error</p>

    return (
        <div>

            <MoviesList movies={movies} />  {/* Pass movies data as a prop */}
        </div>
    );
}

export default Product;
