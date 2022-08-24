import {
    ADD_FORMATION_FAIL,
    ADD_FORMATION_SUCCESS,
    DELETE_FORMATION_FAIL,
    DELETE_FORMATION_SUCCESS,
    GET_ALL_FORMATION_FAIL,
    GET_ALL_FORMATION_SUCCESS,
    GET_ONE_FORMATION_FAIL,
    GET_ONE_FORMATION_SUCCESS,
    LOADING_FORMATION,
    UPDATE_FORMATION_FAIL,
    UPDATE_FORMATION_SUCCESS,
  } from "../constants/formationConstants";
  
  import axios from "axios";
  
  export const getALLFormations = () => async (dispatch) => {
    dispatch({ type: LOADING_FORMATION });
    try {
      const response = await axios.get("http://localhost:5000/Formation");
      dispatch({
        type: GET_ALL_FORMATION_SUCCESS,
        payload: response.data.getALLFormations,
      });
    } catch (error) {
      dispatch({ type: GET_ALL_FORMATION_FAIL, payload: error });
    }
  };
  
  export const addFormation= (newFormation,navigate) => async (dispatch) => {
      try {
      const response = await axios.post(
        "http://localhost:5000/formation/add",
        addFormation,
        {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}
      );
      dispatch({ type: ADD_FORMATION_SUCCESS });
      dispatch(getALLFormations())
      navigate("/")
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg)
      dispatch({ type: ADD_FORMATION_FAIL,payload:error });
    }
  };
  
  export const deleteFormation = (id) => async (dispatch) => {
      try {
        const response = await axios.delete(`http://localhost:5000/Formation/${id}`);
        dispatch({
          type: DELETE_FORMATION_SUCCESS,
        });  
        dispatch(getALLFormations())
      } catch (error) {
        dispatch({ type: DELETE_FORMATION_FAIL, payload: error });
      }
    };
  
    
  export const getOneFormation= (id) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/Formation/${id}`);
      dispatch({
        type: GET_ONE_FORMATION_SUCCESS,
        payload: response.data
      }); 
    } catch (error) {
      dispatch({ type: GET_ONE_FORMATION_FAIL, payload: error });
    }
  };
  export const updateOneFormation= (id, newOne, navigate) => async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:5000/Formation/${id}`, newOne);
      dispatch({
        type: UPDATE_FORMATION_SUCCESS,
      });      
      dispatch(getALLFormations())
      navigate("/")
    } catch (error) {
      dispatch({ type: UPDATE_FORMATION_FAIL, payload: error });
    }
  };