import React from 'react'
import DeleteButton from './DeleteButton'

function GoalCard({ data, condition, onClick }) {
    return (
        <div style={{ backgroundColor: 'white', borderRadius: 10, display: 'flex', boxShadow: "1px 1px 10px rgba(0,0,0,0.15)", padding: 10, justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: 'flex', justifyContent: "start", alignItems: "center", flexGrow: 1, gap: 20 }}>
                <div style={{ backgroundColor: condition? "green" : "red", width: 5, height: 25, borderRadius: 10 }}></div>
                <h1 style={{ fontFamily: "Poppins", fontSize: 18, fontWeight: 400, maxWidth: 100, minWidth: 100 }}>{data.goalName}</h1>
                <h1 style={{ fontFamily: "Poppins", fontSize: 18, fontWeight: 400, maxWidth: 100, minWidth: 100 }}>₹ {data.goalAmount}</h1>
            </div>
            <DeleteButton onClick={onClick} />
        </div>
    )
}

export default GoalCard