import React from 'react'
import "../App.css"

function NavBarButton({content, onClick, id}) {
  return (
    <button id={id} onClick={onClick} className='buttonStyle NavBarButtonStyle' style={{fontFamily: "Poppins", fontSize: 18, fontWeight: 400, outline: 'none', boxShadow: 'none', border: 'none', backgroundColor: 'white', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        {content}
    </button>
  )
}

export default NavBarButton