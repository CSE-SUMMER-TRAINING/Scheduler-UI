import {React,useState} from "react";
import "../bootstrap/css/bootstrap.css";
import Header from "./Header";
import "./Assignment.css"
import { Link } from "react-router-dom";

export default function Assignment() {
  const [path, setpath] = useState([]);

  const Go = ()=>
  {console.log("j")
    setpath("/AvailbleDays")

  }
  return (
    <div class="assignment" dir="rtl">
      <Header assignment = "مُلاحِظ"></Header>
      <div class="container">
        <div className="full-width-div">
          اختر ايام المراقبة والملاحظة المناسبة لك لتكليف ملاحظة الامتحانات لعام
            2024        
        </div>
        <div class="row justify-content-center">
          <div class=" col-md one-third">
            <div>الزمن المتبقي</div>
            <div className="timer">05:30:04</div>
          </div>
          <div class=" col-md one-third">
            <div>عدد الايام المطلوبة</div>
            <div className="days">6</div>
          </div>
          <div class="col-md one-third">
            <div>عدد الايام المتاحة</div>
            <div className="days">3</div>
          </div>
        </div>
      </div>

      <div className="arrow d-flex justify-content-center mb-5">
          <Link to={path} onClick={Go} class="circle-icon">
            <i class="fa-solid fa-chevron-right fa-2xl"></i>         
          </Link>
      </div>

      <div className="container mb-5 d-flex justify-content-center">
        <i className="fa-solid fa-circle-exclamation fa-2xl text-danger d-flex align-items-center" 
        ></i>
     
        <span class="text-right  pr-2 ">
            في حالة عدم اختيار عدد الايام المطلوبة.سيتم توزيع ايام التكليف
            المتبقية الخاصة بك بشكل عشوائي               
        </span>
      </div>
    </div>
    )
  }
