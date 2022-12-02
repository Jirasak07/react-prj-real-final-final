import React, { useState } from "react";
import { MDBModalFooter } from "mdbreact";

function Product_Add_Single() {
  return (
    <div>
      <div className="container-sm-fulid">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">2</div>
        </div>
      </div>
      <MDBModalFooter>
        <div className="btn btn-success btn-sm">บันทึก</div>
      </MDBModalFooter>
    </div>
  );
}

export default Product_Add_Single;
