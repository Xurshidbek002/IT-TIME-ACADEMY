import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Mentors from "./Pages/Mentors";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Frontend from "./Components/courses/Frontend";
import Backend from "./Components/courses/Backend";
import Design from "./Components/courses/Design";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/frontend",
        element: <Frontend />,
      },
      {
        path: "/courses/backend",
        element: <Backend />,
      },
      {
        path: "/courses/design",
        element: <Design />,
      },
      {
        path: "/mentors",
        element: <Mentors />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
