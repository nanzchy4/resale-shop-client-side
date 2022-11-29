import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp/SignUp";
import SingleCategoryCollection from "../Pages/SingleCategoryCollection/SingleCategoryCollection";

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
                element: <SingleCategoryCollection></SingleCategoryCollection>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
]) 

