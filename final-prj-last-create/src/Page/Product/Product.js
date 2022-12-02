import { MDBDataTable } from "mdbreact";

import React, { useEffect, useState } from "react";
import "./StyleProduct.css";
import {
  HiOutlinePencilAlt,
  HiOutlineQrcode,
  HiOutlineRefresh,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import Product_Add_Single from "./Product_Add_Single";

function Product() {
  const mid = localStorage.getItem("main_aid");
  const [modal, setModal] = useState(true);
  const toggle = () => {
    setModal(!modal);
  };
  const [table, setTable] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3333/product", {
        main_aid: mid,
      })
      .then((res) => {
        const data = res.data;
        setTable({
          columns: [
            {
              label: "ลำดับ",
              field: "no",
              attributes: {
                "aria-controls": "DataTable",
                "aria-label": "Name",
              },
            },
            {
              label: "หมายเลขครุภัณฑ์",
              field: "pid",
              sort: "pid",
              width: 150,
            },
            {
              label: "รายการ",
              field: "pname",
              sort: "pname",
              width: 200,
            },
            {
              label: "หน่วยงาน",
              field: "sname",
              width: 200,
            },
            {
              label: "ปีที่ตรวจล่าสุด",
              field: "lastyear",
              width: 200,
            },
            {
              label: "สถานะ",
              field: "status",
              width: 200,
            },
            {
              label: "ผู้ตรวจ",
              field: "user",
              width: 200,
            },
            {
              label: "จัดการ",
              field: "manage",
              width: 150,
            },
          ],
          rows: [
            ...data.map((i, index) => ({
              no: `${index + 1}`,
              pid: ` ${i.pid}`,
              pname: `${i.pname} `,
              lastyear: `kdckdjc`,
              status: `${i.pstatus_id}`,
              user: `dcdcdcdc`,
              sname: `${i.sub_aname}`,
              manage: (
                <div className="d-flex gap-2 m-auto ">
                  <Tooltip title="แก้ไขข้อมูลครุภัณฑ์" arrow placement="top">
                    <div>
                      <HiOutlinePencilAlt className="edit" />
                    </div>
                  </Tooltip>
                  <div>
                    <Tooltip title="ดาวน์โหลด QR Code" arrow placement="top">
                      <div>
                        {" "}
                        <HiOutlineQrcode className="qrcode" />
                      </div>
                    </Tooltip>
                  </div>
                  <Tooltip arrow placement="top" title="อัพเดทข้อมูลครุภัณฑ์">
                    <div>
                      <HiOutlineBadgeCheck className="check" />
                    </div>
                  </Tooltip>
                  <div>
                    <Tooltip arrow placement="top" title="ตรวจสอบครุภัณฑ์">
                      <div>
                        <HiOutlineRefresh className="update" />
                      </div>
                    </Tooltip>
                  </div>
                </div>
              ),
            })),
          ],
        });
      });
  }, []);
  return (
    <>
      <div className="container mt-3 page-product">
        <div className="manage">
          <div className="btn btn-single btn-sm" onClick={toggle}>
            เพิ่มครุภัณฑ์เดี่ยว
          </div>
          <div className="btn btn-group btn-sm " onClick={toggle}>
            เพิ่มครุภัณฑ์กลุ่ม
          </div>
        </div>
        <div className="table p-2">
          <MDBDataTable
            entriesLabel="จำนวนที่แสดง"
            searchLabel="ค้นหาครุภัณฑ์"
            hover
            noBottomColumns
            // searching={false}
            // sortable={false}
            responsive
            data={table}
          />
        </div>
      </div>
      <div className=""></div>
      {/* MODAL ADD PRODUCT SINGLE */}

      <MDBModal isOpen={modal} toggle={toggle} size="lg">
        <MDBModalHeader toggle={toggle}><h6>เพิ่มครุภัณฑ์แบบเดี่ยว</h6></MDBModalHeader>
        <MDBModalBody><Product_Add_Single/></MDBModalBody>
      </MDBModal>
      {/*  END  MODAL ADD PRODUCT SINGLE */}
    </>
  );
}

export default Product;
