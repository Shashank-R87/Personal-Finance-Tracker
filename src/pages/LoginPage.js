import React, { useState } from 'react'
import bg1 from "../assets/blob-scene-haikei-2.png"
import CustomInput from '../components/CustomInput'
import LoginButton from '../components/LoginButton'
import SubButton from '../components/SubButton'
import SigninwithGoogle from '../components/SigninwithGoogle'
import Loading from "../lottie/Loading"
import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import auth from '../firebase'

function LoginPage() {


	const navigate = useNavigate();
	const provider = new GoogleAuthProvider();

	const [loading, setLoading] = useState(false);
	const [userDetails, setUserDetails] = useState({ email: "", password: "" });

	const login = () => {
		setLoading(true);
		signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
			.then(() => {
				navigate("/dashboard", { replace: true });
			})
			.catch((error) => {
				alert(error.message)
				setLoading(false);
			})
	}

	const continuewithGoogle = () => {
		setLoading(true);
		signInWithPopup(auth, provider)
			.then(() => {
				navigate("/dashboard", { replace: true });
			})
			.catch((error) => {
				alert(error.message)
				setLoading(false);
			})
	}


	return (
		<div style={{ backgroundImage: `url(${bg1})`, width: "100vw", height: "100vh", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			{
				loading ?
					<Loading />
					:
					<div style={{ width: 500, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, backgroundColor: "#F9F6EE", flexDirection: 'column', padding: 30, boxShadow: "10px 10px 100px rgb(0,0,0,0.30)" }}>
						<CustomInput width={"95%"} onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }} type={'email'} placeholder={"Email"} />
						<CustomInput width={"95%"} onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }} type={"password"} placeholder={"Password"} />
						<LoginButton content={"Login"} onClick={() => { login() }} />
						<div style={{ width: "95%", display: "flex", justifyContent: "space-between", alignItems: 'center', padding: 10 }}>
							<h1 style={{ fontSize: 18, fontWeight: 400 }}>Don't have an account?</h1>
							<SubButton onClick={() => { navigate("/signup", { replace: true }) }} content={"Create new account"} />
						</div>
						<SigninwithGoogle onClick={()=>{continuewithGoogle()}} />
					</div>
			}
		</div>
	)
}

export default LoginPage