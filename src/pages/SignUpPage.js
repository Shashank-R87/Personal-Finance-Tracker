import React from 'react'
import CustomInput from '../components/CustomInput'
import LoginButton from '../components/LoginButton'
import SubButton from '../components/SubButton'
import SigninwithGoogle from '../components/SigninwithGoogle'
import bg1 from "../assets/blob-scene-haikei-1.png"
import { useNavigate } from 'react-router-dom'

function SignUpPage() {

    const navigate = useNavigate();

    return (
        <div style={{ backgroundImage: `url(${bg1})`, width: "100vw", height: "100vh", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: 500, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, backgroundColor: "#F9F6EE", flexDirection: 'column', padding: 30, boxShadow: "10px 10px 100px rgb(0,0,0,0.30)" }}>
                <CustomInput type={"text"} placeholder={"Full Name"} />
                <CustomInput type={"email"} placeholder={"Email"} />
                <CustomInput type={"text"} placeholder={"Book Name"} />
                <CustomInput type={"password"} placeholder={"Password"} />
                <LoginButton content={"Signup"} onClick={() => { }} />
                <div style={{ width: "95%", display: "flex", justifyContent: "space-between", alignItems: 'center', padding: 10 }}>
                    <h1 style={{ fontSize: 18, fontWeight: 400 }}>Already have an account?</h1>
                    <SubButton onClick={()=>{navigate("/login", {replace: true})}} content={"Login"} />
                </div>
                <SigninwithGoogle />
            </div>
        </div>
    )
}

export default SignUpPage