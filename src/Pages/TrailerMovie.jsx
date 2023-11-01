import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrailerMovies } from "../redux/actions/movieActions";
import { getDetailMovie } from "../redux/actions/movieActions";

const TrailerMovie = () => {
  const { movieId } = useParams();

  const dispatch = useDispatch();

  const { trailer, detail } = useSelector((state) => state.movie);

  const IMAGE_PATH = import.meta.env.VITE_API_IMGURL_HEADER;
  const NO_IMAGE_PATH = import.meta.env.VITE_API_NO_IMG;

  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getTrailerMovies(setErrors, errors, movieId));
    dispatch(getDetailMovie(movieId));
  }, [dispatch, errors, movieId]);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (!trailer.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="relative w-full min-h-screen">
      <img
        className="w-full h-screen bg-cover bg-no-repeat bg-center blur-sm"
        src={
          detail?.backdrop_path
            ? `${IMAGE_PATH}${detail?.backdrop_path}`
            : NO_IMAGE_PATH
        }
      />
      <iframe
        title="Movie Trailer"
        className="w-full h-full py-36 px-5 mt-10 md:px-16 md:py-28 xl:py-24 xl:px-52 absolute top-0 flex items-center justify-center"
        src={`https://www.youtube.com/embed/${trailer?.key}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrailerMovie;
