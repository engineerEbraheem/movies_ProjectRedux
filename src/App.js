import { Container } from "react-bootstrap";
import MoviesList from "./component/MoviesList";
import NavBar from "./component/NavBar";
import { Route, Routes } from "react-router-dom";
import MoviesDetails from "./component/MoviesDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/MoviesDetails/:id" element={<MoviesDetails />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
