import React, { useEffect, useState } from 'react'
import HabitCard from '../HabitCard/HabitCard'
import { DELDATA } from '../../Redux/action'
import { Link, Navigate } from 'react-router-dom'
import "./Habits.css"
import db from '../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'
const Habits = (props) => {
    let store=props.store
    const[arr,setarr]=useState([])
    const[render,setrender]=useState(0);
    useEffect(()=>{

      const Gethabits=async()=>{
        if(JSON.parse(localStorage.getItem("curr_user"))===undefined || JSON.parse(localStorage.getItem("curr_user"))==null)
        {
          return;
        }
        const id= JSON.parse(localStorage.getItem("curr_user")).id
       
        const usercollection=collection(db,"Users")
        const allusers=await getDocs(usercollection);
        let users=allusers.docs.map((doc)=>{
              return {...doc.data(),id:doc.id}
            


      
           } );

        let habits;
           for(let i=0;i<users.length;i++)
           {
            
             if(users[i].id===id)
             {
              
                 habits=users[i].Habits; 
                 break;
             }
           }
           setarr(habits)
         
       }
       
       Gethabits()
       
     

    },[render])

    const del=(data)=>{
      console.log(data,"habits")
      
     
      store.dispatch(DELDATA(data,arr));
      setrender(render+1);
      
    
     
      
      
  }
 
  const loggedin=JSON.parse(localStorage.getItem("curr_user"))?true:false;
  
  return (
    <>
     {

                loggedin? 
                 <div>
                  <div className="Navbar">
                <Link to="/Home"><img className="nav" width={30} height={30} src="https://cdn-icons-png.flaticon.com/512/467/467274.png" alt='"Back'/></Link>
              </div>
          
             <div className='HabitContainer'>
             
             {arr.length===0?"No elements":arr.map((i)=>{return <HabitCard key={i.hid} store={store} data={i} del={del}/>})}
           </div>

                 </div>
                :<Navigate to="/Error/Please Login/Login"/>



     }
    </>
   
  )
}

export default Habits
