import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Login } from "./Pages/Login/Login.jsx";
import Blockbuster from "./Blockbuster/Blockbuster.jsx";
import TitleCards1 from "./Titlecard1/Titlecard1.jsx";
import Search from "./Pages/Search/Search.jsx";
import Premium from "./Premium/Premium.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <App/>
  </React.StrictMode>
);
