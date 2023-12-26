import React, { useEffect, useState } from 'react'
import bg1 from "../assets/blob-scene-haikei.svg"
import Loading from '../lottie/Loading'
import auth from '../firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

function IntialPage() {

    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setTimeout(() => {
                if (user) {
                    navigate("/profile", { replace: true });
                }
                else {
                    navigate("/signup", { replace: true });
                }
            }, 1000)
        })
    })

    return (
        <div style={{ backgroundImage: `url(${bg1})`, width: "100vw", height: "100vh", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
            <Loading />
        </div>
    )
}

export default IntialPage