import { MDBDataTable } from "mdbreact";
import React, { useState } from "react";
import "./StyleProduct.css";
function Product() {
    const [data, setData] = useState({
        columns:[
            {
                label:"หมายเลขครุภัณฑ์",
                field:"pid"
            },
            {
                label:"รายการ",
                field:"pname"
            },
            {
                label:"หน่วยงานที่ติดตั้ง",
                field:"sname"
            },
            {
                label:"สถานะ",
                field:"pstatus_name"
            },
            {
                label:"หมายเลขครุภัณฑ์",
                field:"pid"
            },
            {
                label:"หมายเลขครุภัณฑ์",
                field:"pid"
            },
            {
                label:"หมายเลขครุภัณฑ์",
                field:"pid"
            },
            {
                label:"หมายเลขครุภัณฑ์",
                field:"pid"
            },
            
        ]
    })
  return (
    <div className="bg-red">
      <div className="container-sm">
        <MDBDataTable sortable={false} theadColor="dark" data={data}/></div>
    </div>
  );
}

export default Product;
