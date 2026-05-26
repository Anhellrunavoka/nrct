import { Outlet,Link,NavLink } from "react-router";
import"./App.css"
import ProdHeader from "./components/Header/prodHeader";
// import Header from ".//components/Header/Header";


function App() {
  return (
    <>
    {/* <Header/> */}
    <ProdHeader/>
    <Outlet/> 
    
    </>
  );

}

export default App;
