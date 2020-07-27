import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => {
  //formValues = {title, description}
  return async function (dispatch) {
    const response = await streams.post("/streams", formValues); //{id, title, description}
    dispatch({
      type: CREATE_STREAM,
      payload: response.data,
    });
  };
};

//for listing all streams
export const fetchStreams = () => {
  return async function (dispatch) {
    const response = await streams.get("/streams");
    dispatch({
      type: FETCH_STREAMS,
      payload: response.data,
    });
  };
};

//for particular single stream
export const fetchStream = (id) => {
  return async function (dispatch) {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
      type: FETCH_STREAM,
      payload: response.data,
    });
  };
};

export const editStream = (id, formValues) => {
  return async function (dispatch) {
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({
      type: EDIT_STREAM,
      payload: response.data,
    });
  };
};

export const deleteStream = (id) => {
  return async function (dispatch) {
    const response = await streams.delete(`/streams/${id}`);
    dispatch({
      type: DELETE_STREAM,
      payload: id, //not action.payload
    });
  };
};
