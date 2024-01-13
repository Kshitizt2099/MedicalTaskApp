import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { REMOVESTATUS, UPDATESTATUS } from '../../Redux/action'
import WeekView from '../WeekView/WeekView'
import "./Details.css"
import db from '../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'

const Details = (props) => {
  const{store}=props
    const [week,setweek]=useState([])
    const [render,setrender]=useState(0)
    const[curr,setCurr]=useState([]);
    const{id}=useParams();
    let habitname;
    useEffect(()=>{
 
      
      const gethabit=async()=>{
        console.log("just a dream force render")
        if(JSON.parse(localStorage.getItem("curr_user"))==undefined || JSON.parse(localStorage.getItem("curr_user"))==null)
        {
          return;
        }
        const u_id= JSON.parse(localStorage.getItem("curr_user")).id
        
        const usercollection=collection(db,"Users")
        const allusers=await getDocs(usercollection);
        let users=allusers.docs.map((doc)=>{
              return {...doc.data(),id:doc.id}
            


      
           } );

        let habits;
           for(let i=0;i<users.length;i++)
           {
            
             if(users[i].id===u_id)
             {
              
                 habits=users[i].Habits; 
                 break;
             }
           }
          

           setCurr(habits.filter((i)=>i.hid==id))
           setweek(habits.filter((i)=>i.hid==id)[0].week)
       

      }
      
      gethabit()
      
      
    },[render])
    
  


    
    const status=(index,dayid)=>{
      console.log(index)
      store.dispatch(UPDATESTATUS(index,dayid,curr))
       store.subscribe(()=>{ setrender(render+1)
      
        setrender(render+1);
        setrender(render+1);
        setrender(render+1);
        
  
      
      })
      
      // store.dispatch(UPDATESTATUS(index,dayid,curr[0].week,curr[0].done,curr[0].status))
      // console.log("here",store.getState())
      // const newdata=store.getState()
      // const currday=newdata.filter(i=>(i.hid==id))
      
      // const curweek=currday[0].week
      // console.log("currweek",curweek)
     
      // store.subscribe(()=>{setweek(curweek)})
      // console.log("week",week)
     
      
    }
    const reducestatus=(index,dayid)=>{
      //it is hid
      console.log(index)
      store.dispatch(REMOVESTATUS(index,dayid,curr))
       store.subscribe(()=>{ setrender(render+1)})

      // store.subscribe(()=>{ setrender(render+1)})
      // store.dispatch(REMOVESTATUS(index,dayid))
      // console.log(store.getState())
      // const newdata=store.getState()
      // const currday=newdata.filter(i=>(i.hid==id))
      
      // const curweek=currday[0].week
      // store.subscribe(()=>{setweek(curweek)})
      // console.log("currweek",curweek)
     
      
      // console.log("week",week)
      // console.log("comehere")
      setrender(render+1);
    }
    const loggedin=JSON.parse(localStorage.getItem("curr_user"))?true:false;
    console.log(render,curr)
    
    //{week.map((i)=>(<WeekView key={i.did} data={i} status={status} id={id} reducestatus={reducestatus}/>))}
  return (
    <>
     { loggedin?curr.length===0 ?"Not cb":<div>
     <div className='header'>
    <Link to="/AllHabits"><img  height={30} width={30} src="https://cdn-icons-png.flaticon.com/512/467/467274.png"/></Link>
     
      <div className='rightcard'>
      
      <h4>{curr[0].name}</h4>
      <h4>{curr[0].done}/7</h4>
      <h4>% Completion {parseInt(curr[0].done*100/7)}</h4>
      </div>
      
    </div>

<div className='View'>
     
       
       <div className='habitsView'>
         {week.map((i)=>(<WeekView key={i.did} data={i} status={status} id={id} reducestatus={reducestatus}/>))}  
           </div>
       
    </div>
   




     </div>:<Navigate to="/Error/Please Login/Login"/>

     }
    </>
  
  )
}

export default Details
