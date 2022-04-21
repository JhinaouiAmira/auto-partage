import { combineReducers } from "redux";
import adminReducer from "./admin";
import conducteurReducer from "./conducteur";
import voyageurReducer from "./voyageur";

const rootReducer = combineReducers({
  adminReducer,
  conducteurReducer,
  voyageurReducer,
});



export default rootReducer;
