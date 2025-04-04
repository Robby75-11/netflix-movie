import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Footer from "./components/Footer";
import React from "react";
import MovieGallery from "./components/MovieGallery";
import Barnav from "./components/Barnav";
function App() {
  return (
    <>
      <div>
        <Barnav />

        <div
          style={{
            marginTop: "50px",
            backgroundColor: "black",
            color: "#141414",
          }}
        />

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
        />
        <MovieGallery
          title="Lord of the Rings Saga"
          searchTerms={[
            "The Fellowship of the Ring",
            "The Two Towers",
            "The Return of the King",
            "The Hobbit: An Unexpected Journey",
            "The Hobbit: The Desolation of Smaug",
            "The Hobbit: The Battle of the Five Armies",
          ]}
        />
        <MovieGallery
          title="Star Wars/ The Matrix Trilogy"
          searchTerms={[
            "The Empire Strikes Back",
            "Return of the Jedi",
            "Revenge of the Sith",
            "The Matrix",
            "The Matrix Reloaded",
            "The Matrix Revolutions",
          ]}
        />
        <MovieGallery
          title="Shrek"
          searchTerms={[
            "Shrek",
            "Shrek 2",
            "Shrek the Halls",
            "Shrek the Third",
            "Shrek Forever After",
          ]}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
