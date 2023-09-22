import { React } from "react"
import "../bootstrap/css/bootstrap.css"
import Header from "./Header"
import login from "../images/Schedule-amico.png"
import "./Main.css"
import { ShareState } from "../ShareProvider"
import axios from "axios"

export default function Main() {
	const { user } = ShareState()

	const Go = async () => {
		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		}

		const { data } = await axios.get("api/superAdmin/isVote", config)
		
		if (data.hasVote) {
			
		} 
		else {

		}
	}

	return (
		<div class="main" dir="rtl">
			<Header assignment="المسؤول" />
			<div className="d-flex justify-content-center welcome">
				<h1>مرحباً بك</h1>
			</div>
			<div class="container-fluid">
				<div class="row ">
					<div className="col-lg-6 col-12 text-center d-flex flex-column" id="body-text">
						<div className="btnhover" onClick={Go}>
							إنشاء تكليف المُلاحظة و المُراقبة
						</div>
						<div className="btnhover">توزيع الطلاب علي القاعات المُتاحة</div>
					</div>
					<div className="col-lg-6 d-none d-lg-block image" id="photo">
						<img src={login} className="img-fluid" alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}
