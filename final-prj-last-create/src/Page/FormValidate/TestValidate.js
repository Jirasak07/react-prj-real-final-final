import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function TestValidate() {
  // const [formElementd, setFormElement] = useState({
  //   username: {
  //     type: "text",
  //     value: "",
  //     validator: {
  //       required: true,
  //       minLength: 5,
  //       maxLength: 5,
  //     },
  //     touched: false,
  //     error: { status: true, message: "" },
  //   },
  //   formValidate: false,
  // });
  // const onFormChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   let updateForm = {...formElementd}
  //   updateForm[name].value = value
  //   updateForm[name].touched = true
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Submit = (e) => {
    alert(JSON.stringify(e));
  };
  return (
    <div>
      <Container maxWidth="xs">
        <h1>Hello</h1>
        <form action="" onSubmit={handleSubmit(Submit)}>
          <Box p={5} bgcolor="white">
            <TextField
              variant="outlined"
              label="name"
              fullWidth
              defaultValue="2"
              // value={input.name || ""}

              {...register("name", {
                required: "กรุณากรอกชื่อ",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "ไม่ถูกต้อง",
                },
              })}
              error={!!errors?.name}
              helperText={errors?.name ? errors.name.message : null}
            />
            <TextField
              variant="outlined"
              label="lname"
              fullWidth
              defaultValue="2"
              // value={input.name || ""}

              {...register("lname", { required: "กรุณากรอกนามสกุล" })}
              error={!!errors?.lname}
              helperText={errors?.lname ? errors.lname.message : null}
            />

            <Button
              type="submit"
              variant="outlined"
              fullWidth
              color="primary"
              className="mt-2"
            >
              {" "}
              Submit{" "}
            </Button>
          </Box>
        </form>
      </Container>
      {/* <div className="row">
        <div className="col-sm-3 mt-5"></div>
        <div className="card col-sm-6 mt-5">
          <div className="card-body ml-3 mr-3 mt-5 mb-1">
            <form action="">
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                />
                <div className="invalid-feedback">กรอกให้ครบ</div>
                <div className="text-center">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-sm-3 mt-5"></div>
      </div> */}
    </div>
  );
}

export default TestValidate;
