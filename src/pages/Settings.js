import React from 'react'
import Navbar from '../components/Navbar'
import bg1 from "../assets/blob-scene-haikei-3.png"

function Settings() {
    return (
        <div style={{ backgroundImage: `url(${bg1})`, width: "100vw", height: "100vh", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: "column", gap: 20 }}>
            <Navbar />
            <div style={{ backgroundColor: 'white', width: "95%", padding: 30, borderRadius: 10, marginBottom: 10, display: 'flex', gap: 20, flexDirection: "column" }}>
                Settings
            </div>
        </div>
    )
}

export default Settings