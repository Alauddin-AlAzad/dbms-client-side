import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import FindTutors from "../Pages/FindTutors/FindTutors";
import TutorDetails from "../components/TutorDetails/TutorDetails";
import MyBookTutors from "../Pages/MyBookTutors/MyBookTutors";
import MyTutorials from "../Pages/MyTutorials/MyTutorials";
import AddTutorials from "../Pages/AddTutorials/AddTutorials";
import UpdateTutorial from "../Pages/UpdateTutorial/UpdateTutorial";
import TutorsByCategory from "../Pages/TutorsByCategory/TutorsByCategory";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/find-tutors",
        element: <FindTutors />,
      },
      {
        path: "/find-tutors/:category",
        element: <TutorsByCategory />,
      },
      {
        path: "/tutor/:details",
        element: <TutorDetails />,
      },
      {
        path: "/my-booked-tutors",
        element: <MyBookTutors />,
      },
      {
        path: "/my-tutorials",
        element: <MyTutorials />,
      },
      {
        path: "/addTutorials",
        element: <AddTutorials />,
      },
      {
        path: "/update/:id",
        element: <UpdateTutorial />,
      },
    ],
  },
]);

export default router;
