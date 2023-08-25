import React from "react";
import "../bootstrap/css/bootstrap.css";
import Header from "./Header";
import login from "../images/Schedule-amico.png"
import { Box, SimpleGrid } from "@chakra-ui/react"
import "./Main.css"

export default function Main() {
    return (
        <div class="parent" dir="rtl">
            <Header assignment="المسؤول" />
            <div className="d-flex justify-content-center welcome">
                <h1>
                    مرحباً بك
                </h1>
            </div>
            <div class="container-fluid">
                <div class="row ">
                    <div className="col-lg-6 col-12 text-center d-flex flex-column" id="body-text" >
                        <div className="btnhover">
                            إنشاء تكليف المُلاحظة و المُراقبة                      
                        </div>
                        <div className="btnhover">
                            توزيع الطلاب علي القاعات المُتاحة
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block image" id="photo">
                        <img src={login} className="img-fluid"/>
                    </div>
                </div>
            </div>

        </div >
    )
}