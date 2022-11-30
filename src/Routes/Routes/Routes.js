import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp/SignUp";
import SingleCategoryCollection from "../../Pages/SingleCategoryCollection/SingleCategoryCollection";
import error from '../../Images/error.jpg';
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><SingleCategoryCollection></SingleCategoryCollection></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
       
    },
    {
        path: '*',
        element: <div className="text-center mt-20">
            <h1 className="text-3xl mb-6">Page Not Found</h1>
            <p>Looks like you have followed a broken link or entered a <span className="font-bold">URL</span> that doesn't exist on this site.</p>
            <Link to='/' className="font-semibold text-teal-900"> Back to our site</Link>
            <img src={error} alt="ERROR" className="max-w-5xl mx-auto"></img>            
            </div>
    }
]) 

