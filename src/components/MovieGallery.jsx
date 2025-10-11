import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MovieGallery({ title, searchTerms }) {
  const [movies, setMovies] = useState([]);
  const apiKey = "d02e1f58";

  useEffect(() => {
    const fetchMovies = async () => {
      const allMovies = [];
      for (const term of searchTerms) {
        try {
          const response = await axios.get(
            `https://www.omdbapi.com/?apikey=${apiKey}&t=${term}`
          );
          if (response.data.Response === "True") {
            allMovies.push(response.data);
          } else {
            console.error(
              `Errore nel recupero di ${term}:`,
              response.data.Error
            );
          }
        } catch (error) {
          console.error(`Errore nella chiamata API per ${term}:`, error);
        }
      }
      setMovies(allMovies);
    };

    fetchMovies();
  }, [searchTerms]);

  // Limitiamo a 18 film
  const visibleMovies = movies.slice(0, 18);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{title}</h2>
      <Row className="g-3">
        {visibleMovies.map((movie) => (
          <Col
            key={movie.imdbID}
            xs={12} // Mobile: 1 colonna
            sm={6} // Tablet: 2 colonne
            md={4} // Small desktop: 3 colonne
            lg={2} // Large desktop: 6 colonne
          >
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MovieGallery;
