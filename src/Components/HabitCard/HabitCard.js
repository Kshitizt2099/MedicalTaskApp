import { Component } from "react"
import React from 'react'
import "./HabitCard.css"
//import { DELDATA } from "../../Redux/action"
import { Link } from "react-router-dom"

/*const HabitCard = (props) => {
    const data=props.data
    const del=(data)=>{
       

    }
  return (
    <div className='card'>
       <p>{data.name}</p>
       <p>{data.done}/7</p>
       <button>Details</button>
       <button onClick={()=>{del(data)}}>Delete</button>
    </div>
  )
}

*/


class HabitCard extends Component{


  render()
  {
    console.log("rerendred")
    const {store}=this.props
    const {data}=this.props
    const{del}=this.props
    console.log(data)
    return(
      <>
      
       <div className='card'>
         
      
            
         <b><p>Title:{data.name}</p></b>
         <b><p>Streak:{data.done}/7</p></b>
         <Link to={`/Details/${data.hid}`}> <img className="left" width={40} height={40} src="https://img.freepik.com/free-vector/illustration-touch-screen-hand-gesture_53876-5608.jpg?w=740&t=st=1692952182~exp=1692952782~hmac=c6e20b8041586674e821aa7c3b00d952b2a1019cdbc78df1def6044a55bc320c"/></Link>
       
        <img  className="right "onClick={()=>{del(data);}} width={40} height={35} src="https://img.freepik.com/free-vector/illustration-trash-bin-icon_53876-5598.jpg?w=740&t=st=1692952025~exp=1692952625~hmac=6b693bb0651f67f3dadbf4f4a5f7f6bdcaa71427223ae3d0da6d86d1b14b61ff"/>
      </div>
      </>
       
    )
  }

}
export default HabitCard