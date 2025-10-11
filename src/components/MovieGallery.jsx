import { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import MovieCard from "./MovieCard";

function MovieGallery({ title, searchTerms, onAddToList, moviesData }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const apiKey = "d02e1f58";

  useEffect(() => {
    if (moviesData) {
      // Se ricevo direttamente i dati, li uso senza fare fetch
      setMovies(moviesData);
      return;
    }
    const fetchMovies = async () => {
      const allMovies = [];
      for (const term of searchTerms) {
        try {
          const response = await axios.get(
            `https://www.omdbapi.com/?apikey=${apiKey}&t=${term}`
          );
          if (response.data.Response === "True") allMovies.push(response.data);
        } catch (error) {
          console.error(`Errore per ${term}:`, error);
        }
      }
      setMovies(allMovies);
    };
    fetchMovies();
  }, [searchTerms, moviesData]);

  const handleShowDetails = (movie) => setSelectedMovie(movie);
  const handleClose = () => setSelectedMovie(null);

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="text-light mb-3">{title}</h2>
      <Row className="g-3">
        {movies.map((movie) => (
          <Col key={movie.imdbID} xs={6} sm={4} md={3} lg={2}>
            <MovieCard
              movie={movie}
              onAddToList={onAddToList}
              onShowDetails={handleShowDetails}
            />
          </Col>
        ))}
      </Row>

      {/* Modal Dettagli */}
      {selectedMovie && (
        <Modal show={true} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton className="bg-dark text-light">
            <Modal.Title>{selectedMovie.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-light">
            <div className="d-flex flex-column flex-md-row align-items-center gap-3">
              <img
                src={
                  selectedMovie.Poster && selectedMovie.Poster !== "N/A"
                    ? selectedMovie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={selectedMovie.Title}
                className="rounded"
                style={{ width: "200px", objectFit: "cover" }}
              />
              <div>
                <p>
                  <strong>Anno:</strong> {selectedMovie.Year}
                </p>
                <p>
                  <strong>Genere:</strong> {selectedMovie.Genre}
                </p>
                <p>
                  <strong>Durata:</strong> {selectedMovie.Runtime}
                </p>
                <p>
                  <strong>Trama:</strong> {selectedMovie.Plot}
                </p>
                <p>
                  <strong>Regista:</strong> {selectedMovie.Director}
                </p>
                <p>
                  <strong>Attori:</strong> {selectedMovie.Actors}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-dark text-light">
            <Button
              variant="danger"
              onClick={() => {
                onAddToList(selectedMovie);
                handleClose();
              }}
            >
              + Aggiungi alla lista
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default MovieGallery;
