import { React, useState, createContext } from "react"
import "../bootstrap/css/bootstrap.css"
import login from "../images/Schedule-amico.png"
import "./Login.css"
import axios from "axios"
import AvailableDays from "./AvailableDays"
import Main from "./Main"
import { Link } from "react-router-dom"
export const UserContext = createContext()

export default function Login() {
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [preiorty, setPreiorty] = useState(-1)

    const submitHandler = async () => {
        const logData = { email, password }

        console.log(logData)
        const { data } = await axios.post("http://localhost:5000/api/user/login", logData)
        if (!data.token) {
            // wront email or password
        }
        if (data.user.preiorty == 0) {
            <UserContext.Provider value={"esraa"}>
                <Main />
            </UserContext.Provider>
            
        }
        console.log(data)
    }


    return (
        
        <div class="login" dir="rtl">
            
            <div className=" row m-5 justify-content-around">
                {/* for text body */}
                <div className="col-lg-6 col-12 m-md-0 text-center" id="body-text">
                    <h1 class="text-center font-weight-bold header">تسجيل الدخول</h1>
                    <div>
                        <form className="text-center">
                            <input
                                type="text"
                                class="form-control shadow-none inputText mx-auto"
                                placeholder="البريد الالكتروني"
                                id="person_email"
                                required
                                onChange={(e) => setEmail(e.target.value)}></input>
                            <input
                                type="text"
                                class="form-control shadow-none inputText mx-auto"
                                placeholder="كلمة المرور"
                                id="person_pass"
                                required
                                onChange={(e) => setPassword(e.target.value)}></input>
                            <Link
                                type="submit"
                                class="btn text-light button mt-3 px-5"
                                id="btn"
                                onClick={submitHandler}
                                to="/respMain"
                                >
                                دخول
                            </Link>
                        </form>
                    </div>
                </div>
                {/* for image */}
                <div className="col-lg-6 d-none d-lg-block image" id="photo">
                    <img src={login} className="img-fluid" />
                </div>
            </div>
            <div className="container mb-5 d-flex justify-content-center">
                <i className="fa-solid fa-circle-exclamation fa-2xl text-danger d-flex align-items-center"></i>
                <span class="text-right  pr-2 ">
                    في حالة عدم تذكُّر البريد الإلكتروني أو كلمة المرور الخاص بك، عليك التوجه إلي وحدة
                    تكنولوجيا المعلومات
                </span>
            </div>
        </div>
    )
}

// #0F73EE
