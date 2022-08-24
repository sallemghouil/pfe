import {
    SAVE_PROFILE_FAIL,
    SAVE_PROFILE_SUCCESS,
    GET_PROFILE_FAIL,
    GET_PROFILE_SUCCESS,
    LOADING_PROFILE,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_SUCCESS,
  } from "../constants/profileConstants";
  import axios from "axios";


  export const saveProfile = (navigate) => async (dispatch) => {
    try {
    const response = await axios.post(
      "http://localhost:5000/profile/condidate",
      {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}
    );
    dispatch({ type: SAVE_PROFILE_SUCCESS });
    dispatch(getProfile())
    navigate("/profile/condidate")
  } catch (error) {
    console.log(error);
    alert(error.response.data.msg)
    dispatch({ type: SAVE_PROFILE_FAIL,payload:error });
  }
};


  export const getProfile = (_id) => async (dispatch) => {
    dispatch({ type: LOADING_PROFILE });
    try {
      const response = await axios.get(`http://localhost:5000/profile/condidate:%_id`);
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: response.data
      }); 
    } catch (error) {
      dispatch({ type: GET_PROFILE_FAIL, payload: error });
    }
  };
  export const updateProfile = (_id, newOne, navigate) => async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:5000/profile/condidate:%_id`, newOne);
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
      });      
      dispatch(getProfile())
      navigate("/profile/condidate")
    } catch (error) {
      dispatch({ type: UPDATE_PROFILE_FAIL, payload: error });
    }
  };