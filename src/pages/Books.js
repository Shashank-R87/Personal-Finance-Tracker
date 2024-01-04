import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import bg1 from "../assets/blob-scene-haikei-3.png"
import { onAuthStateChanged } from 'firebase/auth'
import auth from '../firebase'
import Loading from '../lottie/Loading'
import Log from '../components/Log'
import "../App.css"
import FilterButton from '../components/FilterButton'
import DownloadButton from '../components/DownloadButton'
import { requestBody } from '../functions'

function Books() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const get_logs = () => {
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            fetch(`https://finance-tracker-api-python.vercel.app/get_logs/${user.uid}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(false)
                }
                )
        })
    }

    const get_flogs = (filtertype, label) => {
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            fetch(`https://finance-tracker-api-python.vercel.app/get_flogs/${user.uid}/${filtertype}/${label}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(false)
                }
                )
        })
    }

    const downloadReport = (data) => {
        const currentData = { data: data }
        onAuthStateChanged(auth, (user) => {
            fetch(`https://finance-tracker-api-python.vercel.app/report_download/${user.uid}`, requestBody(currentData))
                .then((res) => res.blob())
                .then((blob) => {
                    var url = window.URL.createObjectURL(blob);
                    var a = document.createElement('a');
                    a.href = url;
                    a.download = "Your Logs.csv";
                    document.body.appendChild(a);   
                    a.click();
                    a.remove();
                })
        })
    }

    const bookMark = (key) => {
        setLoading(true)
        onAuthStateChanged(auth, (user)=>{
            fetch(`https://finance-tracker-api-python.vercel.app/bookmark/${user.uid}/${key}`)
            .then((res)=>res.json())
            .then((data)=>{
                get_logs()
                setLoading(false)
            })
        })
    }

    useEffect(() => {
        get_logs()
    }, [])

    return (
        <div style={{ backgroundImage: `url(${bg1})`, width: "100vw", minHeight: "100vh", backgroundRepeat: 'repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: "column", gap: 20 }}>
            <Navbar />
            <div style={{ width: "98%", display: "flex", justifyContent: "end", alignItems: 'center', gap: 20 }}>
                <DownloadButton onClick={() => { downloadReport(data) }} />
                <FilterButton onChange={(e) => {
                    if (e == null) {
                        get_logs()
                    }
                    else {
                        get_flogs(e.value, e.label)
                    }
                }} />
            </div>
            {
                loading ?
                    <Loading />
                    :
                    <div className='Logs' style={{ width: "100%", marginBottom: 10, display: 'flex', gap: 10, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                        {
                            data?.status_code === 404 ?
                                <div style={{ backgroundColor: 'white', width: "95%", padding: 30, borderRadius: 10, marginBottom: 10, display: 'flex', gap: 20, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                                    <h1 style={{ fontFamily: "Poppins", fontSize: 38, color: "grey" }}>{data.data}</h1>
                                </div>
                                :
                                data?.map(item =>
                                    <Log data={item} key={item.key} onClick={()=>{bookMark(item.key)}} />
                                )
                        }
                    </div>
            }
        </div>
    )
}

export default Books