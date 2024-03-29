import React from "react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AppProvider from "./components/AppProvider";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      cacheLocation="localstorage"
      domain="dev-axkwk09j.eu.auth0.com"
      clientId="NyCE5YxmyPa2nuq5CSFkChbgZBUiZPTi"
      redirectUri={`${window.location.protocol}//${window.location.host}`}
      audience="https://dev-axkwk09j.eu.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <AppProvider>
        <Router>
          <App />
        </Router>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
