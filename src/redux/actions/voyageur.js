import {
  FAIL,
  GET_ALLVOYAGES,
  GET_PROFILE_BYID_VOYAGEUR,
  LOAD,
  LOG_OUT,
  SIGNIN_VOYAGEUR,
  SIGNUP_VOYAGEUR,
} from "../actionsTypes/voyageur";
import axios from "axios";

export const signup = (newVoyageur) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.post("/api/voyageur/signup", newVoyageur);
    dispatch({ type: SIGNUP_VOYAGEUR, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data.errors });
  }
};

export const signin = (voyageur) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.post("/api/voyageur/signin", voyageur);
    dispatch({ type: SIGNIN_VOYAGEUR, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data.errors });
  }
};


//-----------------Gérer profil

//get voyageur profile
export const getProfileVoyageur = (id) => async (dispatch) => {
  dispatch({type:LOAD})
  try {
      let result = await axios.get(`/api/voyageur/${id}`);
      dispatch({
          type: GET_PROFILE_BYID_VOYAGEUR,
          payload: result.data,
      });
  } catch (error) {
      dispatch({
          type: FAIL,
          payload: error,
      });
  }
};


// ediiiiiiit Voyageur profil
export const editProfil = (id, newVoyageur) => async (dispatch) => {
  try {
      await axios.put(`/api/voyageur/updateProfil/${id}`, newVoyageur);
      dispatch(GET_PROFILE_BYID_VOYAGEUR(id))
  } catch (error) {
      dispatch({ type: FAIL, payload: error.response });
  }
};

  //delete VOYAGEUR profil
  export const deleteProfil = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/voyageur/delete/${id}`);
        dispatch(GET_PROFILE_BYID_VOYAGEUR());
    } catch (error) {
        dispatch({
            type: FAIL, 
            payload: error.response,
        });
    }
  };

  //-------------partie voyage

  export const getAllVoyages = () => async (dispatch) => {
    dispatch({ type: LOAD });
    try {
        let result = await axios.get('/api/conducteur/voyage/all/');
        dispatch({
            type: GET_ALLVOYAGES,
            payload: result.data,
        });
    } catch (error) {
        dispatch({
            type: FAIL, 
            payload: error.response,
        });
    }
  };

//LOGOUT
export const logout = () => {
  return {
    type: LOG_OUT,
  };
};
