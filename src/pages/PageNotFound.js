import React from 'react'
import bg1 from "../assets/stacked-waves-haikei.png"

function PageNotFound() {
  return (
    <div style={{ backgroundImage: `url(${bg1})`, width: "100vw", height: "100vh", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{color: 'white', fontWeight: 900, fontSize: 200}}>404</h1>
        <h1 style={{color: 'white'}}>Page Not Found</h1>
    </div>
  )
}

export default PageNotFound