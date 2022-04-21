import axios from "axios";
import {
  LOAD,
  SIGNIN_ADMIN,
  FAIL,
  LOG_OUT,
  GET_ALLVOYAGES,
  GET_ALLCONDUCTEURS,
  GET_ALLVOYAGEURS,
  GET_PROFILE_BYID_ADMIN,
  GET_ALLVOITURES,
} from "../actionsTypes/admin";

//----------CRUD ADMIN---------

export const signin = (admin) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.post("/api/admin/signin", admin);
    dispatch({ type: SIGNIN_ADMIN, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data.errors });
  }
};
//---------------------Gérer profil 

//get ADMIN profile
export const getProfileAdmin = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/admin/${id}`);
    dispatch({
      type: GET_PROFILE_BYID_ADMIN,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error,
    });
  }
};

// ediiiiiiit admin profil
export const editProfilAd = (id, newAdmin) => async (dispatch) => {
  try {
    await axios.put(`/api/admin/editProfil/${id}`, newAdmin);
    dispatch(GET_PROFILE_BYID_ADMIN(id));
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response });
  }
};
//delete admin profil
export const deleteProfilAd = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/deleteProfil/${id}`);
    dispatch(GET_PROFILE_BYID_ADMIN());
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response,
    });
  }
};

//-----------------------Gérer conducteur

//get all conducteurs
export const conducteurs = () => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.get("/api/admin/conducteur/all");
    dispatch({
      type: GET_ALLCONDUCTEURS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response,
    });
  }
};

//delete conducteur
export const deleteConducteur = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/conducteur/delete/${id}`);
    dispatch(GET_ALLCONDUCTEURS());
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response,
    });
  }
};

//editer conducteur
export const editConducteur = (id, newConducteur) => async (dispatch) => {
  try {
    await axios.put(`/api/admin/conducteur/edit/${id}`, newConducteur);
    dispatch(GET_ALLCONDUCTEURS(id));
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response });
  }
};

//------------------Gérer voyageur

//get all voyageurs
export const voyageurs = () => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.get("/api/admin/voyageurs/all");
    dispatch({
      type: GET_ALLVOYAGEURS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response,
    });
  }
};

//delete voyageur
export const deleteVoyageur = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/voyageur/${id}`);
    dispatch(GET_ALLVOYAGEURS());
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response,
    });
  }
};

//editer voyageur
export const editVoyageur = (id, newVoyageur) => async (dispatch) => {
  try {
    await axios.put(`/api/admin/voyageur/edit/${id}`, newVoyageur);
    dispatch(GET_ALLVOYAGEURS(id));
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response });
  }
};
//-------------------------Gérer voyage

//GET ALL VOYAGES

export const getVoyages = () => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.get("/api/admin/voyage/all");
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

//delete voyage

export const deleteVoyage = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/voyage/del/${id}`);
    dispatch(getVoyages());
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response,
    });
  }
};
//-----------------------Gérer voiture
//GET ALL VOITURES

export const getVoitures = () => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.get("/api/admin/voiture/all");
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

//delete voiture

export const deleteVoiture = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/voiture/del/${id}`);
    dispatch(getVoyages());
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
