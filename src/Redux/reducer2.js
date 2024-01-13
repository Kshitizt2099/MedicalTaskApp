import { collection, doc ,updateDoc,getDocs} from "firebase/firestore";
import db from "../firebase/firebase";
import { weekdetailcreator } from "./WeekManagement";
import { act } from "react-dom/test-utils";


let initial=[]
if(localStorage.getItem("habits")===undefined || localStorage.getItem("habits")===null)
{
    localStorage.setItem("habits", JSON.stringify(new Array(0)));
    initial=[]
}
else{
    let habits=localStorage.getItem("habits")
    console.log("Habits are from local st", typeof(habits));
    initial=JSON.parse(habits)
}

export function reducer(state=initial,action)
{
     if(action.type==="ADDDATA")
     {
        const id=Math.random()*10;
        const data={
            hid:id,
            name:action.name,        
            done:0,
            total:7,
            week:weekdetailcreator(id)
          
        
        
        }
       
       
        //localStorage.setItem("habits",JSON.stringify(state))
        console.log(action.name)
        const Addtask=async()=>{
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
           habits.push(data);
           console.log(data,habits,id)
           const tar_doc=doc(db,"Users",id);
           await updateDoc(tar_doc,{Habits:habits})

        }

        Addtask()
       
     }
     if(action.type==="DELDATA")
     {
        console.log("inside deldata")
        const element=action.element
        
        const newstate=action.arr.filter((i)=>(element.hid!==i.hid))
        console.log("newstate",newstate)
        localStorage.setItem("habits",JSON.stringify(newstate))
        state=newstate
        const Deltask=async(newstate)=>{
          const id= JSON.parse(localStorage.getItem("curr_user")).id
          const tar_doc=doc(db,"Users",id);
          await updateDoc(tar_doc,{Habits:newstate})

        }
        Deltask(newstate);
        console.log("state",state)
        return state
     }
     if(action.type==="UPDATESTATUS")
     {
      const AddStatus=async()=>{
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

          
          let target_index=habits.findIndex((i)=>action.id==i.hid)
          let curr_habit=habits[target_index]
          if(curr_habit.done<7)
          {
              curr_habit.done+=1;
              let tarday=curr_habit.week.findIndex((i)=>i.did==action.dayid);
              let day=curr_habit.week[tarday]
              if(day.status!=="Done")
              {
                 day.status="Done"
                 curr_habit.week[tarday]=day
              }
              console.log("After")
              console.log(curr_habit.week)
              habits[target_index]=curr_habit
              console.log(habits[target_index])
    
             //   habits.push(data);
             //   console.log(data,habits,id)
             const tar_doc=doc(db,"Users",id);
             await updateDoc(tar_doc,{Habits:habits})
             window.location.reload()

          }
         

      }
       AddStatus();
        
     }
     if(action.type==="REMOVESTATUS")
     {
      const AddStatus=async()=>{
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

          
          let target_index=habits.findIndex((i)=>action.id==i.hid)
          let curr_habit=habits[target_index]
          if(curr_habit.done>=1)
          {
              curr_habit.done-=1;
              let tarday=curr_habit.week.findIndex((i)=>i.did==action.dayid);
              let day=curr_habit.week[tarday]
              if(day.status==="Done")
              {
                 day.status="Notdone"
                 curr_habit.week[tarday]=day
              }
              console.log("After")
              console.log(curr_habit.week)
              habits[target_index]=curr_habit
              console.log(habits[target_index])
    
             //   habits.push(data);
             //   console.log(data,habits,id)
             const tar_doc=doc(db,"Users",id);
             await updateDoc(tar_doc,{Habits:habits})
             window.location.reload()

          }
         

      }
       AddStatus();
      
      }
      
        
      
     if(action.type=="GETHABITS")
     {
      const Gethabits=async(Alllhabits)=>{
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
           Alllhabits=habits
         
       }
       let Alllhabits=[]
       Gethabits(Alllhabits)
       return Alllhabits;

     }
     if(action.type==="ADDMULTIPLEDATA")
     {
        
        
       
        const Addtasks=async()=>{
         const uid= JSON.parse(localStorage.getItem("curr_user")).id
          
         const usercollection=collection(db,"Users")
         const allusers=await getDocs(usercollection);
         let users=allusers.docs.map((doc)=>{
               return {...doc.data(),id:doc.id}
             

 
       
            } );

         let habits;
            for(let i=0;i<users.length;i++)
            {
             
              if(users[i].id===uid)
              {
               
                  habits=users[i].Habits; 
                  break;
              }
            }
           let toaddhabits=action.disease;
           toaddhabits.forEach(element => {
            const id=Math.random()*10;
            const data={
               hid:id,
               name:element,        
               done:0,
               total:7,
               week:weekdetailcreator(id)
             
           
           
           }  
            habits.push(data);
           });
           console.log(habits)
            const tar_doc=doc(db,"Users",uid);
         await updateDoc(tar_doc,{Habits:habits})

        }

       Addtasks()
       
        

      
     }
     return state
}