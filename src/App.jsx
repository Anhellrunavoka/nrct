import { Outlet,Link,NavLink } from "react-router";
// import { useNavigate } from "react-router";
import"./App.css"
import ProdHeader from "./components/Header/prodHeader";
import Header from ".//components/Header/Header";


function App() {
  // const navigation=useNavigate();
  // const isLoading=navigation.state==="loading";

  // if(isLoading){
  //   return <h1>Loading...</h1>
  // }
  return (
    <>
     {/* <Header/>  */}
    <ProdHeader/>
    <Outlet/> 
    
    </>
  );

}

export default App;
