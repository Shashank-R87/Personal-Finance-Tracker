import React from 'react'
import Delete from "../assets/delete.png"
import "../App.css"

function DeleteButton({onClick}) {
    return (
        <div>
            <button onClick={onClick} className='buttonStyle' style={{ border: 0, backgroundColor: 'white', borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center" }} >
                <img style={{ width: 20, height: 20 }} src={Delete} />
            </button>
        </div>
    )
}

export default DeleteButton