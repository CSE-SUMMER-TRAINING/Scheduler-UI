import React from "react";
import "../bootstrap/css/bootstrap.css";
import Header from "./Header";
import download from "../images/download-pdf.png"
export default function Downloadass() {
    return (
        <div>
            <Header assignment="مُراقِب دور" />
            <div className="container  d-flex align-items-center justify-content-center mt-5"  >

                <p style={{ fontSize: "2vw", textAlign:"center", fontFamily:"Tajawal" }}>
                اضغط على الأيقونة التالية<br/>
             <span style={{color:"#ff1f2c"}}> 2024 لتنزيل تكليف مُلاحِظة الأمتحانات لعام <br/></span>   
                  الخاص بك
                </p>
            </div>
            <div className="container  d-flex align-items-center justify-content-center mt-5"  >

                <img  src={download} style={{ width: "25vw" }}></img>

            </div>

        </div>
    )
}
