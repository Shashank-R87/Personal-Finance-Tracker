import React from 'react'
import "../App.css"

function SubButton({content, onClick}) {
  return (
    <button onClick={onClick} className='buttonStyle' style={{ border: 'none', fontFamily: "Poppins", color: '#007AFF', backgroundColor: "#F9F6EE"}}>{content}</button>
  )
}

export default SubButton