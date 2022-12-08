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
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import ProductAdd from "./ProductAdd";
import GenQRcode from "../../QRCode/GenQRcode";
import ProductAddGroup from "./ProductAddGroup";
function Product(props) {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [basicGroup, setBasicGroup] = useState(false);
  const toggleShowG = () => setBasicGroup(!basicGroup);
  const [qrmodal, setQrmodal] = useState(false);
  const [idqr, setIdqr] = useState();
  const ToggleQRcode = (id) => {
    setIdqr(id);
    setQrmodal(!qrmodal);
  };
  const main = localStorage.getItem("main_aid");
  const [re, setRe] = useState();
  useEffect(() => {
    axios
      .post("http://localhost:3333/product", {
        main_aid: main,
      })
      .then((res) => {
        // console.log("lenght",res.data.length)
        setRe(res.data.length);
      });
  });
  const [table, setTable] = useState([]);
  useEffect(() => {
    let mid = localStorage.getItem("main_aid");
    axios
      .post("http://localhost:3333/product", {
        main_aid: mid,
      })
      .then((res) => {
        // console.log("table", res.data.lenght);
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

                  <Tooltip title="ดาวน์โหลด QR Code" arrow placement="top">
                    <div>
                      <HiOutlineQrcode
                        className="qrcode"
                        onClick={(e) => ToggleQRcode(i.pid)}
                      />
                    </div>
                  </Tooltip>
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
  }, [re]);
  return (
    <>
      <div className="container page-product">
        <div className="manage">
          <div className="btn btn-single btn-sm" onClick={toggleShow}>
            เพิ่มครุภัณฑ์เดี่ยว
          </div>
          <div className="btn btn-group btn-sm " onClick={toggleShowG}>
            เพิ่มครุภัณฑ์กลุ่ม
          </div>
        </div>
        <div className="table p-2">
          <MDBDataTable
            theadColor="white"
            tbodyColor="white"
            entriesLabel="จำนวนที่แสดง"
            searchLabel="ค้นหาครุภัณฑ์"
            hover
            noBottomColumns
            // searching={false}
            sortable={false}
            responsive
            data={table}
            paginationLabel={["ก่อนหน้า", "ถัดไป"]}
            infoLabel={["แสดง", "ถึง", "ของ", "ครุภัณฑ์"]}
          />
        </div>
      </div>
      <div>
        {/* MODAL ADD PRODUCT SINGLE */}
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog size="lg">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>เพิ่มครุภัณฑ์เดี่ยว</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                {" "}
                <ProductAdd toggleShow={toggleShow} {...props} />{" "}
              </MDBModalBody>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
        {/*  END  MODAL ADD PRODUCT SINGLE */}

        {/* MODAL QRCODE */}
        <MDBModal show={qrmodal} setShow={setQrmodal} tabIndex="-1">
          <MDBModalDialog size="sm" centered>
            <MDBModalContent>
              <MDBModalBody>
                {" "}
                <GenQRcode {...props} toggleQr={ToggleQRcode} id={idqr} />{" "}
              </MDBModalBody>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
        {/*  END  MODAL QRCODE */}
        {/* MODAL ADD PRODUCT GROUP */}
        <MDBModal show={basicGroup} setShow={setBasicGroup} tabIndex="-1">
          <MDBModalDialog size="lg">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>เพิ่มครุภัณฑ์แบบกลุ่ม</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShowG}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                {" "}
                <ProductAddGroup {...props} toggleShow={toggleShowG} />{" "}
              </MDBModalBody>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
        {/*  END  MODAL ADD PRODUCT GROUP */}
      </div>
    </>
  );
}

export default Product;
