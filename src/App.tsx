import React from "react";
import { ConnectedRouter } from "connected-react-router";

import history from "./store/history";
import Navbar from "./components/Navbar";
import Routes from "./routes";
function App() {
  return (
    <ConnectedRouter history={history}>
      <Navbar />
      <Routes />
    </ConnectedRouter>
  );
}

export default App;
