import {
  FAIL,
  GET_ALLVOITURES,
  GET_ALLVOYAGES,
  GET_PROFILE_BYID_CONDUCTEUR,
  LOAD,
  LOG_OUT,
  SIGNIN_CONDUCTEUR,
  SIGNUP_CONDUCTEUR,
} from "../actionsTypes/conducteur";

const initialState = {
  conducteur: {},
  voitureList:[],
  voyageList: [],
  profileToGet:{},
  load: false,
  errors: [],
  isAuthConducteur: false,
};

//pure function
const conducteurReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, load: true };
    case SIGNIN_CONDUCTEUR:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("id_c", payload.conducteur._id);

      return {
        ...state,
        load: false,
        conducteur: payload.conducteur,
        isAuthConducteur: true,
      };
    case SIGNUP_CONDUCTEUR:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        conducteur: payload.conducteur,
      };
    case GET_ALLVOYAGES:
      return {
        ...state,
        load: false,
        voyageList: payload.voyageList,
        isAuthConducteur: true,
      };
    case GET_ALLVOITURES:
      return {
        ...state,
        load: false,
        voitureList: payload.voitureList,
        isAuthConducteur: true,
      };
      case GET_PROFILE_BYID_CONDUCTEUR:
      return {
        ...state,
        load: false,
        profileToGet: payload.profileToGet,
      };
      // case GET_PROFILE_BYID_CONDUCTEUR:
      // return {
      //   ...state,
      //   load: false,
      //   conducteur: payload.conducteur,
      // };
    case FAIL:
      return { ...state, load: false, errors: payload };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        conducteur: {},
        load: false,
        errors: [],
        isAuthConducteur: false,
      };
    default:
      return state;
  }
};
export default conducteurReducer;
