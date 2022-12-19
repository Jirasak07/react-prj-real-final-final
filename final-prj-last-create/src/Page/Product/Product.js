import { MDBDataTable } from "mdbreact";
import { Pane, Dialog, Button } from "evergreen-ui";
import React, { useEffect, useState } from "react";
import "./StyleProduct.css";
import { BsPlusSquareFill } from "react-icons/bs";
import { AddIcon } from "evergreen-ui";
import {
  HiOutlineQrcode,
  HiOutlineRefresh,
  HiOutlineBadgeCheck,
  HiEye,
  HiPencil,
} from "react-icons/hi";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import GenQRcode from "../../QRCode/GenQRcode";
import AddProductSingle from "./AddProductSingle";
import ProductAddGroup from "./ProductAddGroup";
import ProductDetail from "./ProductDetail";
import { NavLink } from "react-router-dom";
import Edit_Product from "./Edit_Product";
function Product(props) {
  const [basicModal, setBasicModal] = useState(false);
  const [countProduct, setCountProduct] = useState();
  const [data, setData] = useState([]);
  const [countProductOut, setCountProductOut] = useState();
  const [countProductAll, setCountProductAll] = useState();
  const [qrmodal, setQrmodal] = useState(false);
  const [detail, setDetail] = useState(false);
  const [edit, setEdit] = useState(false);
  const [idDetail, setIdDetail] = useState();
  const [idqr, setIdqr] = useState();
  const [statusId, setStatusId] = useState();
  const toggleQRcode = (id) => {
    setIdqr(id);
    setQrmodal(!qrmodal);
  };
  const main = localStorage.getItem("main_aid");
  const [re, setRe] = useState();
  const [isShown, setIsShown] = useState(false);
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
  const ShowDetail = (id) => {
    setDetail(true);
    setIdDetail(id);
  };
  const [editId, setEditId] = useState()
  const ShowEdit = (id) => {
    setEdit(true);
    setEditId(id);
  };
  const sortProduct = (status) => {
    let mid = localStorage.getItem("main_aid");
    axios
      .post("http://localhost:3333/product-sort", {
        main_aid: mid,
        pstatus_id: status,
      })
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    axios.get("http://localhost:3333/product-normal").then((res) => {
      setCountProduct(res.data[0].normal);
    });
    axios.get("http://localhost:3333/product-out").then((res) => {
      setCountProductOut(res.data[0].pout);
    });
  });
  useEffect(() => {
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
          pid: `${i.pid}`,
          pname: `${i.pname} `,
          lastyear: `kdckdjc`,
          status: `${i.pstatus_id}`,
          user: `dcdcdcdc`,
          sname: `${i.sub_aname}`,
          manage: (
            <div className="d-flex gap-2 m-auto ">
              <Tooltip
                onClick={(e) => ShowDetail(i.pid)}
                title="รายละเอียดครุภัณฑ์"
                arrow
                placement="top"
              >
                <div>
                  <HiEye className="detail" />
                </div>
              </Tooltip>
              <Tooltip  onClick={(e) => ShowEdit(i.pid)} title="แก้ไขข้อมูลครุภัณฑ์" arrow placement="top">
                <div>
                  <HiPencil className="edit" />
                </div>
              </Tooltip>

              <Tooltip title="ดาวน์โหลด QR Code" arrow placement="top">
                <div>
                  <HiOutlineQrcode
                    className="qrcode"
                    onClick={(e) => toggleQRcode(i.pid)}
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
  }, [data.length]);
  const allProduct = () => {
    let mid = localStorage.getItem("main_aid");
    axios
      .post("http://localhost:3333/product", {
        main_aid: mid,
      })
      .then((res) => {
        // console.log("table", res.data.lenght);
        setData(res.data);
        setCountProductAll(res.data.length);
      });
  };
  useEffect(() => {
    let mid = localStorage.getItem("main_aid");
    axios
      .post("http://localhost:3333/product", {
        main_aid: mid,
      })
      .then((res) => {
        // console.log("table", res.data.lenght);
        setData(res.data);
        setCountProductAll(res.data.length);
      });
  }, [re]);
  return (
    <>
      <div className=" contentner  gap-3 d-flex flex-column align-items-center">
        <div className="rounded row gap-3 col-12 justify-content-center ">
          <div className="col-10 col-md-3 col-sm-3 bg-white rounded border-5 border-primary border-start b-box">
            <div className="p-1 text-primary d-flex flex-column text-center  h-100 ">
              <div className="col-12 fw-bolder  ">ครุภัณฑ์ทั้งหมด</div>
              <div className="col-12 p-1  h-75 d-flex align-items-center flex-row flex-sm-column flex-md-row justify-content-center gap-2">
                <div className="d-flex align-items-center gap-1 ">
                  <h1 className="fw-bold">{countProductAll}</h1>รายการ{" "}
                </div>
                <Button
                  appearance="minimal"
                  intent="danger"
                  onClick={(e) => allProduct()}
                >
                  คลิกตรวจสอบ{" "}
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="col-10 col-md-3 col-sm-3 bg-white rounded border-5 border-success border-start b-box ">
            {" "}
            <div className="p-1 text-success d-flex flex-column text-center  h-100 ">
              <div className="col-12 fw-bolder  ">
                ครุภัณฑ์ใช้งานปกติทั้งหมด
              </div>
              <div className="col-12 p-1  h-75 d-flex align-items-center flex-row flex-sm-column flex-md-row justify-content-center gap-2">
                <div className="d-flex align-items-center gap-1 ">
                  <h1 className="fw-bold">{countProduct}</h1>รายการ{" "}
                </div>
                <Button
                  appearance="minimal"
                  intent="danger"
                  onClick={(e) => sortProduct(1)}
                >
                  คลิกตรวจสอบ{" "}
                </Button>{" "}
              </div>
            </div>{" "}
          </div>
          <div className="col-10   col-md-3 col-sm-3 bg-white rounded border-5 border-dark border-start b-box ">
            {" "}
            <div className="p-1 text-dark d-flex flex-column text-center  h-100 ">
              <div className="col-12 fw-bolder  ">
                จำหน่ายออกจากบัญชีทั้งหมด
              </div>
              <div className="col-12 p-1  h-75 d-flex align-items-center flex-row flex-sm-column flex-md-row justify-content-center gap-2">
                <div className="d-flex align-items-center gap-1 ">
                  <h1 className="fw-bold">{countProductOut}</h1>รายการ
                </div>
                <Button
                  appearance="minimal"
                  intent="danger"
                  onClick={(e) => sortProduct(5)}
                >
                  คลิกตรวจสอบ{" "}
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="manage col-10 col-md col-sm-10 bg-white rounded p-2 d-flex flex-row flex-md-column gap-2 justify-content-center align-items-center b-box">
            {" "}
            <Button
              onClick={() => setIsShown(true)}
              appearance="primary"
              className="w-100"
              intent="success"
              iconBefore={AddIcon}
            >
              เพิ่มครุภัณฑ์แบบเดี่ยว
            </Button>
            <Button
              onClick={() => setBasicModal(true)}
              appearance="minimal"
              className="bg-info-blue400 text-white w-100"
              iconBefore={AddIcon}
            >
              เพิ่มครุภัณฑ์แบบกลุ่ม
            </Button>
          </div>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////// */}
        <div className="page-product rounded p-1 border-info border-2 border-top">
          <MDBDataTable
            theadTextWhite
            theadColor="blue-grey darken-4"
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
        <Pane>
          <Dialog
            width={300}
            shouldCloseOnOverlayClick={true}
            isShown={qrmodal}
            title="QRCode ครุภัณฑ์"
            onCloseComplete={toggleQRcode}
            hasFooter={false}
          >
            <GenQRcode {...props} toggleQr={toggleQRcode} id={idqr} />{" "}
          </Dialog>
        </Pane>
        {/* Modal EverGreenUI */}
        <Pane>
          <Dialog
            // preventBodyScrolling
            width={1000}
            topOffset={20}
            shouldCloseOnOverlayClick={false}
            isShown={isShown}
            title="เพิ่มครุภัณฑ์เดี่ยว"
            onCloseComplete={() => setIsShown(false)}
            hasFooter={false}
            hasCancel={true}
          >
            <AddProductSingle show={() => setIsShown(false)} />
          </Dialog>
        </Pane>
        {/* End EverGreenUI */}
        {/* Modal EverGreenUI */}
        <Pane>
          <Dialog
            // preventBodyScrolling
            width={1000}
            topOffset={20}
            shouldCloseOnOverlayClick={false}
            isShown={basicModal}
            title="เพิ่มครุภัณฑ์แบบชุด"
            onCloseComplete={() => setBasicModal(false)}
            hasFooter={false}
            hasCancel={true}
          >
            <ProductAddGroup show={() => setBasicModal(false)} />
          </Dialog>
        </Pane>
        {/* End EverGreenUI */}
        {/* Modal EverGreenUI */}
        <Pane>
          <Dialog
       
            width={1000}
            topOffset={20}
            shouldCloseOnOverlayClick={true}
            isShown={detail}
            title="รายละเอียดครุภัณฑ์"
            onCloseComplete={() => setDetail(false)}
            hasFooter={true}
            hasCancel={false}
            confirmLabel="ปิด"
          >
            <ProductDetail id={idDetail} show={() => setDetail(false)} />
          </Dialog>
        </Pane>
        {/* End EverGreenUI */}
        {/* Modal EverGreenUI */}
        <Pane>
          <Dialog
       
            width={1000}
            topOffset={20}
            shouldCloseOnOverlayClick={true}
            isShown={edit}
            title="แก้ไขข้อมูลครุภัณฑ์"
            onCloseComplete={() => setEdit(false)}
            hasFooter={false}
           
          >
            <Edit_Product id={editId} show={() => setEdit(false)} />
          </Dialog>
        </Pane>
        {/* End EverGreenUI */}
      </div>
    </>
  );
}

export default Product;
