import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ProductPage from "../pages/ProductPage";
import ProductsDetail from "../pages/ProductDetail";
import Products from "../pages/Products";

const prodrouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
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
        path: "*",
        element: <h1>Page Not Found 404</h1>
    }
]);

export default prodrouter;