import axios from "axios";
import { MDBCol, MDBDataTable, MDBRow, MDBInput } from "mdbreact";
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
import AddProductGroup from "./AddEditProduct/AddProductGroup";
import AddProductSingle from "./AddEditProduct/AddProductSingle";

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
  const mid = localStorage.getItem('main_aid')
  useEffect(() => {
    axios.post("http://localhost:3333/product",{
    main_aid:mid
    }).then((res) => {
      setData({
        columns: [
          {
            label: "หมายเลขครุภัณฑ์",
            field: "pid",
          },
          {
            label: "รายการ",
            field: "pname",
          },
          {
            label: "หน่วยงาน",
            field: "sub_aid",
          },
          {
            label: "ตรวจล่าสุด",
            field: "lastyear",
          },

          {
            label: "สถานะ",
            field: "pstatus_id",
          },
          {
            label: "ผู้ตรวจ",
            field: "userid",
          },
          {
            label: "Manage",
            field: "manage",
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
               {/* <img src={`http://localhost:3333/img/${item.image}`} width="150px"/> */}
              </div>
            ),
          })),
        ],
      });
    });
  },[]);

  return (
    <>
      <div className="container-fulid contain">
        <div className="product-table text-wrap">
          <div className="adproduct ">
            <div className="btn btn-primary btn-sm" onClick={toggleSingle}>
              เพิ่มครุภัณฑ์แบบเดี่ยว
            </div>
            <div className="btn btn-grey btn-sm" onClick={toggleGroup}>
              เพิ่มครุภัณฑ์แบบกลุ่ม
            </div>
          </div>

          <MDBRow>
            <MDBCol sm="12">
              <MDBDataTable
                sortable={false}
                noBottomColumns
                theadColor="dark"
                striped
                entriesLabel="จำนวนครุภัณฑ์ที่แสดง"
                hover
                entries={20}
                data={data}
                paginationLabel={["ก่อนหน้า", "ถัดไป"]}
                infoLabel={[
                  "แสดง",
                  "รายการ ถึง",
                  "รายการ จากทั้งหมด",
                  "รายการ",
                ]}
                className="mx-2"
              />
            </MDBCol>
          </MDBRow>
        </div>
      </div>
      <MDBModal size="xl" isOpen={modalSingle} toggle={toggleSingle}>
        <MDBModalHeader toggle={toggleSingle}>
          เพิ่มครุภัณฑ์แบบเดี่ยว
        </MDBModalHeader>
        <MDBModalBody>
          <AddProductSingle close={toggleSingle} />
        </MDBModalBody>
        <MDBModalFooter>
          {/* <MDBBtn color="secondary" onClick={toggleSingle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn> */}
        </MDBModalFooter>
      </MDBModal>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <MDBModal size="xl" isOpen={modalGroup} toggle={toggleGroup}>
        <MDBModalHeader toggle={toggleGroup}>
          เพิ่มครุภัณฑ์แบบกลุ่ม
        </MDBModalHeader>
        <MDBModalBody>
          <AddProductGroup />
        </MDBModalBody>
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
