import { MDBCol, MDBContainer, MDBDataTableV5, MDBRow } from "mdbreact";
import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import "./styleProduct.css";
import Add_Product_Group from "./Add_Product_Group";
import Add_Product_Single from "./Add_Product_Single copy";
function Product() {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const [modalG, setModalG] = useState(false);
  const toggleG = () => {
    setModalG(!modalG);
  };

  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct({
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
          label: "หน่วยงานที่ติดตั้ง",
          field: "sname",
        },
        {
          label: "ตรวจสอบล่าสุด",
          field: "lastyear",
        },
        {
          label: "สถานะ",
          field: "pstatus",
        },
        {
          label: "จัดการ",
          field: "manage",

      
        },
      ],
      rows: [
        {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        },
        {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        },
        {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        }, {
          pid:'11111111111111111',
          pname:'1111111111111111111111',
          sname:'1111111111111111',
          lastyear:'5555',
          pstatus:'555555555555',
          manage: (
            <div className=" btn-manage">
              <div className="btn btn-warning btn-sm ">แก้ไข</div>
              <div className="btn btn-info btn-sm ">QRCode</div>
              <div className="btn btn-secondary btn-sm ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm ">อัพเดท</div>
            </div>
          ),
        },
      ],
    });
  });
  return (
    <>
      <MDBContainer fluid className="w-100 h-50 content  ">
        <MDBRow className="my-3 mx-2 gap-2 justify-content-center">
          <MDBCol size="12" md="2" className="manage ">
            <div className="">
              <div className="d-grid">
                <div className="btn btn-secondary  " onClick={toggle}>
                  เพิ่มครุภัณฑ์แบบเดี่ยว
                </div>
                <div className="btn btn-info " onClick={toggleG}>
                  เพิ่มครุภัณฑ์แบบชุด
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol size="12" md="9" className="product">
            <MDBDataTableV5
            responsive
            data={product} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* Modal Add Product Single */}
      <MDBModal isOpen={modal} toggle={toggle} size="lg">
        <MDBModalHeader toggle={toggle}>เพิ่มครุภัณฑ์แบบเดี่ยว</MDBModalHeader>
        <MDBModalBody>
          <Add_Product_Single />
        </MDBModalBody>
        <MDBModalFooter>
          <div className="btn btn-success ">บันทึก</div>
          <div className="btn btn-danger " onClick={toggle}>
            ยกเลิก
          </div>
        </MDBModalFooter>
      </MDBModal>
      {/* End Modal Add Product Single */}

      {/* Modal Add Product Group */}
      <MDBModal isOpen={modalG} toggle={toggleG} size="lg">
        <MDBModalHeader toggle={toggleG}>เพิ่มครุภัณฑ์แบบชุด</MDBModalHeader>
        <MDBModalBody>
          <Add_Product_Group />
        </MDBModalBody>
        <MDBModalFooter>
          <div className="btn btn-success ">บันทึก</div>
          <div className="btn btn-danger " onClick={toggleG}>
            ยกเลิก
          </div>
        </MDBModalFooter>
      </MDBModal>
      <div className="pb-5"></div>
      {/* End Modal Add Product Group */}
    </>
  );
}

export default Product;
