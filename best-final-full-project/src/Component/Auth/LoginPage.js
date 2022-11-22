import { MDBInput } from "mdbreact";
import { useNavigate } from "react-router-dom/dist";
import React, { useEffect, useState } from "react";
import imglogo from "./LOGO RGB PNG-สำหรับงานนำเสนอแบบดิจิติล.png";
import "./StyleLoginPage.css";
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function LoginPage() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const subMit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/login", {
        username: inputs.username,
        password: inputs.password,
      })
      .then((res) => {
        // console.log(res.data.token)
        if (res.data.status === "ok") {
          MySwal.fire({
            html: <i>{res.data.message}</i>,
            icon: "success",
          }).then((value) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user_id", res.data.userid);
            localStorage.setItem("login", "ok");
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              navigate("/product");
            }, 2000);
          });
          // axios.get("").then((res)=>{
          // localStorage.setItem("token", res.data.token);
          // localStorage.setItem("user_id", res.data.userid);
          // localStorage.setItem("login", "ok");
          // navigate("/product");
          // })
          // console.log("Login success")
          // MySwal.fire({
          //   html: <i>{res.data.message}</i>,
          //   icon: "success",
          // }).then((value) => {

          // });
        } else {
          MySwal.fire({
            // customClass: {
            //   confirmButton: "btn btn-success",
            //   cancelButton: "btn btn-danger",
            // },
            html: <i>{res.data.message}</i>,
            icon: "warning",
       
          });
          // MySwal.fire({
          //   html: <i>{res.data.message}</i>,
          //   icon: "error",
          // });
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      {loading ? (
        <>
          <div className="load">
            <div class="loading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="LoginPage">
            <div>
              <div className="manageRow">
                <div className="w-100 img col-xl-8 col-md-6 " sm="6"></div>
                <div className="w-100 form ">
                  <div className="formLogin">
                    <div className="logo">
                      <img src={imglogo} width="150px" />
                    </div>
                    <span className="nameSystem">
                      <div>ระบบตรวจสอบครุภัณฑ์</div>{" "}
                      <div>สำนักส่งเสริมวิชาการและงานทะเบียน</div>{" "}
                    </span>
                    <div className="col-8">
                      <MDBInput
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                        label="ชื่อผู้ใช้"
                        outline
                      />
                      <MDBInput
                       name="password"
                       type="password"
                       value={inputs.password || ""}
                       onChange={handleChange}
                      label="รหัสผ่าน" outline />
                    </div>
                    <div className="d-flex justify-content-center w-100 col-8">
                      <div onClick={subMit} className=" w-100 btn btn-success btn-sm">
                        เข้าสู่ระบบ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LoginPage;
