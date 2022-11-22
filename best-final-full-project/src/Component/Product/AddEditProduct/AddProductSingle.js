import { MDBCol, MDBContainer, MDBRow, MDBInput } from "mdbreact";
import React from "react";
import "./StyleProductAdd.css";

function AddProductSingle() {
  return (
    <div>
      <MDBContainer>
        {/* แถว 1 */}
        <MDBRow>
          <MDBCol md="6">
            <MDBInput label="หมายเลขครุภัณฑ์" outline />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="ชื่อรายการ" outline />
          </MDBCol>
        </MDBRow>
           {/* แถว 1 */}
        <MDBRow>
          <MDBCol md="6" >
            <MDBInput label="คุณลักษณะ" outline />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="รูปภาพ" outline />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default AddProductSingle;
