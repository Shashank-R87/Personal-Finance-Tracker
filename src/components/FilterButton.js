import React from 'react'
import Select from 'react-select'

function FilterButton({ onChange }) {

    const custonStyle = {
        control: (styles) => ({ ...styles, border: 0, outline: 0, boxShadow: 'none' }),
        placeholder: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: 'black',
            }
        }
    }

    const options = [
        {
            label: "Category",
            options: [
                { value: "category", label: "Shopping" },
                { value: "category", label: "Education" },
                { value: "category", label: "Entertainment" },
                { value: "category", label: "Self" }
            ]
        },
        {
            label: "Payment Mode",
            options: [
                { value: "payment_mode", label: "UPI" },
                { value: "payment_mode", label: "Debit Card" },
                { value: "payment_mode", label: "Credit Card" },
                { value: "payment_mode", label: "Internet Banking" },
                { value: "payment_mode", label: "Cash" }
            ]
        },
        {
            label: "Type",
            options: [
                { value: "t", label: "cashin" },
                { value: "t", label: "cashout" },
            ]
        },
        {
            label: "Bookmarked",
            options: [
                { value: "marked", label: "true" },
                { value: "marked", label: "false" },
            ]
        },
    ];

    return (
        <div style={{ backgroundColor: "white", marginTop: 10, width: 300, borderRadius: 10, padding: 10 }}>
            <Select isClearable placeholder="All" options={options} styles={custonStyle} onChange={onChange} />
        </div>
    )
}

export default FilterButton