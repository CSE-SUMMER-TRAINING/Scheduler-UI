import React, { useEffect } from "react";
import "../bootstrap/css/bootstrap.css";
import Header from "./Header";
import { Box, SimpleGrid, Center, useMediaQuery } from "@chakra-ui/react";
import "./NeedForAss.css"

export default function NeedForAss() {

    const [isSmallerScreen] = useMediaQuery("(max-width: 1200px)");
    const [font] = useMediaQuery("(max-width: 1400px)");
    const boxestyle = { boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)", padding: "20px", fontFamily: "Tajawal", fontSize: font ? "20px":"30px", fontWeight: "550", textAlign: "center" };


    return (
        <div>
            <Header assignment="المسؤول" />
            <div class="needforass" dir="rtl">
                <div class="container">
                    <div className="full-width-div row justify-content-between">
                        <div class="col-md-8 text-md-right">
                            تكليف مٌلاحِظة الأمتحانات لعام 2024
                        </div>
                        <div class="col-md-3 text-danger text-md-left">
                            00:05:30:00
                        </div>                        
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="crd">
                                <div>عدد مراقبي الادوار لليوم</div>
                                <div className="num">10</div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="crd">
                                <div>عدد المُلاحِظين لليوم</div>
                                <div className="num">30</div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="crd">
                                <div>عدد الأيام المطلوبه للمُلاحظين</div>
                                <div className="num">6</div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="crd">
                                <div>عدد مراقبي المباني اليوم</div>
                                <div className="num">10</div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="crd">
                                <div>عدد الأيام المطلوبه لمراقب المبني</div>
                                <div className="num">30</div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="crd">
                                <div>عدد الأيام المطلوبه لمراقب الدور</div>
                                <div className="num">30</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}