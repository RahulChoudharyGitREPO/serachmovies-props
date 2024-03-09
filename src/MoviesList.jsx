import React from 'react';

function MovieList({ movies }) {
    return (
        <div className="movie-container"> {/* Class name changed for clarity */}
            {movies.length > 0 && (
                <ul className="movie-list"> {/* Added class for the movie list */}
                    {movies.map((movie) => (
                        <li key={movie.imdbID} className="movie-item"> {/* Added class for each movie item */}
                            <div className="movie-poster"> {/* Added a container for the poster */}
                                <img src={movie.Poster} alt="" />
                            </div>
                            <div className="movie-info"> {/* Added a container for movie info */}
                                <p>Title: {movie.Title}</p> {/* Assuming Title exists in the response */}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MovieList;
