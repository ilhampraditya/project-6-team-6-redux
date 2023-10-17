import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Component/Header";
import DetailsMovie from "./Pages/DetailMovie";
import Footer from "./Component/Footer";
import PopularMovies from "./Pages/PopularMovies";
import SearchMovies from "./Pages/SearchMovie";
import TrailerMovie from "./Pages/TrailerMovie";
import NoAccessToken from "./Component/NoAccessToken";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="dark:bg-slate-800">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:movieId" element={<DetailsMovie />} />
          <Route path="/popular-movies" element={<PopularMovies />} />
          <Route path="/search" element={<SearchMovies />} />
          <Route path="/trailer/:movieId" element={<TrailerMovie />} />

          {/* Authentication */}
          <Route
            path="/login"
            element={
              <NoAccessToken>
                <Login />
              </NoAccessToken>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
