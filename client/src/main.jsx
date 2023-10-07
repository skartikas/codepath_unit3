import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "picocss/pico.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Locations from "./pages/Locations";
import Games from "./pages/Games";
import Hero from "./components/Hero";
import Page404 from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Hero />
        <App />
      </>
    ),
  },
  {
    path: "games",
    element: (
      <>
        <Hero />
        <Games />
      </>
    ),
  },
  {
    path: "locations/:name",
    element: (
      <>
        <Hero />
        <Locations />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Page404 />
      </>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
