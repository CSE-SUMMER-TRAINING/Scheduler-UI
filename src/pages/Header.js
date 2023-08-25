import React from "react";
import "../bootstrap/css/bootstrap.css";
import "./Header.css"
import { color } from "framer-motion";


export default function Header(props) {
    return (

        <div>
            <div className="d-flex align-items-center justify-content-center container-fluid" style={{ boxShadow: "0px 5px 4px 0px #00000026", height: "70px" }} >
                <div className="col">
                    <div class="avatar"></div>
                </div>
                <div className="col text">
                    {props.assignment}
                </div>
                <div className="col">
                    <div class="icon">
                        <i className=" fa-solid fa-arrow-right-from-bracket fa-flip-horizontal fa-xl"></i>
                    </div>
                     {/* <i className=" fa-solid fa-arrow-right-from-bracket fa-flip-horizontal fa-2xl pl-3 pr-3  pb-4 my-auto " style={{ backgroundColor: "#0F73EE", color: "#ffffff", borderRadius: "7px", height: "70px", fontSize: "25px"}}></i> */}
                </div>
                {/* <h1 className="col-6" style={{ marginLeft: "auto", marginRight: "auto", color: '#0F73EE', fontSize: "2.5vw" }}>{props.assignment}</h1>
                <center className="d-flex ml-5 col-4">
                    <i className=" fa-solid fa-arrow-right-from-bracket fa-flip-horizontal fa-2xl pl-3 pr-3  pb-4  " style={{ backgroundColor: "#0F73EE", color: "#ffffff", borderRadius: "7px", height: "10vh", fontSize: "2vw", paddingTop:"45px" }}></i>
                </center> */}
            </div>
        </div>
    )
}