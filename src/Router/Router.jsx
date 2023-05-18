import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import AddAToy from "../Component/AddAToy/AddAToy";
import UpdateToy from "../Component/UpdateToy/UpdateToy";
import AllToys from "../Component/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[

        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/addAToy',
          element: <AddAToy></AddAToy>
        },
        {
          path:'/updateToy',
          element: <UpdateToy></UpdateToy>
        },
        {
          path:'/allToys',
          element: <AllToys></AllToys>
        },

      ]
    },
  ]);

  export default router