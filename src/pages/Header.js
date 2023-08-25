import React from "react";
import "../bootstrap/css/bootstrap.css";


export default function Header(props) {
    return (

        <div>
            <div className=" d-flex align-items-center justify-content-center " style={{ boxShadow: "0px 5px 4px 0px #00000026", height: "10vh" }} >

                    <center className="d-flex ml-5 col-4">
                        <i className=" fa-solid fa-arrow-right-from-bracket fa-flip-horizontal fa-2xl pl-3 pr-3  pb-4  " style={{ backgroundColor: "#0F73EE", color: "#ffffff", borderRadius: "7px", height: "9vh", fontSize: "2vw", paddingTop:"35px" }}></i>
                    </center>
                
                <h1 className="col-6" style={{ marginLeft: "auto", marginRight: "auto", color: '#0F73EE', fontSize: "2.5vw" }}>{props.assignment}</h1>

            </div>
        </div>
    )
}