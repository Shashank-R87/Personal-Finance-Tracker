import React from 'react'
import "../App.css"
import NavBarButton from './NavBarButton'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

    const navigateonClick = (value) => {
        navigate(`/${value}`, { replace: true })
    }

    return (
        <div className='NavBar' style={{ width: "95%", backgroundColor: 'white', display: "flex", justifyContent: 'space-around', alignItems: "center", borderRadius: 10, padding: "20px 30px 20px 30px" }}>
            <NavBarButton id={"addnewbook"} content={"Add New Books"} onClick={(e) => { navigateonClick(e.target.id) }} />
            <NavBarButton id={"profile"} content={"Profile"} onClick={(e) => { navigateonClick(e.target.id) }} />
            <NavBarButton id={"books"} content={"Books"} onClick={(e) => { navigateonClick(e.target.id) }} />
            <NavBarButton id={"settings"} content={"Settings"} onClick={(e) => { navigateonClick(e.target.id) }} />
        </div>
    )
}

export default Navbar