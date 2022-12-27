import axios from "axios";
import { Button } from "evergreen-ui";
import React, { useState } from "react";

function TestUploadExcel() {
  const [file, setFile] = useState(null);
  const Sub = () => {
    const formData = new formData();
    formData.append("excel", file);
    axios.post("http://localhost:3333/uploade", formData).then((res) => {});
  };
  const Change = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <form action="" onSubmit={Sub}>
        <input type="file" onChange={Change} name="excel" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default TestUploadExcel;
