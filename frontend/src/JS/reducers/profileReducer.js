import {
  SAVE_PROFILE_FAIL,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOADING_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from "../constants/profileConstants";
const initialState = {
  errors: null,
  currentProfile: {},
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_PROFILE:
      return { ...state, loading: true };
    case SAVE_PROFILE_FAIL:
      return { ...state, errors: payload };

    case GET_PROFILE_FAIL:
      return { ...state, errors: payload };
    case GET_PROFILE_SUCCESS:
      return { ...state, currentProfile: payload };
    case UPDATE_PROFILE_FAIL:
      return { ...state, errors: payload };
    case UPDATE_PROFILE_SUCCESS:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
