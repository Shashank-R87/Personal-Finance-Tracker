import React from 'react'
import "../App.css"

function CustomInput({placeholder, type, onChange, value, width}) {
    return (
        <input value={value} onChange={onChange} type={type} className='inputStyle' style={{ backgroundColor: '#FAFAFA', borderRadius: 5, outline: 'none', boxShadow: 'none', color: "#000000", padding: 10, flexGrow: 1, width: width}} placeholder={placeholder} />
    )
}

export default CustomInput