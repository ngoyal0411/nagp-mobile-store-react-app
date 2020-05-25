import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.js";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import { UserContextProvider } from "./context/context";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  </ReduxProvider>,
  document.getElementById("root")
);
