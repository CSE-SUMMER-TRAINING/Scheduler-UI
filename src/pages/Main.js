import React from "react";
import "../bootstrap/css/bootstrap.css";
import Header from "./Header";
import login from "../images/Schedule-amico.png"
import { Box, SimpleGrid } from "@chakra-ui/react"
import "./Main.css"

export default function Main() {
    return (
        <div>
            <Header assignment="المسؤول" />
            <div className="  d-flex align-items-center  " style={{ marginTop: "100px" }}>
                <h1 style={{ fontFamily: "Tajawal", fontWeight: "700", fontSize: "3vw", marginLeft: "auto", marginRight: "auto", }}>
                    مرحباً بك
                </h1>
            </div>

            <SimpleGrid p="50px" columns={2} spacing={150}>
                <Box >
                    <img src={login} style={{ width: '25vw', float:"right" }} />

                </Box>
                <Box  >
                    <div className="btn btnhover" style={{ width: "17vw", marginRight: "300px", fontSize: "1.7vw", fontFamily: "Tajawal", fontWeight: "700", boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)", float:"right"  }}>
                        إنشاء<br />
                        تكليف <br />
                        المُلاحظة <br />
                        والمُراقبة
                    </div>
                    <div className="btn btnhover mt-5" style={{ width: "17vw", marginRight: "300px", fontSize: "1.7vw", fontFamily: "Tajawal", fontWeight: "700", boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)" , float:"right"}}>
                        توزيع<br />
                        الطلاب علي<br />
                        القاعات<br />
                        المُتاحة
                    </div>
                </Box>
            </SimpleGrid>






        </div >
    )
}