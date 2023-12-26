import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import auth from '../firebase';
import bg1 from "../assets/blob-scene-haikei-3.png"
import LoginButton from '../components/LoginButton';
import Loading from '../lottie/Loading';
import { useNavigate } from 'react-router-dom';

function Profile() {

    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    })

    const logout = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                setTimeout(() => {
                    navigate("/login", { replace: true });
                }, 1000)
            })
            .catch((e) => {
                setLoading(false);
                alert(e)
            })
    }

    return (
        <div style={{ backgroundImage: `url(${bg1})`, width: "100vw", height: "100vh", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: "column", gap: 20 }}>
            <Navbar />
            {
                !loading ?
                    <div style={{ backgroundColor: 'white', width: "95%", padding: 30, borderRadius: 10, marginBottom: 10, display: 'flex', gap: 20, flexDirection: "column" }}>
                        <h1 style={{ fontFamily: "Poppins", fontWeight: 900, fontSize: 32 }}>Profile</h1>
                        <div>
                            <h1 style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18 }}>Name: {user.displayName}</h1>
                            <h1 style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18 }}>UID: {user.uid} </h1>
                            <h1 style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18 }}>Email ID: {user.email}</h1>
                        </div>
                        <LoginButton content={"Logout"} onClick={() => { logout() }} />
                    </div>
                    :
                    <Loading />
            }
        </div>
    )
}

export default Profile