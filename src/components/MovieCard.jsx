import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MovieCard({ movie, onAddToList, onRemoveFromList, onShowDetails }) {
  return (
    <Card
      className="h-100 bg-dark text-light border-0 shadow-sm"
      onClick={() => onShowDetails(movie)}
      style={{ cursor: "pointer" }}
    >
      {/* Contenitore immagine con proporzioni fisse */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "150%", // rapporto 2:3 per i poster
          overflow: "hidden",
          borderRadius: "0.5rem",
        }}
      >
        <Card.Img
          variant="top"
          src={
            movie.Poster && movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.Title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
        />
      </div>

      <Card.Body className="d-flex flex-column justify-content-between p-2">
        <div>
          <Card.Title className="fs-6 text-truncate">{movie.Title}</Card.Title>
          <Card.Text className="text-muted small">{movie.Year}</Card.Text>
        </div>

        {onAddToList && (
          <Button
            variant="danger"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onAddToList(movie);
            }}
          >
            + Lista
          </Button>
        )}

        {onRemoveFromList && (
          <Button
            variant="secondary"
            size="sm"
            className="mt-1"
            onClick={(e) => {
              e.stopPropagation();
              onRemoveFromList(movie);
            }}
          >
            Delete
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
