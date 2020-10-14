import Types from "./types";
import axios from "axios";

export const getPosts = () => {
  return dispatch => {
    dispatch({type: Types.POST_LOADING, payload: true})
    axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/posts`)
      .then(response => {
          dispatch({type: Types.GET_POSTS, payload: response.data});
        }
      )
      .catch(err => {
          console.log(err);
          dispatch({type: Types.GET_POSTS, payload: false});
        }
      );
  }
}

export const deletePost = (id, callback) => {
  return dispatch => {
    dispatch({type: Types.POST_LOADING, payload: true});
    axios.delete(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/posts/${id}/`)
      .then(response => {
          dispatch({type: Types.DELETE_POST, payload: id});
          callback();
        }
      )
      .catch(err => {
          console.log(err)
        }
      );
  }
}

export const createPost = (data, callback) => {
  return dispatch => {
    axios.post(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/posts/`, data)
      .then(response => {
          console.log(response);
          dispatch({type: Types.CREATE_POST, payload: response.data});
          callback();

        }
      )
      .catch(err => {
          console.log(err);
          dispatch({type: Types.POST_LOADING, payload: false});
        }
      )
  }
}

