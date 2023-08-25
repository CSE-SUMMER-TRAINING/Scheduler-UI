import React from "react";
import "../bootstrap/css/bootstrap.css";
import login from "../images/Schedule-amico.png"
import "./Login.css"

export default function Login() {
    return (
        <div>
            <div className=" row  m-5 justify-content-around">
                {/* for image */}
                <div className=" col-lg-6" id="photo">
                    <img src={login} style={{ width: "569px", height: "569px" }} />
                </div>
                {/* for text body */}
                <div className="m-5 col-5 " id ="body-text" >
                    <form >
                        <h1 className="mt-5 " style={{ textAlign: "center", fontSize: "2vw", fontWeight: "bold" }}>
                            تسجيل الدخول
                        </h1>
                        <div className=" mb-5 mt-2 " style={{ float: "right" }} id = "form-style" >

                            <div class=" mt-5 mr-5 mb-5">
                                <input
                                    type="text"

                                    placeholder="البريد الالكتروني"
                                    id="person_email"
                                    style={{
                                        fontSize: "1.2vw",
                                        borderRadius: "0",
                                        border: "none",
                                        outline: "none",
                                        borderBottom: "3px solid #0F73EE",
                                        padding: "5px 5px 13px 5px",
                                        textAlign: "right",
                                        width: "25vw"
                                    }}
                                    required
                                ></input>
                            </div>
                            <div class=" mt-5 mr-5 mb-5">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="كلمة المرور"
                                    id="person_pass"
                                    style={{
                                        fontSize: "1.2vw",
                                        borderRadius: "0",
                                        border: "none",
                                        outline: "none",
                                        borderBottom: "3px solid #0F73EE",
                                        padding: "5px 5px 13px 5px",
                                        textAlign: "right",
                                        width: "25vw"
                                    }}
                                    required
                                ></input>
                            </div>
                            <div>
                                <a

                                    type="submit"
                                    className="btn  text-light  mt-5"
                                    id="btn"
                                    style={{
                                        fontSize: "1.2vw", fontWeight: "bold",
                                        width: "25vw"
                                        , backgroundColor: "#0F73EE"
                                    }}
                                >
                                    دخول
                                </a>
                            </div>


                        </div>

                    </form>

                </div>
            </div>
            <div className="container mb-5" style={{textAlign:"right"}}>
                <i className="fa-solid fa-circle-exclamation fa-2xl " style={{ color: "#ff1f2c",float:"right" }}></i>
                
                <span className="mr-3 " style={{fontSize:"1.3vw"}}>
                في حالة عدم تذكُّر البريد الإلكتروني أو كلمة المرور الخاص بك، عليك التوجه إلي وحدة تكنولوجيا المعلومات
                </span>
            </div>
        </div>
    )
}


    // #0F73EE