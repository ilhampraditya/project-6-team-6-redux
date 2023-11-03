import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovie } from "../redux/actions/movieActions";

function DetailMovie() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.movie);
  const IMAGE_PATH = import.meta.env.VITE_API_IMGURL_HEADER;
  const NO_IMAGE_PATH = import.meta.env.VITE_API_NO_IMG;

  useEffect(() => {
    dispatch(getDetailMovie(movieId));
  }, [dispatch, movieId]);
  return (
    <div className="relative w-full min-h-screen">
      <div
        style={{
          backgroundImage: `url('${IMAGE_PATH}${detail?.backdrop_path}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-full min-h-screen blur-sm contrast-125"
      ></div>
      <div className="absolute top-0 flex items-center justify-start xl:pl-20">
        <div className="flex flex-col items-center sm:flex-row pt-12 md:pt-2 md:gap-10">
          <img
            src={
              detail?.poster_path
                ? `${IMAGE_PATH}${detail.poster_path}`
                : `${NO_IMAGE_PATH}`
            }
            alt="Image.jpg"
            width="250px"
            height="250px"
            className="rounded-lg pt-36 sm:pt-0 sm:ml-10 md:mt-32 hidden md:inline-flex"
          />
          <div className="flex flex-col p-5 pt-32 md:pt-32 max-w-6xl min-w-min md:mb-0">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-1">
              {detail?.title}
            </h2>
            <p className="text-white font-semibold mb-3">{`Release: ${detail?.release_date}`}</p>
            <p className="text-yellow-400 font-bold">
              {`${detail?.vote_average?.toFixed(1)} / 10`}
            </p>
            {detail?.tagline ? (
              <p className=" text-white font-semibold mb-3">{`Tagline: "${detail?.tagline}"`}</p>
            ) : (
              <p className=" text-white font-semibold">{`Tagline: "Tagline Not Found"`}</p>
            )}
            <div className="flex justify-start items-center gap-3 mb-3">
              {detail?.genres?.map((genre) => (
                <div key={genre?.id}>
                  <p className="rounded-lg italic font-semibold text-white py-0.2 px-3 bg-red-600">
                    {genre?.name}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-white font-semibold mb-4">{detail?.overview}</p>
            <p className="text-white font-semibold mb-1">
              Production Contries:{" "}
            </p>
            <div className="flex justify-start items-center gap-3 mb-5">
              {detail?.production_countries?.map((proCoun) => (
                <div key={proCoun?.id}>
                  <p className="rounded-lg italic font-semibold text-white py-0.2 px-3 bg-red-600">
                    {proCoun?.name}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to={`/trailer/${detail?.id}`}
              className="w-36 h-10 flex justify-center items-center gap-1 bg-red-700 rounded-full hover:bg-red-600"
            >
              <img src="/play.svg" alt="play.svg" width="20px" height="20px" />
              <p className="text-white font-semibold">Trailer Movie</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
