import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Footer from "./components/Footer";
import React from "react";
import MovieGallery from "./components/MovieGallery";
import Barnav from "./components/Barnav";
function App() {
  return;
  <>
    <div>
      <Barnav />
      <div style={{ marginTop: "70px" }}>
        <MovieGallery
          title="Harry Potter Saga"
          searchTerms={[
            "Harry Potter and the Sorcerer's Stone",
            "Harry Potter and the Chamber of Secrets",
            "Harry Potter and the Prisoner of Azkaban",
          ]}
        />
        <MovieGallery
          title="Lord of the Rings Saga"
          searchTerms={[
            "The Fellowship of the Ring",
            "The Two Towers",
            "The Return of the King",
          ]}
        />
        <MovieGallery
          title="Star Wars Saga"
          searchTerms={[
            "A New Hope",
            "The Empire Strikes Back",
            "Return of the Jedi",
          ]}
        />
      </div>
      <Footer />
    </div>
  </>;
}

export default App;
