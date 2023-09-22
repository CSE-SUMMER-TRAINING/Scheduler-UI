import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../bootstrap/css/bootstrap.css";
import Header from "./Header";
import "./EnterData.css";
import axios from "axios";

export default function EnterData() {
	const [neededHallObservers, setNeededHallObservers] = useState("");
	const [neededFloorObservers, setNeededFloorObservers] = useState("");
	const [neededBuildingObservers, setNeededBuildingObservers] = useState("");
	const [hallObserversWorkDays, setHallObserversWorkDays] = useState("");
	const [floorObserversWorkDays, setFloorObserversWorkDays] = useState("");
	const [buildingObserversWorkDays, setBuildingObserversWorkDays] = useState("");
	const [duration, setduration] = useState("");
	const [voteName, setName] = useState("");
	const [daysList,] = useState(["11/02/2002"]);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const Go = async () => {
		const inData = {
			voteName,
			neededHallObservers, // عدد الملاحظين لليوم
			neededFloorObservers, // عدد مراقبى الدور لليوم
			neededBuildingObservers, // عدد مراقبى المبنى لليوم
			hallObserversWorkDays, // عدد الايام المطلوبة للملاحظين
			floorObserversWorkDays, //عدد الايام المطلوبة لمراقب الدور
			buildingObserversWorkDays, // عدد الايام المطلوبة لمراقب
			daysList,
			duration,
		};

		try {
			await axios.post("api/superAdmin/createVote", inData);
			navigate(-1);
		}
		catch (err) {
			const { messege } = err.response.data;
			setError(messege);
		}
	};

	return (
		<div className="enterdata" dir="rtl">
			<Header assignment="المسوؤل" />
			<div className="container">
				<div className="text-right welcome">
					<h1>برجاء إدخال البيانات الآتية لإنشاء التكليف:</h1>
				</div>
				<form>
					<div className="row">
						<div className="col-md-6">
							<input
								type="text"
								className="form-control shadow-none inputText "
								placeholder="اسم التكليف"
								id="person_email"
								onChange={(e) => setName(e.target.value)}></input>
						</div>
						<div className="col-md-6">
							<input
								type="number"
								className="form-control shadow-none inputText "
								placeholder="المدة الزمنية بالساعات لاختيار الأيام"
								id="person_email"
								onChange={(e) => setduration(e.target.value)}></input>
						</div>
						<div className="col-md-6">
							<input
								type="number"
								className="form-control shadow-none inputText "
								placeholder="عدد مراقبي المباني لليوم"
								id="person_email"
								onChange={(e) => setNeededBuildingObservers(e.target.value)}></input>
						</div>
						<div className="col-md-6">
							<input
								type="number"
								className="form-control shadow-none inputText "
								placeholder="عدد الأيام المطلوبة لمراقب المبني"
								id="person_email"
								onChange={(e) => setBuildingObserversWorkDays(e.target.value)}></input>
						</div>
						<div className="col-md-6">
							<input
								type="number"
								className="form-control shadow-none inputText "
								placeholder="عدد مراقبي الأدوار لليوم"
								id="person_email"
								onChange={(e) => setNeededFloorObservers(e.target.value)}></input>
						</div>
						<div className="col-md-6">
							<input
								type="number"
								className="form-control shadow-none inputText "
								placeholder="عدد الأيام المطلوبة لمراقب الدور"
								id="person_email"
								onChange={(e) => setFloorObserversWorkDays(e.target.value)}></input>
						</div>
						<div className="col-md-6">
							<input
								type="number"
								className="form-control shadow-none inputText "
								placeholder="عدد الملاحظين لليوم"
								id="person_email"
								onChange={(e) => setNeededHallObservers(e.target.value)}></input>
						</div>
						<div className="col-md-6">
							<input
								type="number"
								className="form-control shadow-none inputText "
								placeholder="عدد الأيام المطلوبة للملاحظ"
								id="person_email"
								onChange={(e) => setHallObserversWorkDays(e.target.value)}></input>
						</div>
					</div>
					<div className="full-width-div row justify-content-around ">
						<div className="col-md-6 ">
							قم بالضغط علي الأيقونة التالية لتحميل ملف الإكسل الخاص بأيام التكليف
						</div>
						<div className="col-md-3 text-danger ">
							<label htmlFor="fileInput" className="fileIcon">
								<i className="fa-solid fa-file-arrow-up fa-2xl"></i>
							</label>
							<input id="fileInput" type="file" className="d-none"></input>
						</div>
					</div>
					<div className="mb-5 d-flex align-items-center flex-column">
						<input
							type="submit"
							className="btn text-light button w-50 mb-4"
							value="إنشاء"
							onClick={(e) => {
								e.preventDefault();
								Go();
							}}
						>
						</input>

						{!error && <div className="text-danger">في حالة ظهور أي أخطاء في المدخلات يجب أن تظهر هنا</div>}
						{error && <div className="text-danger">{error}</div>}
					</div>
				</form>
			</div>
		</div>
	);
}
