import { Outlet,Link,NavLink } from "react-router";
import"./App.css"
import Products from "./components/products/products";
import Header from ".//components/Header/Header";


function App() {
  return (
    <>
    {/* <Header/> */}
    {/* <Outlet/> */}
    <Products/>
    </>
  );

}

export default App;
