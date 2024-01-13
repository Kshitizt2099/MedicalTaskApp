import React from 'react'
import { collection, getDocs, } from 'firebase/firestore';
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
import db from '../../firebase/firebase.js';
import './Login.css'
const LoginUser = () => {
    const[users,setUsers]=useState([]);
   
    //Taking the data as input from inputfiels
    const[After_auth,setAuth] =useState(false);
    const initial_data={
     Name:"",
     Phoneno:"",
     Pass:"",
     found:false
    };
    const[input,setip]=useState(initial_data);

    const navigate=useNavigate();
    useEffect(()=>{
      //can't make callback function async bad practice
      // 1.getDocs return all documents from specific collection
       //getting required  collection from all collections
      const user_collection=collection(db,"Users");
      const getUsers=async()=>{
       
            const allusers=await getDocs(user_collection);
            setUsers(allusers.docs.map((doc)=>{
                   return {...doc.data(),id:doc.id}
                 
  
            }));
           
      } 
      getUsers();
  
    },[])
    const Auth=()=>{
      
        //looping over users to find current User
        setAuth(true);
        for(let i=0;i<users.length;i++)
        {
         
          if(users[i].Name===input.Name && users[i].Phoneno===input.Phoneno && users[i].Password===input.Pass)
          {
           
               setip({...input,found:true});   
               const Name=users[i].Name;
               const id=users[i].id
               localStorage.setItem("curr_user",JSON.stringify({Name,id}))
               return;
          }
        }
       
    };

  return (
    <div className='MainLog'>
          <div className='Login'>
          <div className='Right'>
          
          <div className='login-container'>
          <div className='Welcome'>
             Welcome to Elder Care App
          </div>
            <form onSubmit={Auth}>
            <label>UserName</label><br/>
         <input  className="input" type="text" onChange={(e)=>{setip({...input,Name:e.target.value})}} name="name" required/><br/>
         <label>Phoneno</label><br/>
         <input  className="input" type="text" onChange={(e)=>{setip({...input,Phoneno:e.target.value})}} name="Email" required/><br/>
         <label>Password</label><br/>
         <input  className="input" type="Password" onChange={(e)=>{setip({...input,Pass:e.target.value})}} name="Pass" required/><br/>
         
         <div className='Forgot'>
        
         </div>
          
        <br/>
        
         <button className="sb" type="Submit">Login</button>
        
            </form>
            
            <div>
            <br/>
            <Link to="/Create">Create an account??</Link>
            </div>
            

        {
        
        After_auth===true?input.found===true?navigate('Home'):navigate(`Error/${"No User"}/Login`):
        ""
        
        }

          </div>
       

         </div>
       
          </div>
                   

  
      </div>
      
  )
}

export default LoginUser
