import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { format } from "date-fns";
import withReactContent from "sweetalert2-react-content";
import {
  Button,
  TextInputField,
  SelectField,
  TextareaField,
  Label,
} from "evergreen-ui";
import { useForm } from "react-hook-form";
import { BiImages } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
const MySwal = withReactContent(Swal);

//////////////////////////////////////////
const mid = localStorage.getItem("main_aid");
function AddProductSingle(props) {
  /////////////////////////////////////
  const [ptype, setPtype] = useState([]);
  const [pstatus, setPstatus] = useState([]);
  const [exday, setExDay] = useState();
  useEffect(() => {
    const date = new Date();
    const dd = date.toLocaleDateString("th-TH", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    setExDay(dd);
    axios.get("http://localhost:3333/show-product-type").then((res) => {
      setPtype(res.data);
      // console.log(res.data);
    });
    axios.get("http://localhost:3333/show-pstatus").then((res) => {
      setPstatus(res.data);
    });
  }, []);

  const [subagen, setSubAgen] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3333/show-sub-agen-where-main", {
        main_aid: mid,
      })
      .then((res) => {
        setSubAgen(res.data);
        // console.log(res.data);
      });
  }, []);

  const onSubmit = (e) => {
    var day1 = String(e.buydate).split("/");
    var buy1 = day1[1] + "/" + day1[0] + "/" + day1[2];
    const buydatee = format(new Date(buy1), "yyyy-MM-dd");
    /////////////////////////////
    var day2 = String(e.pickdate).split("/");
    var pick = day2[1] + "/" + day2[0] + "/" + day2[2];
    const pickk = format(new Date(pick), "yyyy-MM-dd");
    axios
      .post("http://localhost:3333/product-added", {
        pid: e.pid,
        pname: e.pname,
        pdetail: e.pdetail,
        qty: 1,
        unit: e.unit,
        price: e.price,
        finance: e.finance,
        acquirement: e.get,
        ptype_id: e.ptype_id,
        seller: e.seller,
        sub_aid: e.sub_aid,
        pstatus_id: e.pstatus_id,
        buydate: buydatee,
        pickdate: pickk,
        fisicalyear: e.fisicalyear,
        imgname: e.pid + typename,
      })
      .then((res) => {
        // console.log(res.data.status);
        if (res.data.status === "error") {
          MySwal.fire({
            title: <strong>??????????????????????????????????????????????????????</strong>,
            html: `${res.data.message.sqlMessage}`,
            icon: "error",
          });
        } else if (res.data.status !== "error") {
          let timerInterval;
          MySwal.fire({
            title: "?????????????????????????????????????????????",
            html: "I will close in <b></b> milliseconds.",
            timer: 900,
            icon: "success",
            timerProgressBar: true,
            didOpen: () => {
              MySwal.showLoading();
              const b = MySwal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = MySwal.getTimerLeft();
              }, 1200);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          })
            .then((result) => {
              /* Read more about handling dismissals below */

              if (result.dismiss === Swal.DismissReason.timer) {
                const url = "http://localhost:3333/upload";
                const formData = new FormData();

                formData.append("photo", file, e.pid + typename);
                // console.log(file);
                axios.post(url, formData).then((response) => {});
                // console.log("I was closed by the timer");
              }
            })
            .then((value) => {
              setTimeout(() => {
                props.show();
                // window.location.reload();
                // setInput([]);
              }, 100);
            });
        }
      });
    // Swal.fire({
    //   position: "top",
    //   icon: "success",
    //   title: "?????????????????????????????????????????????",
    //   showConfirmButton: false,
    //   timer: 1000,
    // });
  };
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [file, setFile] = useState();
  const [typename, setTypeName] = useState("");
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);
  const onImageChange = (e) => {
    setImages([...e.target.files]);
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    // console.log("." + e.target.files[0].type.split("image/")[1]);
    setTypeName("." + e.target.files[0].type.split("image/")[1]);
  };
  ///////////////////////////////////////
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  ///////////////////////////////////////

  return (
    <div className="container">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className=" row justify-content-center"
      >
        <div className="col-sm-5 col-12">
          <TextInputField
            id="ids-are-optional"
            label="?????????????????????????????????????????????"
            {...register("pid", {
              required: {
                value: true,
                message: "????????????????????????????????????????????????????????????????????????",
              },
              pattern: {
                value: /\w{6}-\d{2}\.\d{2}-\d{4}/,
                message: "??????????????????????????????????????????????????????????????????????????????????????????????????????",
              },
              maxLength: {
                value: 17,
                message:
                  "?????????????????????????????????????????????????????????????????????????????????????????????????????? (????????????????????? 17 ????????????????????????)",
              },
            })}
            isInvalid={!!errors.pid}
            validationMessage={errors?.pid ? errors.pid.message : null}
          />
        </div>

        <div className="col-sm-5 col-12">
          <TextInputField
            //   pattern="\w{6}-\d{2}\.\d{2}-\d{4}"
            id="ids-are-optional"
            label="????????????????????????????????????"
            {...register("pname", {
              required: {
                value: true,
                message: "???????????????????????????????????????????????????????????????",
              },
            })}
            isInvalid={!!errors.pname}
            validationMessage={errors?.pname ? errors.pname.message : null}
          />
        </div>
        <div className="col-12 col-sm-5">
          <SelectField
            label="??????????????????????????????????????????"
            {...register("ptype_id", {
              required: {
                value: true,
                message: "???????????????????????????????????????????????????????????????????????????",
              },
            })}
            isInvalid={!!errors.ptype_id}
            validationMessage={
              errors?.ptype_id ? errors.ptype_id.message : null
            }
          >
            {ptype.map((item, id) => (
              <option value={item.ptype_id}>{item.ptype_name}</option>
            ))}
          </SelectField>
        </div>
        <div className="col-12 col-sm-5">
          <SelectField
            label="???????????????????????????????????????"
            {...register("pstatus_id", {
              required: {
                value: true,
                message: "????????????????????????????????????????????????????????????????????????",
              },
            })}
            isInvalid={!!errors.pstatus_id}
            validationMessage={
              errors?.pstatus_id ? errors.pstatus_id.message : null
            }
          >
            {pstatus.map((item, id) => (
              <option value={item.pstatus_id}>{item.pstatus_name}</option>
            ))}
          </SelectField>
        </div>
        <div className="col-12 col-sm-5">
          <TextareaField
            label="???????????????????????????????????????????????????"
            {...register("pdetail", {
              required: {
                value: true,
                message: "????????????????????????????????????????????? ???????????? -",
              },
            })}
            isInvalid={!!errors.pdetail}
            validationMessage={errors?.pdetail ? errors.pdetail.message : null}
          />
        </div>
        <div className="col-12 col-sm-5">
          <Label
            className="mb-2"
            htmlFor="textarea-2"
            marginBottom={4}
            display="block"
          >
            ??????????????????????????????????????????
          </Label>
          <div className="image-input">
            <div className="logoimg-upload">
              <BiImages />
            </div>
            <div className="imgShow">
              {imageURLs.map((imageSrc, idx) => (
                <img key={idx} src={imageSrc} alt="" width={110} />
              ))}
            </div>
            <TextInputField
              type="file"
              className="input-image"
              onChange={onImageChange}
              name="photo"
            />
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <TextInputField
            label="???????????????????????????????????????????????????"
            placeholder={exday + "..."}
            // description="???????????????????????? 07/12/2565"
            {...register("buydate", {
              required: {
                value: true,
                message: "?????????????????????????????????????????????",
              },
              pattern: {
                value:
                  /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                message: "???????????????????????????????????????????????????????????????????????????",
              },
            })}
            isInvalid={!!errors.buydate}
            validationMessage={errors?.buydate ? errors.buydate.message : null}
          />
        </div>
        <div className="col-12 col-sm-4">
          <TextInputField
            label="????????????????????????????????????????????????"
            placeholder={exday + "..."}
            // description="???????????????????????? 07/12/2565"
            {...register("pickdate", {
              required: {
                value: true,
                message: "?????????????????????????????????????????????",
              },
              pattern: {
                value:
                  /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                message: "???????????????????????????????????????????????????????????????????????????",
              },
            })}
            isInvalid={!!errors.pickdate}
            validationMessage={
              errors?.pickdate ? errors.pickdate.message : null
            }
          />
        </div>
        <div className="col-12 col-sm-2">
          <TextInputField
            type="number"
            label="??????????????????????????????"
            {...register("fisicalyear", {
              required: {
                value: true,
                message: "?????????????????????????????????????????????",
              },
              minLength: {
                value: 4,
                message: "????????????????????? 4 ??????????????????",
              },
              maxLength: {
                value: 4,
                message: "????????????????????? 4 ??????????????????",
              },
            })}
            isInvalid={!!errors.fisicalyear}
            validationMessage={
              errors?.fisicalyear ? errors.fisicalyear.message : null
            }
          />
        </div>
        <div className="col-6 col-sm-3">
          <TextInputField
            label="????????????/???????????????"
            type="number"
            {...register("price", {
              required: {
                value: true,
                message: "?????????????????????????????????????????????",
              },
              pattern: {
                value: /^[1-9][0-9]*$/,
                message: "?????????????????????????????????????????????????????????",
              },
            })}
            isInvalid={!!errors.price}
            validationMessage={errors?.price ? errors.price.message : null}
          />
        </div>
        <div className="col-6 col-sm-3">
          <TextInputField
            label="??????????????????????????????"
            {...register("finance", {
              required: {
                value: true,
                message: "????????????????????????????????????????????? ???????????? -",
              },
            })}
            isInvalid={!!errors.finance}
            validationMessage={errors?.finance ? errors.finance.message : null}
          />
        </div>
        <div className="col-6 col-sm-2">
          <TextInputField label="???????????????" value="1" type="number" name="qty" />
        </div>
        <div className="col-6 col-sm-2">
          <TextInputField
            label="????????????????????????"
            name="unit"
            {...register("unit", {
              required: {
                value: true,
                message: "?????????????????????????????????????????????",
              },
            })}
            isInvalid={!!errors.unit}
            validationMessage={errors?.unit ? errors.unit.message : null}
          />
        </div>
        <div className="col-12 col-sm-3">
          <TextInputField
            label="????????????????????????????????????????????????"
            {...register("seller", {
              required: {
                value: true,
                message: "????????????????????????????????????????????? ???????????? -",
              },
            })}
            isInvalid={!!errors.seller}
            validationMessage={errors?.seller ? errors.seller.message : null}
          />
        </div>
        <div className="col-12 col-sm-3">
          <TextInputField
            label="???????????????????????????????????????"
            {...register("get", {
              required: {
                value: true,
                message: "????????????????????????????????????????????? ???????????? -",
              },
            })}
            isInvalid={!!errors.get}
            validationMessage={errors?.get ? errors.get.message : null}
          />
        </div>
        <div className="col-12 col-sm-4">
          <SelectField
            label="??????????????????????????????????????????????????????"
            {...register("sub_aid", {
              required: {
                value: true,
                message: "?????????????????????????????????????????????????????????????????????????????????",
              },
            })}
            isInvalid={!!errors.sub_aid}
            validationMessage={errors?.sub_aid ? errors.sub_aid.message : null}
          >
            {subagen.map((item, id) => (
              <option value={item.sub_aid}>{item.sub_aname}</option>
            ))}
          </SelectField>
        </div>

        <footer className="d-flex justify-content-end gap-2 mb-3">
          <Button
            appearance="primary"
            intent="success"
            // onClick={onSubmit}
            type="submit"
          >
            ??????????????????
          </Button>
          <Button onClick={props.show} intent="danger" type="button">
            ??????????????????
          </Button>
        </footer>
      </form>
    </div>
  );
}

export default AddProductSingle;
