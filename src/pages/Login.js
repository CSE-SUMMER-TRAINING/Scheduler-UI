import { React, useState } from "react";
import "../bootstrap/css/bootstrap.css";
import login from "../images/Schedule-amico.png";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { ShareState } from "../ShareProvider";

export default function Login() {
	const [path, setPath] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const { setUser } = ShareState();

	const submitHandler = async () => {
		const logData = { email, password };

		try {
			const { data } = await axios.post("api/user/login", logData);

			setError(null);
			setEmail("");
			setPassword("");
			setUser(data);

			// redirect
			if (data.user.priority === 0) {
				setPath('/main');
			}
			else if (data.user.priority === 1) {
			}

		}
		catch (err) {
			const { error } = err.response.data;
			setError(error);
		}
	};

	return (
		<div className="login" dir="rtl">
			<div className=" row m-5 justify-content-around">
				{/* for text body */}
				<div className="col-lg-6 col-12 m-md-0 text-center" id="body-text">
					<h1 className="text-center font-weight-bold header">تسجيل الدخول</h1>
					<div>
						<form className="text-center">
							<input
								type="text"
								className="form-control shadow-none inputText mx-auto"
								placeholder="البريد الالكتروني"
								id="person_email"
								value={email}
								required
								onChange={(e) => setEmail(e.target.value)}
							></input>
							<input
								type="password"
								className="form-control shadow-none inputText mx-auto"
								placeholder="كلمة المرور"
								id="person_pass"
								value={password}
								required
								onChange={(e) => setPassword(e.target.value)}
							></input>
							
							{error && <div className="text-danger">{error}</div>}
							
							<Link
								type="submit"
								className="btn text-light button mt-3 px-5"
								id="btn"
								onClick={submitHandler}
								to={path}
							> دخول </Link>
						</form>
					</div>
				</div>
				{/* for image */}
				<div className="col-lg-6 d-none d-lg-block image" id="photo">
					<img src={login} className="img-fluid" alt="" />
				</div>
			</div>
			<div className="container mb-5 d-flex justify-content-center">
				<i className="fa-solid fa-circle-exclamation fa-2xl text-danger d-flex align-items-center"></i>
				<span className="text-right  pr-2 ">
					في حالة عدم تذكُّر البريد الإلكتروني أو كلمة المرور الخاص بك، عليك التوجه إلي وحدة
					تكنولوجيا المعلومات
				</span>
			</div>
		</div>
	);
}

// #0F73EE
