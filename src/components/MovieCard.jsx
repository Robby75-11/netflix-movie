import React from "react";
import Card from "react-bootstrap/Card";

function MovieCard({ movie }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Year}</Card.Text>
        <Card.Text>{movie.Runtime}</Card.Text>
        <Card.Text>{movie.Genre}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
