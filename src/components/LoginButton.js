import React from 'react'
import "../App.css"

function LoginButton({ content, onClick }) {
    return (
        <button onClick={onClick} className='buttonStyle' style={{ backgroundColor: "#007AFF", border: 'none', width: "100%", borderRadius: 5, padding: 8, fontFamily: "Poppins", color: 'white'}}>{content}</button>
    )
}

export default LoginButton