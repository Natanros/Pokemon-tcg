import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AllCards from "./Allcards";

const app = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/all-cards",
    element: <AllCards />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={app} />
  </React.StrictMode>,
  document.getElementById("root")
);
