import React from 'react'
import bg1 from "../assets/blob-scene-haikei-3.png"
import auth from '../firebase'

function Dashboard() {

  const user = auth.currentUser;
  
  return (
    <div style={{ backgroundImage: `url(${bg1})`, width: "100vw", height: "100vh", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
      <h1 style={{ color: 'white' }}>Dashboard</h1>
      <h1 style={{ color: 'white' }}>Display Name: {user.displayName}</h1>
      <h1 style={{ color: 'white' }}>UID: {user.uid}</h1>
      <h1 style={{ color: 'white' }}>Email: {user.email}</h1>
    </div>
  )
}

export default Dashboard