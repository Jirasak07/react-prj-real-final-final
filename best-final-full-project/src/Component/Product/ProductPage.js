import axios from "axios";
import { MDBCol, MDBContainer, MDBDataTable, MDBRow } from "mdbreact";
import React, { useEffect, useState } from "react";
import "../../style.css";

import "./StyleProduct.css";
function ProductPage() {
  const [data ,setData] = useState({})
  useEffect(()=>{
    axios.get('http://localhost:3333/product').then((res)=>{
      setData({
        columns:[
          {
            label:"หมายเลขครุภัณฑ์",
            field:"pid",
            width: 150,
          
          },
          {
            label:"รายการ",
            field:"pname",
            width: 270,
          },
          {
            label:"หน่วยงาน",
            field:"sub_aid",
            width: 270,
          },
          {
            label:"ตรวจล่าสุด",
            field:"lastyear"
          },
         
          {
            label:"สถานะ",
            field:"pstatus_id",
            width: 100,
          },
          {
            label:"ผู้ตรวจ",
            field:"userid"
          },
          {
            label:"Manage",
            field:"manage",
            with:300
          },
        ],
        rows:[
          ...res.data.map((item)=>({
            pid:<>{item.pid}</>,
            pname:<>{item.pname}</>,
            sub_aid:<>{item.sub_aid}</>,
            lastyear:<>{item.fisicalyear}</>,
            pstatus_id:<>{item.pstatus_id}</>,
            userid:<>{item.user_id}</>,
            manage:<div className="manage">
              <div className="btn btn-warning btn-sm but ">แก้ไข</div>
              <div className="btn btn-secondary btn-sm but ">ตรวจสอบ</div>
              <div className="btn btn-success btn-sm but ">อัพเดท</div>
              <div className="btn btn-info btn-sm but ">QRCode</div>
            </div>,

          }))
        ]
      })
    })
  })
 
  return (
<div  className="container-fulid contain" >
  <div className="product-table text-wrap">
  <MDBRow  >
    <MDBCol sm="12">
    
      <MDBDataTable  entriesLabel="จำนวนครุภัณฑ์ที่แสดง"  searchTop searchBottom={false}   borderless hover  data={data}  paginationLabel={["ก่อนหน้า", "ถัดไป"]} infoLabel={["แสดง", "รายการ ถึง", "รายการ จากทั้งหมด", "รายการ"]} />
    </MDBCol>
  </MDBRow>
  </div>
</div>
  );
}

export default ProductPage;
