import React, { useState } from 'react'
import { addDoc, collection,getDocs } from 'firebase/firestore'
import './Create.css'
import db from '../../firebase/firebase'
import { Navigate } from 'react-router-dom'
const CreateUser = () => {
    let initial={
        Name:"",
        Habits:[],
        Phoneno:"",
        Password:""

    }
    let initialconfig={
       Created:false,
       Process:false
    }
    const[data,setdata]=useState(initial);
    const[created,setcreated]=useState(initialconfig)
    const CreateUser=async(e)=>{


        const usercollection=collection(db,"Users");

        e.preventDefault();

        const allUsers=await getDocs(usercollection);

        let temp=allUsers.docs.map((doc)=>{
            return {...doc.data(),id:doc.id}
          

          });
        for(let i=0;i<temp.length;i++)
        {
            if(temp[i].Phoneno===data.Phoneno)
            {
                setcreated({Created:false,Process:true});
                return;
            }
        }
        await addDoc(usercollection,data);
        setcreated({Created:true,Process:true});

    }

  return (
    <div className='Create_Body'>
       <div className="create-container">
    <h1>User Account Creation </h1>
    <form>
        
        <input className='Field' type="text" name="name" placeholder="Username" onChange={(e)=>{setdata({...data,Name:e.target.value})}} required/>
       
        <input className='text' type="text" name="text" placeholder="Phone Number" onChange={(e)=>{setdata({...data,Phoneno:e.target.value})}}required/>
        <input className='Field' type="password" name="password" onChange={(e)=>{setdata({...data,Password:e.target.value})}} placeholder="Password" required/>
        <input onClick={(e)=>{CreateUser(e)}} className="submit" type="submit" value="Create"/>
    </form>
</div>
        {created.Created===true?<Navigate to="/Success/AccountCreated/Login"/>:created.Process===true?<Navigate to="/Error/Please chooose another Phone Number/Create"/>:""}

    </div>
   
  )
}

export default CreateUser
