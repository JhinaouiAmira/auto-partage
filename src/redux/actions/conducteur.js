import {
  FAIL,
  GET_ALLVOITURES,
  GET_ALLVOYAGES,
  GET_PROFILE_BYID_CONDUCTEUR,
  GET_VOYAGE_BYIDC,
  LOAD,
  LOG_OUT,
  SIGNIN_CONDUCTEUR,
  SIGNUP_CONDUCTEUR,
} from "../actionsTypes/conducteur";
import axios from "axios";

export const signup = (newConducteur) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.post("/api/conducteur/signup", newConducteur);
    dispatch({ type: SIGNUP_CONDUCTEUR, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data.errors });
  }
};

export const signin = (conducteur) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.post("/api/conducteur/signin", conducteur);
    dispatch({ type: SIGNIN_CONDUCTEUR, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data.errors });
  }
};
//------------------------partie Voyage

//GET ALL VOYAGES

export const getAllVoyages = () => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.get("/api/conducteur/voyage/all/");
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

//GET VOYAGE BY IDC
export const getVoyageByIdc = (idc) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.get(`/api/conducteur/voyages/${idc}`);
    dispatch({
      type: GET_VOYAGE_BYIDC,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response,
    });
  }
};

//add voyage

export const addVoyage = (newVoyage) => async (dispatch) => {
  try {
    await axios.post("/api/conducteur/voyage/add", newVoyage);
    dispatch(getAllVoyages());
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response,
    });
  }
};

//delete voyage

export const deleteVoyage = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/conducteur/voyage/del/${id}`);
    dispatch(getAllVoyages());
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response,
    });
  }
};

// ediiiiiiit voyage
export const editVoyage = (id, newVoyage) => async (dispatch) => {
  try {
    await axios.put(`/api/conducteur/voyage/edit/${id}`, newVoyage);
    dispatch(GET_ALLVOYAGES());
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response });
  }
};

//------------------------partie Voiture

//GET ALL VOITURES

export const getAllVoitures = () => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.get("/api/conducteur/voiture/all");
    dispatch({
      type: GET_ALLVOITURES,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response,
    });
  }
};

//ADD VOITURE
export const addVoiture = (newVoiture) => async (dispatch) => {
  try {
    await axios.post("/api/conducteur/voiture/add", newVoiture);
    dispatch(getAllVoitures());
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response,
    });
  }
};

//delete voiture

export const deleteVoiture = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/conducteur/voiture/${id}`);
    dispatch(getAllVoitures());
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response,
    });
  }
};

// ediiiiiiit voiture
export const editVoiture = (id, newVoiture) => async (dispatch) => {
  try {
    await axios.put(`/api/conducteur/voiture/edit/${id}`, newVoiture);
    dispatch(GET_ALLVOITURES());
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response });
  }
};

//-----------------Gérer profil

//get conducteur profile
export const getProfileConducteur = (id) => async (dispatch) => {
  dispatch({type:LOAD})
  try {
    let result = await axios.get(`/api/conducteur/${id}`);
    dispatch({
      type: GET_PROFILE_BYID_CONDUCTEUR,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error,
    });
  }
};

//ediiiiiiit conducteur profil
export const editProfil = (id, newConducteur) => async (dispatch) => {
  dispatch({type:LOAD})
  try {
      await axios.put(`/api/conducteur/editProfil/${id}`, newConducteur);
      dispatch(GET_PROFILE_BYID_CONDUCTEUR(id));
  } catch (error) {
      dispatch({ type: FAIL, payload: error.response });
  }
};

// export const editProfil = (conducteur) => async (dispatch) => {
//   dispatch({ type: LOAD });
//   try {
//     let result = await axios.patch(
//       `/api/conducteur/editProfil/${conducteur._id}`,
//       conducteur
//     );
//     dispatch({ type: GET_PROFILE_BYID_CONDUCTEUR, payload: result.data });
//   } catch (error) {
//     dispatch({ type: FAIL, payload: error.response.data.errors });
//   }
// };

//delete conducteur profil
export const deleteProfil = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/conducteur/deleteProfil/${id}`);
    dispatch(GET_PROFILE_BYID_CONDUCTEUR());
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
