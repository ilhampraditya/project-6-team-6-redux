import axios from "axios";
import { setTrandingMovie } from "../reducers/movieReducer";
import { setDetailMovie } from "../reducers/movieReducer";
import { setPopular } from "../reducers/movieReducer";

export const getTrandingMovie = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    if (!token) return;

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/movie/popular`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { data } = response.data;
    dispatch(setTrandingMovie(data.slice(0, 4)));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        return;
      }
      alert(error?.response?.data?.message);
      return;
    }
    alert(error?.message);
  }
};

export const getDetailMovie = (movieId) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    if (!token) return;

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/movie/${movieId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { data } = response.data;
    dispatch(setDetailMovie(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        return;
      }
      alert(error?.response?.data?.message);
      return;
    }
    alert(error?.message);
  }
};

export const getPopular = (setErrors, errors) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    if (!token) return;

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/movie/popular`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { data } = response.data;

    dispatch(setPopular(data.slice(0, 8)));
    setErrors({ ...errors, isError: false });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.response?.data?.message || error?.message,
      });
      return;
    }
    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};
