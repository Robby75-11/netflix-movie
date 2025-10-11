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
        title="Il Signore degli Anelli e Lo Hobbit"
        searchTerms={[
          "The Fellowship of the Ring",
          "The Two Towers",
          "The Return of the King",
          "The Hobbit: An Unexpected Journey",
          "The Hobbit: The Desolation of Smaug",
          "The Hobbit: The Battle of the Five Armies",
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

// App principale
function App() {
  const [myList, setMyList] = useState([]);

  const handleAddToList = (movie) => {
    if (!myList.some((m) => m.imdbID === movie.imdbID)) {
      setMyList([...myList, movie]);
      alert(`${movie.Title} aggiunto alla tua lista!`);
    }
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
            path="/mylist"
            element={
              <MovieGallery
                title="🎬 La mia lista"
                moviesData={myList}
                onAddToList={handleAddToList}
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
