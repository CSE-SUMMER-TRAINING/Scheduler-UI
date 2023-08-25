import React from "react";
import "../bootstrap/css/bootstrap.css";
import "./Header.css"
import { color } from "framer-motion";


export default function Header(props) {
    return (

        <div dir="rtl">
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
                </div>
            </div>
        </div>
    )
}