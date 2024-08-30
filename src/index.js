import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AllCards from "./Allcards";

const app = createBrowserRouter([
  {
    path: "https://natanros-pokemon-tcg.netlify.app/",
    element: <App />,
  },
  {
    path: "https://natanros-pokemon-tcg.netlify.app/all-cards",
    element: <AllCards />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={app} />
  </React.StrictMode>,
  document.getElementById("root")
);
