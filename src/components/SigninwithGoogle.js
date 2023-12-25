import React from 'react'
import GoogleLogo from "../assets/google.png"
import "../App.css"

function SigninwithGoogle() {
  return (
    <button className='buttonStyle' style={{ backgroundColor: "#F9F6EE", width: "100%", borderRadius: 5, fontFamily: "Poppins", display: "flex", justifyContent: 'center', alignItems: 'center', padding: 8, gap: 20, border: "1px solid rgb(0,0,0,0.50)"}}>
        <img width={24} height={24} alt='Google Logo' src={GoogleLogo}/>
        <h1 style={{fontSize: 18, fontWeight:400}}>Continue with Google</h1>
    </button>
  )
}

export default SigninwithGoogle