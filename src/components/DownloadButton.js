import React from 'react'
import Download from "../assets/download.png"
import "../App.css"

function DownloadButton({onClick}) {
    return (
        <button onClick={onClick} className='buttonStyle' style={{ border: 0, backgroundColor: 'white', borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 20px", gap: 10 }} >
            <img style={{width: 20}} src={Download} />
            <h1 style={{fontFamily: "Poppins", fontWeight: 400, fontSize: 16}}>Download current log</h1>
        </button>
    )
}

export default DownloadButton