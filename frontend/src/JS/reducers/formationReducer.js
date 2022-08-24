import {
    ADD_FORMATION_FAIL,
    DELETE_FORMATION_FAIL,
    GET_ALL_FORMATION_FAIL,
    GET_ALL_FORMATION_SUCCESS,
    GET_ONE_FORMATION_FAIL,
    GET_ONE_FORMATION_SUCCESS,
    LOADING_FORMATION,
    UPDATE_FORMATION_FAIL,
  } from "../constants/formationConstants";
  
  const initialState = {
    loading: false,
    formations: [],
    errors: null,
    oneFormation: {}
  };
  
  export const formationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_FORMATION:
        return { ...state, loading: true };
      case GET_ALL_FORMATION_SUCCESS:
        return { ...state, formations: payload, loading: false };
      case GET_ALL_FORMATION_FAIL:
        return { ...state, loading: false, errors: payload };
        case ADD_FORMATION_FAIL:
          return { ...state, errors: payload };
          case DELETE_FORMATION_FAIL:
            return { ...state, errors: payload };
          case GET_ONE_FORMATION_SUCCESS:
              return { ...state, oneFormation: payload };
          case GET_ONE_FORMATION_FAIL:
                    return { ...state, errors: payload  };
          case UPDATE_FORMATION_FAIL:
                  return { ...state, errors: payload  };
      default:
        return state;
    }
  };
  