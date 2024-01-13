import React from 'react'
import './Weekview.css'
const WeekView = (props) => {
    const status=props.status
    const reducestatus=props.reducestatus
    const id=props.id
    const data=props.data
  return (
    <div className={data.status=="Done"?"circle":"week"}>
      <b><p>{data.date}</p></b>
      <b><p>{data.day}</p></b> 
      <p>{data.status==="Done"?<img  height={40} width={60} src="https://img.freepik.com/premium-vector/thumbs-up-hand_1056-764.jpg?w=740"/>:<img  height={30} width={30} src="https://img.freepik.com/premium-vector/crying-emoji-sad-round-yellow-face-with-tear-dropping-isolated-white-background_53562-14280.jpg?size=626&ext=jpg"/>}</p>
      <img className="correct" onClick={()=>{status(id,data.did)}} height={30} width={30} src='https://img.freepik.com/free-vector/green-double-circle-check-mark_78370-1749.jpg?w=740&t=st=1692893249~exp=1692893849~hmac=02dfae727c2dd5e5c998d17e56e8cc3c969ad17a4902611e526469da08057332'/>
      <img className="incorrect" onClick={()=>{reducestatus(id,data.did)}} height={30} width={30} src='https://img.freepik.com/free-psd/x-symbol-isolated_23-2150500369.jpg?w=740&t=st=1692895500~exp=1692896100~hmac=87ad792f1f8ea150502226c5e687cfdadbfa60fc900893a1c4723da4de83df92'/>
     
    </div>
  )
}

export default WeekView
