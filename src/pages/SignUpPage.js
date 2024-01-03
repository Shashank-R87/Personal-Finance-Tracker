import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import LoginButton from '../components/LoginButton'
import SubButton from '../components/SubButton'
import SigninwithGoogle from '../components/SigninwithGoogle'
import bg1 from "../assets/blob-scene-haikei-1.png"
import { useNavigate } from 'react-router-dom'
import auth from "../firebase"
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import Loading from '../lottie/Loading'

function SignUpPage() {

    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const [loading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState({ name: "", email: "", password: "" });

    const createUser = () => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName: userDetails.name })
                    .then(() => {
                        navigate("/dasboard", { replace: true });
                    })
                    .catch((error) => {
                        alert(error.message);
                        setLoading(false);
                    })
            })
            .catch((error) => {
                alert(error.message)
                setLoading(false);
            })
    }

    const createUserGoogle = () => {
        setLoading(true);
        signInWithPopup(auth, provider)
            .then(() => {
                navigate("/dasboard", { replace: true });
            })
            .catch((error) => {
                alert(error.message)
                setLoading(false);
            })
    }

    return (
        <div style={{ backgroundImage: `url(${bg1})`, width: "100vw", height: "100vh", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {
                loading ?
                    <Loading />
                    :
                    <div style={{ width: 500, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, backgroundColor: "#F9F6EE", flexDirection: 'column', padding: 30, boxShadow: "10px 10px 100px rgb(0,0,0,0.30)" }}>
                        <CustomInput width={"95%"} onChange={(e) => { setUserDetails({ ...userDetails, name: e.target.value }) }} type={"text"} placeholder={"Full Name"} />
                        <CustomInput width={"95%"} onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }} type={"email"} placeholder={"Email"} />
                        <CustomInput width={"95%"} onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }} type={"password"} placeholder={"Password"} />
                        <LoginButton content={"Signup"} onClick={() => { createUser() }} />
                        <div style={{ width: "95%", display: "flex", justifyContent: "space-between", alignItems: 'center', padding: 10 }}>
                            <h1 style={{ fontSize: 18, fontWeight: 400 }}>Already have an account?</h1>
                            <SubButton onClick={() => { navigate("/login", { replace: true }) }} content={"Login"} />
                        </div>
                        <SigninwithGoogle onClick={() => { createUserGoogle() }} />
                    </div>
            }
        </div>
    )
}

export default SignUpPage