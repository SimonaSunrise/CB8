import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./routes/homepage";
import About from "./routes/about";
import Book from "./routes/book/[id]";
import Page404 from "./routes/page404";
import Copyright from "./routes/copyright";
import "./index.css";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Page404 />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },

  {
    path: "copyright",
    element: <Copyright />,
  },
  {
    path: "book/:bookId",
    element: <Book />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
