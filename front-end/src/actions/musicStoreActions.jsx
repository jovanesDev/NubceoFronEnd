import {
  GET_MUSIC_STORE_FAILED,
  GET_MUSIC_STORE_SUCCESS,
  SORT_ASC,
  SORT_DESC,
  MUSIC_STORE_CHANGED,
  FILTER_BY_GENRE,
} from "../types/types";
import { hideLoading, showLoading } from "./loadingActions";
import axios from "../axios/axiosClient";
import errorAlert from "../components/UI/ErrorAlert/ErrorAlert";

export const getMusicStore = (token) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const result = await axios.get("/music/data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getMusicStoreSuccess(result.data));
      dispatch(hideLoading());
    } catch (error) {
      dispatch(getMusicStoreFailed());
      dispatch(hideLoading());
      errorAlert("Hubo un error interno");
    }
  };
};

const getMusicStoreSuccess = (data) => ({
  type: GET_MUSIC_STORE_SUCCESS,
  payload: data,
});

const getMusicStoreFailed = () => ({
  type: GET_MUSIC_STORE_FAILED,
  payload: null,
});

export const sortAsc = (arr) => {
  return (dispatch) => {
    dispatch(musicStoreChanged());
    dispatch(orderAsc(arr));
  };
};

const orderAsc = (arr) => ({
  type: SORT_ASC,
  payload: arr,
});

export const sortDesc = (arr) => {
  return (dispatch) => {
    dispatch(musicStoreChanged());
    dispatch(orderDesc(arr));
  };
};

const orderDesc = (arr) => ({
  type: SORT_DESC,
  payload: arr,
});

export const filterByGenreFn = (genre) => {
  return (dispatch) => {
    dispatch(musicStoreChanged());
    dispatch(filterGenre(genre));
  };
};

const filterGenre = (genre) => ({
  type: FILTER_BY_GENRE,
  payload: genre,
});

const musicStoreChanged = () => ({
  type: MUSIC_STORE_CHANGED,
  payload: true,
});
