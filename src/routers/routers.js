import CreateBrowserRouter from "react-router";
import App from "../App";
import About from "../pages/About";
import ToDoList from "../components/ToDOList/ToDoList";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";
import ProductPage from "../pages/productPage";
import ProductsDetail from "../pages/productsDetail";
import Products from "../components/products/products";
import { getUsers, searchUsers } from "../loaders/usersLoaders";
import { getUserDetails } from "../loaders/usersLoaders";
import SearchResults from "../pages/SearchResults";
import ErrorBoundary from "../components/ErrorBoundary";
import { getProductDetail, getProducts, searchProducts } from "../loaders/productLoaders";
const { createBrowserRouter } = require("react-router");

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<h1>Home</h1>,
                errorElement:<ErrorBoundary/>
            },
            // {
            //   path:"/about",
            //     element:<About/> ,
            //     errorElement:<ErrorBoundary/> 
            // },
            // {
            //     path:"/todo",
            //     element:<ToDoList/>,
            //     errorElement:<ErrorBoundary/>
            // },
            // {
            //     path:"/users",
            //     element:<Users/>,
            //     loader:getUsers,
            //     errorElement:<ErrorBoundary/>
            // },
            // {
            //     path:"/users/:id",
            //     element:<UserDetail/>,
            //     loader:getUserDetails,
            //     errorElement:<ErrorBoundary/>
            // },
            // {
            //     path:'/search',
            //     element:<SearchResults/>,
            //     loader:searchUsers,
            //     errorElement:<ErrorBoundary/>
            //}
            {
                path:'/search',
                element:<SearchResults/>,
                loader:searchProducts,
                errorElement:<ErrorBoundary/>
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/prodPage",
                element: <ProductPage />,
                loader:getProducts
            },
            {
                path: "/products/:id",
                element: <ProductsDetail />,
                loader:getProductDetail
            }
        ]
    },
    {
        path:"*",
        element:<h1>Page Not Found 404</h1>
    },
])

export default router;  
