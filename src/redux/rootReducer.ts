import { combineReducers } from "redux";
import { reducer$user } from "../redux-thunk/auth/userReducer";
import { reducer$job } from "../redux-thunk/job/jobReducer";

const rootReducer = combineReducers({
  user: reducer$user,
  job: reducer$job,
});

export default rootReducer;
