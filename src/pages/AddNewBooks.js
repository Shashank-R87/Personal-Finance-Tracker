import React from 'react'
import bg1 from "../assets/blob-scene-haikei-3.png"
import Navbar from '../components/Navbar'

function AddNewBooks() {
    return (
        <div style={{ backgroundImage: `url(${bg1})`, width: "100vw", height: "100vh", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: "column", gap: 20 }}>
            <Navbar />
            <div style={{ backgroundColor: 'white', width: "95%", padding: 30, borderRadius: 10, marginBottom: 10, display: 'flex', gap: 20, flexDirection: "column" }}>
                Add New Books
            </div>
        </div>
    )
}

export default AddNewBooks