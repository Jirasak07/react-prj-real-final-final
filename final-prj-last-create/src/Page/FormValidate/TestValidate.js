import { Button } from "@mui/material";
import format from "date-fns/format";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ConsoleIcon } from "evergreen-ui";
import axios from "axios";

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
  const [input, setInput] = useState([]);
  const onChange = (e) => {
    console.log(e.target.value);
  };

  const {
    setValue,
    resetField,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Submit = (e) => {
    console.log(String(e.name))
    var ds =String(e.name).split('/')
    console.log(ds)
    var day = ds[1]+"/"+ds[0]+"/"+ds[2]
    console.log("Dayyyyyyy",day)
    console.log(format(new Date(day),'yyyy-MM-dd'))
    var day23 = format(new Date(day),'yyyy-MM-dd')
    axios.post('http://localhost:3333/date',{
      idid:5,
      day: day23
    })
  };
  const Cancel = () => {
    resetField("pt_id");
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
              {...register("name", {
                required: true,
              })}
              error={!!errors?.name}
              helperText={errors?.name ? errors.name.message : null}
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
            <Button fullWidth color="error" onClick={Cancel}>
              Reset
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
