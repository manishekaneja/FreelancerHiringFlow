import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import config from "../config";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument({
      endPointBase: config.baseUrl,
    } as ExtraThunkArguments)
  )
);

store.subscribe(() => {
  console.log(JSON.stringify(store.getState(), null, 2));
});

export default store;
