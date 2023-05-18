import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import {
 
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import Provider from './Provider/Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider>
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>,
)
