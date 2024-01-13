import { Component } from "react";
import { ADDDATA, subtract } from "./Redux/action";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Habits from "./Components/Habits/Habits";
import Home from "./Components/Home";
import Details from "./Components/Details/Details";
import Paths from "./Components/Paths/Paths";
import LoginUser from "./Components/Login/LoginUser";
import CreateUser from "./Components/CreateUser/CreateUser";
import Success from "./Components/Error/Success";
import Error from "./Components/Error/Error";
export default class App extends Component{

 
  render()
   {
     const{store}=this.props 
     
     return(
      <>
        <Routes>
          <Route exact path="/" element={<LoginUser/>}/>
          <Route exact path="/Create" element={<CreateUser/>}/>
          <Route exact path="/Home" element={<Home store={store}/>}/>
          <Route exact path="/Allhabits" element={<Habits store={store}/>}/>
          <Route exact path="/Create_Curated_Paths" element={<Paths store={store}/>}/>
          <Route exact path="/Details/:id" element={<Details store={store}/>}/>
          <Route exact path="/Success/:msg/:path" element={<Success/>} />
          <Route exact path="/Error/:msg/:path" element={<Error />}/>



          
          
          </Routes>  
      </>


     )
   
    
 
   }
     
   
   

}

