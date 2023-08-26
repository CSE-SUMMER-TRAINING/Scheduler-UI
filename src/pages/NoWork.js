import React from "react";
import "../bootstrap/css/bootstrap.css";
import folder from "../images/folder.png"
import Header from "./Header";
import "./NoWork.css"


export default function NoWork()
{
    return(
        <div class="nowork">
            <Header assignment = "مُلاحِظ"></Header>
            <div className="container one d-flex align-items-center justify-content-center mt-5"  >
                <img className="mt-5 img-fluid" src={folder}></img>
            </div>
            <div className="container two d-flex align-items-center justify-content-center mt-5"  >               
                <p>
                    لا يوجد أي تصويت أو تكليف لك الآن   
                </p>
            </div>
        </div>
    )
}