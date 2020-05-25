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
import { UserContextProvder } from "./context/context";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <UserContextProvder>
      <Router>
        <App />
      </Router>
    </UserContextProvder>
  </ReduxProvider>,
  document.getElementById("root")
);
