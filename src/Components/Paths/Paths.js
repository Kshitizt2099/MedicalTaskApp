import React, { useState } from 'react'
import { ADDDATA, ADDMULTIPLES } from '../../Redux/action';
import { Link } from 'react-router-dom';
import './Paths.css'
const Paths = (props) => {
    const[disease,setdisease]=useState("Heart")
    const [render,setrender]=useState(0);
    const choose=(e)=>{
       setdisease(e.target.value);
    }
    const addMultiples=async()=>{
        const data=JSON.parse()
    }
    const add=()=>{
        
        const {store}=props
         let heart_execises=["walking", "swimming", "light jogging"]
         let Knee_execises=["Knee extension", "Straight leg raise ", "Leg curl"]
         let dib_execises=["Brisk Walking", ",Yoga ", "Climb Stairs"]
         let Liver=["Regular exercise for 150 minutes","tai chi","No Smoking"]
         console.log(disease)
        if(disease==="Heart")
        {
        
            store.dispatch(ADDMULTIPLES(heart_execises));
           
          
        }
        else if(disease==="Knee")
        {
            console.log(disease)
            Knee_execises.forEach((i)=>{
                store.dispatch(ADDMULTIPLES(i))
            })
        }
        else if(disease==="Diabetes")
        {
            console.log(disease)
            dib_execises.forEach((i)=>{
                store.dispatch(ADDMULTIPLES(i))
            })
        }
        else if(disease==="Liver")
        {
            console.log(disease)
            Liver.forEach((i)=>{
                store.dispatch(ADDMULTIPLES(i))
            })
        }
        
      }
  return (
    <div className='Paths'>
           <div className="Navbar">
        <Link to="/Home"><img className="nav" width={30} height={30} src="https://cdn-icons-png.flaticon.com/512/467/467274.png" alt='"Back'/></Link>
      </div>
  
      <div className='Issue'>
      <label for>Choose a Issue:</label>

<select onChange={choose}>
  <option value="Heart">Heart</option>
  <option value="Liver">Liver</option>
  <option value="Knee">Knee</option>
  <option value="Diabetes">Diabetes</option>
</select>


<Link to="/Success/Path created/Allhabits"><button onClick={add}>Create Tasks</button></Link>
      </div>
    
    </div>
  )
}

export default Paths
