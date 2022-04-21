import {
  FAIL,
  GET_ALLCONDUCTEURS,
  GET_ALLVOITURES,
  GET_ALLVOYAGES,
  GET_ALLVOYAGEURS,
  LOAD,
  LOG_OUT,
  SIGNIN_ADMIN,
} from "../actionsTypes/admin";

const initialState = {
  admin: {},
  voyageList: [],
  voitureList: [],
  conducteursList: [],
  voyageursList: [],
  load: false,
  isAuthAdmin: false,
  errors: [],
};

//---------------pure function

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, load: true };
    case SIGNIN_ADMIN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        admin: payload.admin,
        isAuthAdmin: true,
      };
    case GET_ALLVOYAGES:
      return {
        ...state,
        load: false,
        voyageList: payload.voyageList,
        isAuthAdmin: true,
      };
    case GET_ALLVOITURES:
      return {
        ...state,
        load: false,
        voitureList: payload.voitureList,
        isAuthAdmin: true,
      };
    case GET_ALLCONDUCTEURS:
      return {
        ...state,
        load: false,
        conducteursList: payload.conducteursList,
        isAuthAdmin: true,
      };
    case GET_ALLVOYAGEURS:
      return {
        ...state,
        load: false,
        voyageursList: payload.voyageursList,
        isAuthAdmin: true,
      };
    case FAIL:
      return { ...state, load: false, errors: payload };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        admin: {},
        load: false,
        errors: [],
        isAuthAdmin: false,
      };
    default:
      return state;
  }
};
export default adminReducer;
