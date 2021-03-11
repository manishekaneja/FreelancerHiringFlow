import React from "react";
import { Provider } from "react-redux";
import store from "./redux";
import EntryPoint from "./screens";

function App() {
  return <Provider store={store}>
    <EntryPoint />
  </Provider>;
}

export default App;
