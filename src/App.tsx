import React from "react";

import { ConnectedRouter } from "connected-react-router";
import history from "./store/history";
function App() {
  return <ConnectedRouter history={history}></ConnectedRouter>;
}

export default App;
