import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { InfiniteScroll } from "./InfiniteScroll";
import Login from "../src/components/Login"

ReactDOM.render(
  <React.StrictMode>
  <Login />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
