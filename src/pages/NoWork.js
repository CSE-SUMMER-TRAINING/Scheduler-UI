import React from "react";
import "../bootstrap/css/bootstrap.css";
import folder from "../images/folder.png"
import Header from "./Header";


export default function NoWork()
{
    return(
        <div>
            <Header assignment = "مُلاحِظ"></Header>
            <div className="container  d-flex align-items-center justify-content-center mt-5"  >
                
                <img className="mt-5" src={folder} style={{width:"25vw"}}></img>
               
            </div>
            <div className="container  d-flex align-items-center justify-content-center mt-5"  >
               
                <p style={{fontSize:"2vw"}}>
                لا يوجد أي تصويت أو تكليف لك الآن
                
                </p>
            </div>
        </div>
    )
}