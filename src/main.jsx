import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './component/Root';
import ErrorPage from './component/ErrorPage';
import Registration from './component/login/Registration';
import Login from './component/login/Login';
import Home from './component/home/Home';
import AuthProvider from './firebase/AuthProvider';
import AddMobile from './component/addMobile/AddMobile';
import AddBrand from './component/addBrand/AddBrand';
import BrandDetails from './component/brandDetails/BrandDetails';
import PivateRoute from './component/PivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement : <ErrorPage></ErrorPage> ,
    children : [
      {
        path: "/",
        element: <Home></Home>,
        loader : () =>fetch('http://localhost:5000/brand')
      },
      {
        path: "addMobile",
        element: <PivateRoute><AddMobile></AddMobile></PivateRoute>,
      },
      {
        path: "/brand/:id",
        element: <PivateRoute><BrandDetails></BrandDetails></PivateRoute>,
        loader : ({params}) => fetch(`http://localhost:5000/brand/${params.id}`),
      },
      {
        path: "addBrand",
        element: <PivateRoute><AddBrand></AddBrand></PivateRoute>,
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
