import CreateBrowserRouter from "react-router";
import App from "../App";
import About from "../pages/About";
import ToDoList from "../components/ToDOList/ToDoList";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";
import ProductPage from "../pages/productPage";
import ProductsDetail from "../pages/productsDetail";
import Products from "../components/products/products";
const { createBrowserRouter } = require("react-router");

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<h1>Home</h1>
            },
            // {
            //   path:"/about",
            //     element:<About/>  
            // },
            // {
            //     path:"/todo",
            //     element:<ToDoList/>
            // },
            // {
            //     path:"/users",
            //     element:<Users/>
            // },
            // {
            //     path:"/users/:id",
            //     element:<UserDetail/>
            // }
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/prodPage",
                element: <ProductPage />
            },
            {
                path: "/products/:id",
                element: <ProductsDetail />
            }
        ]
    },
    {
        path:"*",
        element:<h1>Page Not Found 404</h1>
    },
])

export default router;  
