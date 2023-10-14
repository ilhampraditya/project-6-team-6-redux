import axios from "axios";
import { useEffect, useState } from "react";
import MovieItem from "../Component/MovieItem";
import Hero from "../Component/Hero";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const IMAGE_PATH = import.meta.env.VITE_API_IMGURL_CARD;

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/movie/popular`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response.data;

        setPopularMovies(data.slice(0, 8));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
        }
        alert(error?.message);
      }
    };
    getPopularMovies();
  }, []);
  return (
    <>
      <Hero />
      <main>
        <div className="max-w-screen-2xl mx-auto mb-8 ">
          <div>
            <div className="flex justify-between my-8 mx-4">
              <h1 className="font-bold text-2xl">Popular Movie</h1>
              <a
                className="italic text-red-600 hover:underline"
                href="/popular-movies"
              >
                See All Popular
              </a>
            </div>
            <div className="flex justify-center items-center flex-wrap p-2 2xl:max-w-screen-2xl gap-5">
              {popularMovies.map((movie) => (
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
