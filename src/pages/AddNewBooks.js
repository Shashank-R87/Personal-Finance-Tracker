import React, { useEffect, useState } from 'react'
import bg1 from "../assets/blob-scene-haikei-3.png"
import Navbar from '../components/Navbar'
import CustomInput from '../components/CustomInput'
import { requestBody } from '../functions'
import { onAuthStateChanged } from 'firebase/auth'
import auth from '../firebase'
import "../App.css"
import LoginButton from '../components/LoginButton';
import Loading from '../lottie/Loading';
import Select from 'react-select'
import AddButton from '../components/AddButton'
import CreateGoal from '../components/CreateGoal'
import GoalCard from '../components/GoalCard'

function AddNewBooks() {

    const custonStyle = {
        control: (styles, state) => ({
            ...styles, border: 0, outline: 0, boxShadow: 'none',
        }),
        placeholder: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: 'black',
            }
        }
    }

    const [loading, setloading] = useState(false);

    const categoryOptions = [
        { value: 1, label: "Shopping" },
        { value: 2, label: "Education" },
        { value: 3, label: "Entertainment" },
        { value: 4, label: "Self" }]

    const currency_options = [
        { value: "INR", label: "INR" },
        { value: "USD", label: "USD" },
        { value: "EUR", label: "EUR" },
        { value: "GBP", label: "GBP" }]

    const paymentOptions = [
        { value: 1, label: "UPI" },
        { value: 2, label: "Debit Card" },
        { value: 2, label: "Credit Card" },
        { value: 3, label: "Internet Banking" },
        { value: 4, label: "Cash" }]

    const [cashin, setcashin] = useState({ t: "cashin", title: "", amount: "", description: "", category: "", payment_mode: "", time: "", date: "", marked: "false" });
    const [inCurrency, setinCurrency] = useState("INR");
    const [cashout, setcashOut] = useState({ t: "cashout", title: "", amount: "", description: "", category: "", payment_mode: "", time: "", date: "", marked: "false" });
    const [outCurrency, setoutCurrency] = useState("INR");

    const cashIN = async () => {
        setloading(true)
        onAuthStateChanged(auth, (user) => {
            fetch(`https://finance-tracker-api-python.vercel.app/cash/${user.uid}/${inCurrency}`, requestBody(cashin))
                .then(res => {
                    if (!res.ok) {
                        return res.json()
                            .then((e) => {
                                alert(e.detail)
                                setloading(false)
                            })
                    }
                    else {
                        setcashin({ t: "cashin", title: "", amount: "", description: "", category: "", payment_mode: "", time: "", date: "", marked: "false" })
                        get_account_data()
                        get_goals_data()
                        setloading(false)
                    }
                })
        })
    }

    const cashOUT = async () => {
        setloading(true)
        onAuthStateChanged(auth, (user) => {
            fetch(`https://finance-tracker-api-python.vercel.app/cash/${user.uid}/${outCurrency}`, requestBody(cashout))
                .then(res => {
                    if (!res.ok) {
                        return res.json()
                            .then((e) => {
                                alert(e.detail)
                                setloading(false)
                            })
                    }
                    else {
                        setcashOut({ t: "cashout", title: "", amount: "", description: "", category: "", payment_mode: "", time: "", date: "", marked: "false" })
                        get_account_data()
                        get_goals_data()
                        setloading(false)
                    }
                })
        })
    }

    const [accountData, setAccountData] = useState([])
    const get_account_data = async () => {
        setloading(true)
        onAuthStateChanged(auth, (user) => {
            fetch(`https://finance-tracker-api-python.vercel.app/account_data/${user.uid}`)
                .then(r => r.json())
                .then(data => {
                    setAccountData(data)
                    setloading(false)
                })
        })
    }

    const [goals, setGoals] = useState([])
    const get_goals_data = async () => {
        setloading(true)
        onAuthStateChanged(auth, (user) => {
            fetch(`https://finance-tracker-api-python.vercel.app/get_goals/${user.uid}`)
                .then(r => r.json())
                .then(data => {
                    setGoals(data)
                    setloading(false)
                })
        })
    }

    const remove_goal = async (key) => {
        setloading(true)
        onAuthStateChanged(auth, (user) => {
            fetch(`https://finance-tracker-api-python.vercel.app/remove_goal/${user.uid}/${key}`)
                .then(r => r.json())
                .then(data => {
                    get_goals_data()
                    setloading(false)
                })
        })
    }

    useEffect(() => {
        get_account_data()
        get_goals_data()
    }, [])

    const [Modal, setModal] = useState(false);

    return (
        <div style={{ backgroundImage: `url(${bg1})`, width: "100vw", height: "100vh", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: "column", gap: 30 }}>
            <Navbar />
            {
                loading ?
                    <Loading />
                    :
                    <div className='Grid-Cont' style={{ borderRadius: 10, display: 'grid', gap: 30, width: '95%', marginBottom: 20 }}>
                        <div className='cashin' style={{ backgroundColor: 'white', padding: 30, borderRadius: 10, marginBottom: 0, display: 'flex', gap: 20, flexDirection: "column", alignContent: 'center', justifyContent: 'center' }}>
                            <h1 style={{ textAlign: "center", fontFamily: "Poppins", fontWeight: 600, fontSize: 28 }}>Cash In</h1>
                            <CustomInput value={cashin.title} onChange={(e) => { setcashin({ ...cashin, title: e.target.value }) }} placeholder={"Title"} />
                            <div style={{ display: "flex", width: "100%", justifyContent: "start", alignItems: 'center', gap: 5 }}>
                                <Select onChange={(e) => { setinCurrency(e.label) }} styles={custonStyle} defaultValue={currency_options[0]} className='inputStyle' options={currency_options} searchable={true} />
                                <CustomInput value={cashin.amount} onChange={(e) => { setcashin({ ...cashin, amount: e.target.value }) }} placeholder={"Amount"} />
                            </div>
                            <CustomInput value={cashin.description} onChange={(e) => { setcashin({ ...cashin, description: e.target.value }) }} placeholder={"Description"} />
                            <Select onChange={(e) => setcashin({ ...cashin, category: e.label })} styles={custonStyle} placeholder='Category' className='inputStyle' options={categoryOptions} searchable={true} />
                            <Select onChange={(e) => setcashin({ ...cashin, payment_mode: e.label })} styles={custonStyle} placeholder='Payment Mode' className='inputStyle' options={paymentOptions} searchable={true} />
                            <LoginButton onClick={() => { cashIN() }} content={"Save"} />
                        </div>
                        <div className='cashout' style={{ backgroundColor: 'white', padding: 30, borderRadius: 10, marginBottom: 0, display: 'flex', gap: 20, flexDirection: "column" }}>
                            <h1 style={{ textAlign: "center", fontFamily: "Poppins", fontWeight: 600, fontSize: 28 }}>Cash Out</h1>
                            <CustomInput value={cashout.title} onChange={(e) => { setcashOut({ ...cashout, title: e.target.value }) }} placeholder={"Title"} />
                            <div style={{ display: "flex", width: "100%", justifyContent: "start", alignItems: 'center', gap: 5 }}>
                                <Select onChange={(e) => { setoutCurrency(e.label) }} styles={custonStyle} defaultValue={currency_options[0]} className='inputStyle' options={currency_options} searchable={true} />
                                <CustomInput value={cashout.amount} onChange={(e) => { setcashOut({ ...cashout, amount: e.target.value }) }} placeholder={"Amount"} />
                            </div>
                            <CustomInput value={cashout.description} onChange={(e) => { setcashOut({ ...cashout, description: e.target.value }) }} placeholder={"Description"} />
                            <Select onChange={(e) => setcashOut({ ...cashout, category: e.label })} styles={custonStyle} placeholder='Category' className='inputStyle' options={categoryOptions} searchable={true} />
                            <Select onChange={(e) => setcashOut({ ...cashout, payment_mode: e.label })} styles={custonStyle} placeholder='Payment Mode' className='inputStyle' options={paymentOptions} searchable={true} />
                            <LoginButton onClick={() => { cashOUT() }} content={"Save"} />
                        </div>
                        <div className='account' style={{ backgroundColor: 'white', padding: 30, borderRadius: 10, marginBottom: 0, display: 'flex', gap: 20, flexDirection: "column", alignContent: 'start', justifyContent: 'start', gridColumnStart: 2, gridColumnEnd: 2 }}>
                            <h1 style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 38 }}>Your Account</h1>
                            <h1 style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18 }}>Net Balance : ₹ {accountData?.net_balance} </h1>
                            <div style={{ display: 'flex', flexDirection: "row", gap: 5 }}>
                                <h1 style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18 }}>Total In : </h1>
                                <h1 style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18, color: "green" }}> ₹ {accountData?.total_in} </h1>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row", gap: 5 }}>
                                <h1 style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18 }}>Total Out : </h1>
                                <h1 style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18, color: "red" }}> ₹ {accountData?.total_out} </h1>
                            </div>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: 30, borderRadius: 10, marginBottom: 0, display: 'flex', gap: 20, flexDirection: "column", gridRowStart: 2 }}>
                            <div style={{ backgroundColor: 'white', padding: 10, display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                                <h1 style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 38 }}>Your Goals</h1>
                                <AddButton onClick={() => { setModal(true) }} />
                                {
                                    Modal ?
                                        <CreateGoal onClick={() => { setModal(false) }} />
                                        :
                                        <></>
                                }
                            </div>
                            <div className='scroll-hide' style={{ backgroundColor: 'white', display: "flex", flexDirection: "column", gap: 10, maxHeight: 200, overflow: "scroll", padding: "10px 10px" }}>
                                {
                                    goals?.status_code === 404 ?
                                        <div style={{ backgroundColor: 'white', width: "95%", padding: 30, borderRadius: 10, marginBottom: 10, display: 'flex', gap: 20, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                                            <h1 style={{ fontFamily: "Poppins", fontSize: 38, color: "grey" }}>{goals.data}</h1>
                                        </div>
                                        :
                                        goals?.map(goal =>
                                            <GoalCard data={goal} key={goal.key} condition={accountData.net_balance > goal.goalAmount ? true : false} onClick={() => { remove_goal(goal.key) }} />
                                        )
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default AddNewBooks