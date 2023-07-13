import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Contact from "./component/Contact";
import Home from "./component/Home";
import About from "./component/About";
import Work from "./component/Work";
import Activity from "./component/Activity";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
            path: "home",
            element: (
              <Home></Home>
            )
          },
          {
            path: "about",
            element: (
              <About></About>
            )
          },
          {
            path: "work",
            element: (
              <Work></Work>
            )
          },
          {
            path: "activity",
            element: (
              <Activity></Activity>
            )
          },
          {
            path: "contact",
            element: (
              <Contact></Contact>
            )
          },
    ],
  },
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
