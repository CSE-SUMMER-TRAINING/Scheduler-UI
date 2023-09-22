import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../bootstrap/css/bootstrap.css";
import Header from "./Header";
import login from "../images/Schedule-amico.png";
import "./Main.css";
import { ShareState } from "../ShareProvider";
import axios from "axios";

export default function Main() {
	const { user } = ShareState();
	const [text, setText] = useState("إنشاء تكليف المُلاحظة و المُراقبة");
	const [time, setTime] = useState(null);
	const [path, setPath] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const checkVote = async () => {
			const { data } = await axios.get("api/superAdmin/isVote");
			
			if (data.hasVote) {
				setTime("to calc");
				setText("تكليف مُلاحظة الإمتحانات لعام 2024");
				setPath(null);
			}
			else {
				setTime(null);
				setText("إنشاء تكليف المُلاحظة و المُراقبة");
				setPath('/respMain');
			}
		};
		checkVote();
	}, [user, setText, setTime]);

	return (
		<div class="main" dir="rtl">
			<Header assignment="المسؤول" />
			<div className="d-flex justify-content-center welcome">
				<h1>مرحباً بك</h1>
			</div>
			<div className="container-fluid">
				<div className="row ">
					<div className="col-lg-6 col-12 text-center d-flex flex-column" id="body-text">
						<div
							className="btnhover"
							style={path ? {} : { pointerEvents: 'none' }}
							onClick={() => {
								if (path) navigate(path);
							}}
						>
							{text}
							{!path && <span>{time}</span>}
						</div>
						<div className="btnhover">توزيع الطلاب علي القاعات المُتاحة</div>
					</div>
					<div className="col-lg-6 d-none d-lg-block image" id="photo">
						<img src={login} className="img-fluid" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
