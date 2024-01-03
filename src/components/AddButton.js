import React from 'react'
import Add from "../assets/add.png"
import "../App.css"

function AddButton({onClick}) {
    return (
        <button onClick={onClick} className='buttonStyle' style={{ border: 0, backgroundColor: 'white', borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center" }} >
            <img style={{ width: 32, height: 32 }} src={Add} />
        </button>
    )
}

export default AddButton