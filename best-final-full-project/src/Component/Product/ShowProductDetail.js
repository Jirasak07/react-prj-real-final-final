import { MDBContainer } from "mdbreact";
import React from "react";
import "./StyleDetail.css";
function ShowProductDetail() {
  return (
    <>
      <div className=" container-fulid containd">
        <div className="card-detail">
          <div className="top">
            <div className="box1 col-md-3 ">
                <label  >รูปภาพครุภัณฑ์</label>
                <img src="http://localhost:3333/img/KPRU41-13.00-0004.png" className="images" />
            </div>
            <div className="box2 col-md-5 ">2</div>
            <div className="box3 col-md-3 ">3</div>
          </div>
          <div className="down">
            <div className="boxd1 col-md-3">3</div>
            <div className="boxd2 col-md-4">4</div>
            <div className="boxd3 col-md-4">5</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowProductDetail;
