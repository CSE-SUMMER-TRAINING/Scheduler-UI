import React from "react";
import "../bootstrap/css/bootstrap.css";
import Header from "./Header";
import download from "../images/download-pdf.png"
import "./Downloadass.css"

export default function Downloadass() {
    return (
        <div class="downloadass" dir="rtl">
            <Header assignment="مُراقِب دور" />
            <div className="d-flex align-items-center justify-content-center mt-5"  >
                <p>
                    اضغط على الأيقونة التالية لتنزيل <span class="text-danger">تكليف مُلاحِظة الأمتحانات لعام 2024</span> الخاص بك
                </p>
            </div>
            <div className="container d-flex align-items-center justify-content-center mt-5"  >
                <img src={download} class="img-fluid"></img>
            </div>
        </div>
    )
}
