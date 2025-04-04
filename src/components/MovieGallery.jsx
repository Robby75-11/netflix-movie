import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Row from "react-bootstrap/Row";

function MovieGallery({ title, searchTerms }) {
  const [movies, setMovies] = useState([]);
  const apiKey = "d02e1f58";

  useEffect(() => {
    const fetchMovies = async () => {
      const moviePromises = searchTerms.map(async (term) => {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${apiKey}&t=${term}`
        );
        return response.data;
      });
      const movieData = await Promise.all(moviePromises);
      setMovies(movieData);
    };
    fetchMovies();
  }, [searchTerms]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{title}</h2>
      <Row>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </Row>
    </div>
  );
}

export default MovieGallery;
