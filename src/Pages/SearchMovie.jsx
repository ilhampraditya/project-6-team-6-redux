import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieItem from "../Component/MovieItem";

const SearchMovies = () => {
  // Create state for movies that have been searched
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");
  const IMAGE_PATH = import.meta.env.VITE_API_IMGURL_CARD;

  useEffect(() => {
    const getSearchMovie = async () => {
      try {
        // Get the data from API with query and page variable
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/api/v1/search/movie?page${page}&query=${query}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        // Set state for the movie that have been searched
        const { data } = response.data;
        setSearchMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
    getSearchMovie();
  }, [query, page]);

  // Foreach or map every object of movies array
  return (
    <div className="max-w-screen-2xl mx-auto mb-10">
      <h1 className="font-semibold text-3xl pt-48 ml-6 md:text-4xl md:ml-10 md:pt-28 mb-5">
        {`Search Result "${query}"`}
      </h1>
      <div className="flex justify-center items-center flex-wrap p-2 2xl:max-w-screen-2xl gap-5">
        {searchMovie.map((movie) => (
          <div key={movie?.id}>
            <MovieItem
              id={movie?.id}
              imgURL={`${IMAGE_PATH}${movie?.poster_path}`}
              title={movie?.title}
              vote_average={`${movie?.vote_average} / 10`}
              release_date={movie?.release_date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;
