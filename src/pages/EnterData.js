import React, { useState } from "react"
import "../bootstrap/css/bootstrap.css"
import Header from "./Header"
import "./EnterData.css"
import { ShareState } from "../ShareProvider"
import axios from "axios"
export default function EnterData() {
	const { user, setUser } = ShareState()
	const [neededHallObservers, setNeededHallObservers] = useState()
	const [neededFloorObservers, setNeededFloorObservers] = useState()
	const [neededBuildingObservers, setNeededBuildingObservers] = useState()
	const [hallObserversWorkDays, setHallObserversWorkDays] = useState()
	const [floorObserversWorkDays, setFloorObserversWorkDays] = useState()
	const [buildingObserversWorkDays, setBuildingObserversWorkDays] = useState()
	const [duration, setduration] = useState()
	const [name, setName] = useState()
	const [daysList, setDaysList] = useState(["11/02/2002"])

	const Go = async () => {
		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		}
		const inData = {
			name,
			neededHallObservers,
			neededFloorObservers,
			neededBuildingObservers,
			hallObserversWorkDays,
			floorObserversWorkDays,
			buildingObserversWorkDays,
			daysList,
			duration,
		}
		const { data } = await axios.post("api/superAdmin/createVote", inData, config)
		console.log(data)
		if (data.hasVote) {
			// ==>
		} else {
			//<EnterData/>
			// ==>
		}
	}

	return (
		<div class="enterdata" dir="rtl">
			<Header assignment="المسوؤل" />
			<div class="container">
				<div className="text-right welcome">
					<h1>برجاء إدخال البيانات الآتية لإنشاء التكليف:</h1>
				</div>
				<form>
					<div class="row">
						<div class="col-md-6">
							<input
								type="text"
								class="form-control shadow-none inputText "
								placeholder="اسم التكليف"
								id="person_email"
								required
								onchange={(e) => setName(e.target.date)}></input>
						</div>
						<div class="col-md-6">
							<input
								type="number"
								class="form-control shadow-none inputText "
								placeholder="المدة الزمنية بالساعات لاختيار الأيام"
								id="person_email"
								required
								onchange={(e) => setduration(e.target.date)}></input>
						</div>
						<div class="col-md-6">
							<input
								type="number"
								class="form-control shadow-none inputText "
								placeholder="عدد مراقبي المباني لليوم"
								id="person_email"
								required
								onchange={(e) => setNeededBuildingObservers(e.target.date)}></input>
						</div>
						<div class="col-md-6">
							<input
								type="number"
								class="form-control shadow-none inputText "
								placeholder="عدد الأيام المطلوبة لمراقب المبني"
								id="person_email"
								required
								onchange={(e) => setBuildingObserversWorkDays(e.target.date)}></input>
						</div>
						<div class="col-md-6">
							<input
								type="number"
								class="form-control shadow-none inputText "
								placeholder="عدد مراقبي الأدوار لليوم"
								id="person_email"
								required
								onchange={(e) => setNeededFloorObservers(e.target.date)}></input>
						</div>
						<div class="col-md-6">
							<input
								type="number"
								class="form-control shadow-none inputText "
								placeholder="عدد الأيام المطلوبة لمراقب الدور"
								id="person_email"
								required
								onchange={(e) => setFloorObserversWorkDays(e.target.date)}></input>
						</div>
						<div class="col-md-6">
							<input
								type="number"
								class="form-control shadow-none inputText "
								placeholder="عدد الملاحظين لليوم"
								id="person_email"
								required
								onchange={(e) => setNeededHallObservers(e.target.date)}></input>
						</div>
						<div class="col-md-6">
							<input
								type="number"
								class="form-control shadow-none inputText "
								placeholder="عدد الأيام المطلوبة للملاحظ"
								id="person_email"
								required
								onchange={(e) => setHallObserversWorkDays(e.target.date)}></input>
						</div>
					</div>
					<div className="full-width-div row justify-content-around ">
						<div class="col-md-6 ">
							قم بالضغط علي الأيقونة التالية لتحميل ملف الإكسل الخاص بأيام التكليف
						</div>
						<div class="col-md-3 text-danger ">
							<label for="fileInput" class="fileIcon">
								<i class="fa-solid fa-file-arrow-up fa-2xl"></i>
							</label>
							<input id="fileInput" type="file" class="d-none"></input>
						</div>
					</div>
					<div class="mb-5 d-flex align-items-center flex-column">
						<input
							type="submit"
							class="btn text-light button w-50 mb-4"
							value="إنشاء"
							onClick={Go}></input>
						<div class="text-danger">في حالة ظهور أي أخطاء في المدخلات يجب أن تظهر هنا</div>
					</div>
				</form>
			</div>
		</div>
	)
}
