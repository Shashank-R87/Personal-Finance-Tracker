import React from 'react'
import Close from "../assets/close.png"
import "../App.css"

function CloseButton({onClick}) {
    return (
        <button onClick={onClick} className='buttonStyle' style={{ border: 0, backgroundColor: 'white', borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center" }} >
            <img style={{ width: 32, height: 32 }} src={Close} />
        </button>
    )
}

export default CloseButton