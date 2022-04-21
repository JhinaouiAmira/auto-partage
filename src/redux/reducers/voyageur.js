import { FAIL, LOAD, SIGNIN_VOYAGEUR,LOG_OUT, SIGNUP_VOYAGEUR, GET_ALLVOYAGES, GET_PROFILE_BYID_VOYAGEUR } from "../actionsTypes/voyageur";

const initialState = {
  voyageur: {},
  voyageList: [],
  profileToGet:[],
  load: false,
  errors: [],
  isAuthCVoyageur: false,
};

//pure function
const voyageurReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, load: true };
    case SIGNIN_VOYAGEUR:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        voyageur:payload.voyageur,
        isAuthVoyageur: true,
      };
      case SIGNUP_VOYAGEUR:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        voyageur:payload.voyageur,
        isAuthVoyageur: true,
      };
      case GET_ALLVOYAGES:
        return {
          ...state,
          load: false,
          voyageList: payload.voyageList,
          isAuthVoyageur: true,
        };
        case GET_PROFILE_BYID_VOYAGEUR:
        return {
          ...state,
          load: false,
          profileToGet: payload.profileToGet,
        };
    case FAIL:
      return { ...state, load: false, errors: payload };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        voyageur: {},
        load: false,
        errors: [],
        isAuthVoyageur: false,
      };
    default:
      return state;
  }
};
export default voyageurReducer;
