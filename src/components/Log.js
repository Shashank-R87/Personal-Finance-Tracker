import React from 'react'
import BookmarkButton from './BookmarkButton'

function Log({data, onClick}) {
  return (
    <div style={{backgroundColor: 'white',width: "95%", padding: "20px 30px", borderRadius: 10,display: "flex", justifyContent: 'start', alignItems: 'center', gap: 40}}>
        <div style={{backgroundColor: data.t === "cashin"? "green":"red", width: 5, height: 25, borderRadius: 10}}></div>
        <h1 style={{fontFamily: "Poppins", fontWeight: 400, fontSize: 18, minWidth: 150}}>{data?.title}</h1>
        <h1 style={{fontFamily: "Poppins", fontWeight: 400, fontSize: 18, minWidth: 150}}>₹ {data?.amount}</h1>
        <h1 style={{fontFamily: "Poppins", fontWeight: 400, fontSize: 18, minWidth: 150}}>{data?.category}</h1>
        <h1 style={{fontFamily: "Poppins", fontWeight: 400, fontSize: 18, minWidth: 150}}>{data?.payment_mode}</h1>
        <h1 style={{fontFamily: "Poppins", fontWeight: 400, fontSize: 18, minWidth: 150}}>{data?.date}</h1>
        <h1 style={{fontFamily: "Poppins", fontWeight: 400, fontSize: 18, minWidth: 150}}>{data?.time}</h1>
        <BookmarkButton condition={data.marked} onClick={onClick}/>
    </div>
  )
}

export default Log