import React, { useEffect } from "react";
import "../bootstrap/css/bootstrap.css";
import Header from "./Header";
import { Box, SimpleGrid, Center, useMediaQuery } from "@chakra-ui/react";

export default function NeedForAss() {

    const [isSmallerScreen] = useMediaQuery("(max-width: 1200px)");
    const [font] = useMediaQuery("(max-width: 1400px)");
    const boxestyle = { boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)", padding: "20px", fontFamily: "Tajawal", fontSize: font ? "20px":"30px", fontWeight: "550", textAlign: "center" };


    return (
        <div>
            <Header assignment="المسؤول" />
            <center>
                <div className="d-flex align-items-center justify-content-between  " style={{ margin: "50px auto 50px auto", padding: "50px", boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)", width: "70%" }}>
                    <div className="" style={{ color: "#FF1F2C", fontWeight: "500", fontFamily: "Tajawal", fontSize: font? "20px" : "42px" }}>
                        00:05:30:00
                    </div>
                    <div style={{ color: "#000000", fontWeight: "700", fontFamily: "Tajawal", fontSize: font? "20px" : "42px", textAlign: "right" }}>
                        تكليف مُلاحِظة <br />
                        الأمتحانات لعام 2024
                    </div>
                </div>
            </center>
            <Center>
                <SimpleGrid columns={isSmallerScreen ? 2 : 3} spacingX={"150px"} spacingY={"30px"} style={{ width: "70%" }}  >
                    <box style={boxestyle}>
                        عدد المُلاحِظين  <br />
                        لليوم<br />
                        <span
                            style={{ color: "#0F73EE" }}
                        >30</span>
                    </box>

                    <box style={boxestyle}>
                        عدد مراقبي الادوار <br /> لليوم<br />
                        <span
                            style={{ color: "#0F73EE" }}
                        >10</span>
                    </box>

                    <box style={boxestyle}>
                        عدد مراقبي <br /> المباني لليوم<br />
                        <span
                            style={{ color: "#0F73EE" }}
                        >10</span>
                    </box>

                    <box style={boxestyle}>
                        عدد الأيام<br /> المطلوبه<br /> للمُلاحظين<br />
                        <span
                            style={{ color: "#0F73EE" }}
                        >6</span>
                    </box>

                    <box style={boxestyle}>
                        عدد الأيام <br />المطلوبه<br /> لمراقب الدور<br />
                        <span
                            style={{ color: "#0F73EE" }}
                        >30</span>
                    </box>

                    <box style={boxestyle}>
                        عدد الأيام<br /> المطلوبه<br /> لمراقب المبنى<br />
                        <span
                            style={{ color: "#0F73EE" }}
                        >30</span>
                    </box>
                </SimpleGrid>
            </Center>
        </div>
    )
}