import { MDBCol, MDBContainer, MDBDataTable, MDBRow } from "mdbreact";
import React, { useState } from "react";
import "../../style.css";
import "./StyleProduct.css";
function ProductPage() {
  const [data, setData] = useState({
    columns:[
      {
        label:"hello",
        field:"hello"
      },
      {
        label:"hello",
        field:"hello"
      },
      {
        label:"hello",
        field:"hello"
      },
      {
        label:"hello",
        field:"hello"
      },
      {
        label:"hello",
        field:"hello"
      },
      {
        label:"hello",
        field:"hello"
      },
      {
        label:"hello",
        field:"hello"
      },
    ],
    rows:[{
      hello:"สวัสดีครับบบ"
    }]
  })
  return (
<MDBContainer size="xl">
  <MDBRow className="product-table" >
    <MDBCol  >
      <MDBDataTable data={data} responsive />
   
    </MDBCol>
  </MDBRow>
</MDBContainer>
  );
}

export default ProductPage;
