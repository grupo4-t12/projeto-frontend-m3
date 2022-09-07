import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import PetProvider from "./contexts/PetContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PetProvider>
          <App />
        </PetProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
