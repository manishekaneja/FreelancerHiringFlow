import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "./redux";
import EntryPoint from "./screens";
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <EntryPoint />
      </HashRouter>
    </Provider>
  );
}

export default App;
