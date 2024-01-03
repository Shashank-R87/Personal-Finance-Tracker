import React, { useState } from 'react'
import CloseButton from './CloseButton'
import CustomInput from './CustomInput'
import LoginButton from './LoginButton'
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../firebase';
import { requestBody } from '../functions';

function CreateGoal({ onClick }) {

    const [goal, setGoal] = useState({ goalName: "", goalAmount: "" });

    const set_goal = (goal) => {
        onAuthStateChanged(auth, (user)=>{
            fetch(`http://localhost:8000/set_goal/${user.uid}`, requestBody(goal))
            .then(res => {
                if (!res.ok) {
                    return res.json()
                        .then((e) => {
                            alert(e.detail)
                        })
                }
                else {
                    window.location.reload()
                }
            })
        })
    }

    return (
        <div style={{ width: "100vw", height: "100vh", position: "fixed", backgroundColor: "rgba(49,49,49,0.8)", top: 0, left: 0, zIndex: 10, display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <div style={{ backgroundColor: 'white', padding: "20px 30px", display: 'flex', justifyContent: "space-between", alignItems: 'center', borderRadius: 10, minWidth: 500, flexDirection: "column", gap: 10 }}>
                <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: "space-between", alignItems: 'center', width: "100%", marginBottom: 20}}>
                    <h1 style={{fontFamily: "Poppins", fontWeight: 600, fontSize: 38, flexGrow: 1}}>Create a goal</h1>
                    <CloseButton onClick={onClick}/>
                </div>
                <CustomInput onChange={(e)=>{setGoal({...goal, goalName: e.target.value})}} width={"95%"} placeholder={"Goal Name"} />
                <CustomInput onChange={(e)=>{setGoal({...goal, goalAmount: e.target.value})}} width={"95%"} placeholder={"Amount"} />
                <LoginButton onClick={()=>{set_goal(goal)}} content={"Save"}/>
            </div>
        </div>
    )   
}

export default CreateGoal