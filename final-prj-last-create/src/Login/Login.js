import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import imageLogo from "../Image/LOGO RGB PNG-สำหรับงานนำเสนอแบบดิจิติล.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
function Login() {
  const nav = useNavigate();
  const [input, setInput] = useState([]);
  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const Login = (e) => {
    axios
      .post("http://localhost:3333/login", {
        username: input.username,
        password: input.password,
      })
      .then((res) => {
        if (res.data.status == "ok") {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_id", res.data.userid);
          localStorage.setItem("main_aid", res.data.mid);

          nav("/home");
        } else {
          alert("Login Faild ? !? ");
        }
      });
  };

  return (
    <div className="Page-Login">
      <div className="box1 col-0 col-sm-4 col-md-6 col-lg-8 "></div>
      <div className="box2 col-12 col-sm-8 col-md-6 col-lg-4 ">
        <div className="Form-login">
          <div className="image">
            <img src={imageLogo} width="150px" alt="img" />
          </div>
          <div className="nname text-center font-monospace">
            <p>
              ระบบตรวจสอบครุภัณฑ์ <br /> สำนักส่งเสริมวิชาการและงานทะเบียน
            </p>
          </div>
          <div className="form-input form-group ">
            <TextField
              fullWidth
              id="outlined-basic"
              label="ชื่อผู้ใช้"
              variant="outlined"
              name="username"
              value={input.username || ""}
              onChange={onInputChange}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="รหัสผ่าน"
              variant="outlined"
              type="password"
              name="password"
              value={input.password || ""}
              onChange={onInputChange}
            />
            <Button fullWidth size="large" variant="contained" onClick={Login}>
              เข้าสู่ระบบ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
