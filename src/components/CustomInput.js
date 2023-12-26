import React from 'react'
import "../App.css"

function CustomInput({placeholder, type, onChange}) {
    return (
        <input onChange={onChange} type={type} className='inputStyle' style={{ backgroundColor: '#FAFAFA', width: '95%', borderRadius: 5, outline: 'none', boxShadow: 'none', color: "#000000", padding: 10}} placeholder={placeholder} />
    )
}

export default CustomInput