import React from "react";
import "../bootstrap/css/bootstrap.css";
import Header from "./Header";
import "./EnterData.css"

export default function EnterData() {
    return (
        <div class="enterdata" dir="rtl">
            <Header assignment="المسوؤل" />
            <div class="container">
                <div className="text-right welcome">
                    <h1>
                        برجاء إدخال البيانات الآتية لإنشاء التكليف:
                    </h1>
                </div>
                <form>
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" class="form-control shadow-none inputText " placeholder="اسم التكليف" id="person_email" required
                            ></input>
                        </div>
                        <div class="col-md-6">
                            <input type="number" class="form-control shadow-none inputText " placeholder="المدة الزمنية بالدقائق لاختيار الأيام" id="person_email" required
                            ></input>
                        </div>
                        <div class="col-md-6">
                            <input type="number" class="form-control shadow-none inputText " placeholder="عدد مراقبي المباني لليوم" id="person_email" required
                            ></input>
                        </div>
                        <div class="col-md-6">
                            <input type="number" class="form-control shadow-none inputText " placeholder="عدد الأيام المطلوبة لمراقب المبني" id="person_email" required
                            ></input>
                        </div>
                        <div class="col-md-6">
                            <input type="number" class="form-control shadow-none inputText " placeholder="عدد مراقبي الأدوار لليوم" id="person_email" required
                            ></input>
                        </div>
                        <div class="col-md-6">
                            <input type="number" class="form-control shadow-none inputText " placeholder="عدد الأيام المطلوبة لمراقب الدور" id="person_email" required
                            ></input>
                        </div>
                        <div class="col-md-6">
                            <input type="number" class="form-control shadow-none inputText " placeholder="عدد الملاحظين لليوم" id="person_email" required
                            ></input>
                        </div>
                        <div class="col-md-6">
                            <input type="number" class="form-control shadow-none inputText " placeholder="عدد الأيام المطلوبة للملاحظ" id="person_email" required
                            ></input>
                        </div>
                    </div>
                    <div className="full-width-div row justify-content-around ">
                        <div class="col-md-6 ">
                            قم بالضغط علي الأيقونة التالية لتحميل ملف الإكسل الخاص بأيام التكليف
                        </div>
                        <div class="col-md-3 text-danger ">
                            <label for="fileInput" class="fileIcon">
                                <i class="fa-solid fa-file-arrow-up fa-2xl"></i>
                            </label>
                            <input id="fileInput" type="file" class="d-none"></input>
                        </div>                        
                    </div>
                    <div class="mb-5 d-flex align-items-center flex-column">
                        <input type="submit" class="btn text-light button w-50 mb-4" value="إنشاء"></input>
                        <div class="text-danger">في حالة ظهور أي أخطاء في المدخلات يجب أن تظهر هنا</div>
                    </div>
                </form>
            </div>
        </div>
    )
}
