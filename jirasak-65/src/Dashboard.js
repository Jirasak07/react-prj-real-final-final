import React from "react";
import { Button } from "evergreen-ui";
import "./App.css";
import { FiCamera } from "react-icons/fi";
function Dashboard() {
  return (
    <div className="row d-flex  conntent mb-5">
      <div className="col-11 col-sm-5 all-product rounded">
        <div className="row">
          <div className="col">
            ครุภัณฑ์ใช้งานทั้งหมด
            <div className="d-flex gap-2 align-items-center">
              <div className="total">60</div>
              <div>รายการ</div>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <Button appearance="minimal" intent="success">
              ดูรายละเอียด
            </Button>
          </div>
        </div>
      </div>
      <div className="col-11 col-sm-5 bg-white rounded out h-100 ">
        <div className="row">
          <div className="col">
            ครุภัณฑ์จำหน่ายออกจากบัญชี ทั้งหมด
            <div className="d-flex gap-2 align-items-center">
              <div className="total">60</div>
              <div>รายการ</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-11 col-sm-5 fix rounded">
        <div className="row">
          <div className="col">
            ครุภัณฑ์ชำรุดทั้งหมด
            <div className="d-flex gap-2 align-items-center">
              <div className="total">60</div>
              <div>รายการ</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-11 col-sm-5 donate rounded">
        <div className="row">
          <div className="col">
            ครุภัณฑ์บริจาคทั้งหมด
            <div className="d-flex gap-2 align-items-center">
              <div className="total">60</div>
              <div>รายการ</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-11 col-sm-10 rounded bg-white d-flex justify-content-center">
        <div className="m-3 d-flex gap-3">
          <Button appearance="primary" intent="success" >เพิ่มครุภัณฑ์แบบเดี่ยว</Button>
          <Button appearance="primary" className="bg-group border-0" >เพิ่มครุภัณฑ์แบบกลุ่ม</Button>
        </div>
      </div>
      <div className="col-11 col-sm-5 rounded check">
        <div className="row">
          <div>สแกนตรวจสอบครุภัณฑ์</div>
          <FiCamera className="cam-check" />
        </div>
      </div>
      <div className="col-11 col-sm-5 rounded update ">
        <div className="row">
          <div> สแกนอัพเดทครุภัณฑ์</div>
          <FiCamera className="cam-check" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
