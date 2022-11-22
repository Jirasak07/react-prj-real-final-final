import axios from "axios";
import { MDBCol, MDBDataTable, MDBRow } from "mdbreact";
import React, { useEffect, useState } from "react";
import "../../style.css";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import AddProductGroup from './AddEditProduct/AddProductGroup'
import AddProductSingle from './AddEditProduct/AddProductSingle'

import "./StyleProduct.css";
function ProductPage() {
  const [modalSingle, setModalSingle] = useState(false);
  const [modalGroup, setModalGroup] = useState(false);
  const toggleSingle = () => {
    setModalSingle(!modalSingle);
  };
  const toggleGroup = () => {
    setModalGroup(!modalGroup);
  };
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3333/product").then((res) => {
      setData({
        columns: [
          {
            label: "หมายเลขครุภัณฑ์",
            field: "pid",
            width: 150,
          },
          {
            label: "รายการ",
            field: "pname",
            width: 270,
          },
          {
            label: "หน่วยงาน",
            field: "sub_aid",
            width: 270,
          },
          {
            label: "ตรวจล่าสุด",
            field: "lastyear",
          },

          {
            label: "สถานะ",
            field: "pstatus_id",
            width: 100,
          },
          {
            label: "ผู้ตรวจ",
            field: "userid",
          },
          {
            label: "Manage",
            field: "manage",
            with: 300,
          },
        ],
        rows: [
          ...res.data.map((item) => ({
            pid: <>{item.pid}</>,
            pname: <>{item.pname}</>,
            sub_aid: <>{item.sub_aid}</>,
            lastyear: <>{item.fisicalyear}</>,
            pstatus_id: <>{item.pstatus_id}</>,
            userid: <>{item.user_id}</>,
            manage: (
              <div className="manage">
                <div className="btn btn-warning btn-sm but ">แก้ไข</div>
                <div className="btn btn-secondary btn-sm but ">ตรวจสอบ</div>
                <div className="btn btn-success btn-sm but ">อัพเดท</div>
                <div className="btn btn-info btn-sm but ">QRCode</div>
              </div>
            ),
          })),
        ],
      });
    });
  });

  return (
    <>
      <div className="container-fulid contain">
        <div className="product-table text-wrap">
          <div className="adproduct ">
            <div className="btn btn-primary btn-sm" onClick={toggleSingle}>
              เพิ่มครุภัณฑ์แบบเดี่ยว
            </div>
            <div className="btn btn-grey btn-sm" onClick={toggleGroup} >เพิ่มครุภัณฑ์แบบกลุ่ม</div>
          </div>

          <MDBRow>
            <MDBCol sm="12">
              <MDBDataTable
                theadColor="dark"
                striped
                entriesLabel="จำนวนครุภัณฑ์ที่แสดง"
                searchTop
                searchBottom={false}
                borderless
                hover
                data={data}
                paginationLabel={["ก่อนหน้า", "ถัดไป"]}
                infoLabel={[
                  "แสดง",
                  "รายการ ถึง",
                  "รายการ จากทั้งหมด",
                  "รายการ",
                ]}
              />
            </MDBCol>
          </MDBRow>
        </div>
      </div>
      <MDBModal isOpen={modalSingle} toggle={toggleSingle}>
        <MDBModalHeader toggle={toggleSingle}>
          เพิ่มครุภัณฑ์แบบเดี่ยว
        </MDBModalHeader>
        <MDBModalBody><AddProductSingle/></MDBModalBody>
        <MDBModalFooter>
          {/* <MDBBtn color="secondary" onClick={toggleSingle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn> */}
        </MDBModalFooter>
      </MDBModal>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <MDBModal isOpen={modalGroup} toggle={toggleGroup}>
        <MDBModalHeader toggle={toggleGroup}>
          เพิ่มครุภัณฑ์แบบกลุ่ม
        </MDBModalHeader>
        <MDBModalBody><AddProductGroup/></MDBModalBody>
        <MDBModalFooter>
          {/* <MDBBtn color="secondary" onClick={toggleSingle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn> */}
        </MDBModalFooter>
      </MDBModal>
    </>
  );
}

export default ProductPage;
