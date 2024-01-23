import "./App.css";
import MovieList from "./Components/MovieList";
import Movie from "./Components/Movie";
import Stars from "./Components/Stars";
import ReviewList from "./Components/ReviewList";
import ReviewForm from "./Components/ReviewForm";

function App() {
  return (
    <div className="App">
      <MovieList />
      <Movie />
      <Stars />
      <ReviewForm />
    </div>
  );
}

export default App;
