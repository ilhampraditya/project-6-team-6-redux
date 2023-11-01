import { useEffect, useState } from "react";
import MovieItem from "../Components/MovieItem";
import { getPopular } from "../redux/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";

const PopularMovies = () => {
  const dispatch = useDispatch();

  const { popular } = useSelector((state) => state.movie);

  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  const IMAGE_PATH = import.meta.env.VITE_API_IMGURL_HEADER;

  useEffect(() => {
    dispatch(getPopular(setErrors, errors));
  }, [dispatch]);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (popular.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="max-w-screen-2xl mx-auto mb-10 pt-16 md:pt-0">
      <h1 className="text-center text-red-600 font-semibold text-4xl pt-24 mb-5">
        Popular Movie
      </h1>
      <div className="flex justify-center items-center flex-wrap p-2 2xl:max-w-screen-2xl gap-5">
        {popular.map((movie) => (
          <div key={movie?.id}>
            <MovieItem
              id={movie?.id}
              title={movie?.title}
              vote_average={`${movie?.vote_average} / 10`}
              release_date={movie?.release_date}
              imgURL={`${IMAGE_PATH}${movie?.poster_path}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
