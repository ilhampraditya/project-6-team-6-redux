import { useEffect, useState } from "react";
import MovieItem from "../Components/MovieItem";
import Hero from "../Components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../redux/actions/movieActions";

function Home() {
  const dispatch = useDispatch();
  const { popular } = useSelector((state) => state.movie);
  const IMAGE_PATH = import.meta.env.VITE_API_IMGURL_CARD;
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getPopular(setErrors, errors));
  }, [dispatch, errors]);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (popular.length === 0) {
    return <h1>Loading ....</h1>;
  }

  return (
    <>
      <Hero />
      <main>
        <div className="max-w-screen-2xl mx-auto mb-8 ">
          <div className="container">
            <div className="flex justify-between my-8 mx-4">
              <h1 className="font-bold text-red-600 text-2xl">Popular Movie</h1>
              <a
                className="italic text-red-600 hover:underline"
                href="/popular-movies"
              >
                See All Popular
              </a>
            </div>
            <div className="flex justify-center items-center flex-wrap p-2 2xl:max-w-screen-2xl gap-5">
              {popular.map((movie) => (
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
        </div>
      </main>
    </>
  );
}

export default Home;
