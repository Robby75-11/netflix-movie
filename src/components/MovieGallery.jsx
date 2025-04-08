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
            `http://www.omdbapi.com/?apikey=${apiKey}&t=${term}`
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
  }, [searchTerms, "apiKey"]);

  const rows = [];
  const moviesPerRow = 18; // Assumiamo che tu voglia al massimo 18 film per galleria per avere 3 righe da 6
  const visibleMovies = movies.slice(0, moviesPerRow); // Prendi solo i primi 18

  for (let i = 0; i < visibleMovies.length; i += 6) {
    rows.push(visibleMovies.slice(i, i + 6));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{title}</h2>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} className="mb-3">
          {row.map((movie) => (
            <Col
              key={movie.imdbID}
              xs={6} // Extra small: 2 colonne (6 / 2 = 3, non ideale per 6)
              sm={4} // Small: 3 colonne (12 / 4 = 3, non ideale per 6)
              md={3} // Medium: 6 colonne (12 / 2 = 6)
              lg={2} // Large: 6 colonne (12 / 2 = 6)
              xl={2} // Extra large: 6 colonne (12 / 2 = 6)
              xxl={2} // Extra extra large: 6 colonne (12 / 2 = 6)
            >
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default MovieGallery;
