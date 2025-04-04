import React from "react";
import Card from "react-bootstrap/Card";

function MovieCard({ movie }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Year}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
