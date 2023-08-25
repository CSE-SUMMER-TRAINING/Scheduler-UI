import React, { useEffect } from "react";
import "../bootstrap/css/bootstrap.css";
import Header from "./Header";
import { Box, SimpleGrid, Center, useMediaQuery } from "@chakra-ui/react";

export default function NeedForAss() {
    const boxestyle = { boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)", padding: "20px", fontFamily: "Tajawal", fontSize: "2vw", fontWeight: "500", textAlign: "center" };

    const [isSmallerScreen] = useMediaQuery("(max-width: 1200px)");


    return (
        <div>
            <Header assignment="المسؤول" />
            <center>
                <div className="d-flex align-items-center justify-content-between  " style={{ margin: "50px auto 5 0px auto", padding: "50px", boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)", width: "70%" }}>
                    <div className="" style={{ color: "#FF1F2C", fontWeight: "500", fontFamily: "Tajawal", fontSize: "2vw" }}>
                        00:05:30:00
                    </div>
                    <div style={{ color: "#000000", fontWeight: "700", fontFamily: "Tajawal", fontSize: "2vw", textAlign: "right" }}>
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