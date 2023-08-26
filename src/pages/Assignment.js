import React from "react";
import "./Assignment.css";

const Assignment = () => {
  return (
    <div>
      <Header assignment = "مُلاحِظ"></Header>
      <div className="full-width-div">
        اختر ايام المراقبة والملاحظة المناسبة لك لتكليف ملاحظة الامتحانات لعام
        2024
      </div>
      <div className="three-divs">
        <div className="one-third">
          <div>عدد الايام المطلوبة</div>
          <div className="days">6</div>
        </div>
        <div className="one-third">
          <div>عدد الايام المتاحة</div>
          <div className="days">3</div>
        </div>
        <div className="one-third">
          <div>الزمن المتبقي</div>
          <div className="timer">05:30:04</div>
        </div>
      </div>
      <div className="circle-icon">
        <div className="arrow"></div>
      </div>
      <div className="warning">
        <div className="warning">
          في حالة عدم اختيار عدد الايام المطلوبة.سيتم توزيع ايام التكليف
          المتبقية الخاصة بك بشكل عشوائي
        </div>
      </div>
    </div>
  );
};

export default Assignment;
