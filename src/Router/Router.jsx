import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import AddAToy from "../Component/AddAToy/AddAToy";
import UpdateToy from "../Component/UpdateToy/UpdateToy";
import AllToys from "../Component/AllToys/AllToys";
import MyToys from "../Component/MyToys/MyToys";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ViewDetails from "../Component/ViewDetails/ViewDetails";
import Blog from "../Component/Blog/Blog";
import NotFound from "../NotFound/NotFound";

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
          element: <PrivateRoute>

                   <AddAToy></AddAToy>

                 </PrivateRoute>
         
        },

        {
          path:'/viewDetails/:id',
          element:
           
          <PrivateRoute>
             <ViewDetails></ViewDetails>
          </PrivateRoute>
         
       
        },

        {
          path:'/updateToy/:id',
          element: <PrivateRoute>
                 <UpdateToy></UpdateToy>
                </PrivateRoute>,
          loader: ({params})=> fetch(`https://toy-fair-server-side.vercel.app/updateToy/${params.id}`)
        },
        {
          path:'/allToys',
          element: <AllToys></AllToys>,
          loader: ()=> fetch(`https://toy-fair-server-side.vercel.app/allToys`)
        },
        {
          path:'/myToys',
          element: <PrivateRoute>
                    <MyToys></MyToys>
                  </PrivateRoute>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        }

      

      ]
    },

    {
      path:'*',
      element:<NotFound></NotFound>
    }
  ]);

  export default router