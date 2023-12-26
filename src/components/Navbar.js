import React from 'react'
import "../App.css"
import NavBarButton from './NavBarButton'

function Navbar() {
    return (
        <div className='NavBar' style={{ width: "95%", backgroundColor: 'white', display: "flex", justifyContent: 'space-around', alignItems: "center", borderRadius: 10, padding: "20px 30px 20px 30px" }}>
            <NavBarButton id={"addnewbooks"} content={"Add New Books"} onClick={(e)=>{console.log(e.target.id)}} />
            <NavBarButton id={"profile"} content={"Profile"} onClick={(e)=>{console.log(e.target.id)}} />
            <NavBarButton id={"books"} content={"Books"} onClick={(e)=>{console.log(e.target.id)}} />
            <NavBarButton id={"settings"} content={"Settings"} onClick={(e)=>{console.log(e.target.id)}} />
        </div>
    )
}

export default Navbar