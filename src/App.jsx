import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Barnav from "./components/Barnav";
import Footer from "./components/Footer";
import MovieGallery from "./components/MovieGallery";
import { useState } from "react";

// Pagina Home con tutte le gallerie
function Home({ onAddToList, myList }) {
  return (
    <>
      <MovieGallery
        title="Harry Potter Saga"
        searchTerms={[
          "Harry Potter and the Chamber of Secrets",
          "Harry Potter and the Prisoner of Azkaban",
          "Harry Potter and the Goblet of Fire",
          "Harry Potter and the Order of the Phoenix",
          "Harry Potter and the Half-Blood Prince",
          "Harry Potter and the Deathly Hallows: Part 1",
        ]}
        onAddToList={onAddToList}
      />

      <MovieGallery
        title="Star Wars & Matrix"
        searchTerms={[
          "The Empire Strikes Back",
          "Return of the Jedi",
          "Revenge of the Sith",
          "The Matrix",
          "The Matrix Reloaded",
          "The Matrix Revolutions",
        ]}
        onAddToList={onAddToList}
      />
      <MovieGallery
        title="Shrek Saga"
        searchTerms={[
          "Shrek",
          "Shrek 2",
          "Shrek the Halls",
          "Shrek the Third",
          "Shrek Forever After",
          "Batman",
        ]}
        onAddToList={onAddToList}
      />
      <MovieGallery
        title="🎬 La mia lista"
        moviesData={myList}
        onAddToList={onAddToList}
      />
    </>
  );
}

// Pagina Serie TV Netflix
function TvShows({ onAddToList }) {
  return (
    <>
      <MovieGallery
        title="Serie Netflix - House of Cards"
        searchTerms={["House of Cards"]}
        onAddToList={onAddToList}
      />

      <MovieGallery
        title="Serie Netflix - Mindhunter ()"
        searchTerms={["Mindhunter"]}
        onAddToList={onAddToList}
      />
    </>
  );
}

// Pagina Film Netflix
function Movies({ onAddToList }) {
  return (
    <>
      <MovieGallery
        title="Serie Netflix - Gomorra"
        searchTerms={["Gomorra"]}
        onAddToList={onAddToList}
      />
    </>
  );
}

// App principale
function App() {
  const [myList, setMyList] = useState([]);

  const handleAddToList = (movie) => {
    if (!myList.some((m) => m.imdbID === movie.imdbID)) {
      setMyList([...myList, movie]);
      alert(`${movie.Title} aggiunto alla tua lista!`);
    }
  };

  const handleRemoveFromList = (movie) => {
    setMyList(myList.filter((m) => m.imdbID !== movie.imdbID));
  };

  return (
    <Router>
      <Barnav />
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route
            path="/"
            element={<Home onAddToList={handleAddToList} myList={myList} />}
          />
          <Route
            path="/tvshows"
            element={<TvShows onAddToList={handleAddToList} />}
          />
          <Route
            path="/movies"
            element={<Movies onAddToList={handleAddToList} />}
          />
          <Route
            path="/mylist"
            element={
              <MovieGallery
                title="🎬 La mia lista"
                moviesData={myList}
                onAddToList={handleAddToList}
                onRemoveFromList={handleRemoveFromList}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
