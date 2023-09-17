import { React, useContext, useEffect, useState } from "react"
import "../bootstrap/css/bootstrap.css"
import Header from "./Header"
import login from "../images/Schedule-amico.png"
import { Box, SimpleGrid } from "@chakra-ui/react"
import "./Main.css"
import { ShareState } from "../ShareProvider"
import axios from "axios"
import EnterData from "./EnterData"
export default function Main() {
	const { user, setUser } = ShareState()
	console.log(user)

	const [data, setData] = useState([])
	const Go = async () => {
		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		}

		const { data } = await axios.get("api/superAdmin/isVote", config)
		console.log(data)
		if (data.hasVote) {
			// ==>
		} else {
			//<EnterData/>
			// ==>
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
						<img src={login} className="img-fluid" />
					</div>
				</div>
			</div>
		</div>
	)
}
