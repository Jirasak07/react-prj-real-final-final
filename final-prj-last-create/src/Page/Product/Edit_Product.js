import React, { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import th from "date-fns/locale/th"; // the locale you want
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
import { format } from "date-fns";
const MySwal = withReactContent(Swal);

//////////////////////////////////////////
const mid = localStorage.getItem("main_aid");
function Edit_Product(props) {
  const [ptype, setPtype] = useState([]);
  const [pstatus, setPstatus] = useState([]);
  const [exday, setExDay] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();
  const [agen, setAgen] = useState();
  const [dataShowEdit, setDataShowEdit] = useState({});

  useEffect(() => {
    axios
      .post("http://localhost:3333/product-showedit", {
        pid: props.id,
      })
      .then((res) => {
        const day1 = new Date(res.data[0].buydate);
        const buydate = format(day1, "dd/MM/yyyy");
        const day2 = new Date(res.data[0].pickdate);
        const pickdate = format(day2, "dd/MM/yyyy");
        console.log(format(day1, "dd-MMM-yyyy"));
        setValue("pname", res.data[0].pname);
        setValue("pdetail", res.data[0].pdetail);
        setValue("buydate", buydate);
        setValue("pickdate", pickdate);
        setValue("fisicalyear", res.data[0].fisicalyear);
        setValue("price", res.data[0].price);
        setValue("finance", res.data[0].finance);
        setValue("unit", res.data[0].unit);
        setValue("seller", res.data[0].seller);
        setValue("get", res.data[0].acquirement);
        setValue("ptype_id", res.data[0].ptype_id);
        setImgName(res.data[0].image);
        console.log("ptype_id", res.data[0].ptype_id);
        setStatus(res.data[0].ptype_id);
        console.log(
          new Intl.NumberFormat("th-TH", {
            maximumSignificantDigits: 3,
          }).format(res.data[0].price)
        );
      });
  }, []);
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
      .put("http://localhost:3333/update-product", {
        pid: props.id,
        pname: e.pname,
        pdetail: e.pdetail,
        unit: e.unit,
        price: e.price,
        finance: e.finance,
        acquirement: e.get,
        ptype_id: e.ptype_id,
        buydate: buydatee,
        pickdate: pickk,
        fisicalyear: e.fisicalyear,
        seller: e.seller,
        image: imgname,
      })
      .then((res) => {
        // if (res.data.status === "error") {
        //   MySwal.fire({
        //     title: <strong>ไม่สามารถบันทึกได้</strong>,
        //     html: `${res.data.message.sqlMessage}`,
        //     icon: "error",
        //   });
        // } else if (res.data.status !== "error") {
        //   let timerInterval;
        //   MySwal.fire({
        //     title: "บันทึกเสร็จสิ้น",
        //     html: "I will close in <b></b> milliseconds.",
        //     timer: 900,
        //     icon: "success",
        //     timerProgressBar: true,
        //     didOpen: () => {
        //       MySwal.showLoading();
        //       const b = MySwal.getHtmlContainer().querySelector("b");
        //       timerInterval = setInterval(() => {
        //         b.textContent = MySwal.getTimerLeft();
        //       }, 1200);
        //     },
        //     willClose: () => {
        //       clearInterval(timerInterval);
        //     },
        //   })
        //     .then((result) => {
        //       /* Read more about handling dismissals below */

        //       if (result.dismiss === Swal.DismissReason.timer) {
        //         if (file) {
        //           const url = "http://localhost:3333/upload";
        //           const formData = new FormData();
        //           formData.append("photo", file, imgname);
        //           // console.log(file);
        //           axios.post(url, formData).then((response) => {});
        //           // console.log("I was closed by the timer");
        //         }
        //       }
        //     })
        //     .then((value) => {
        //       setTimeout(() => {
        //         props.show();
        //         window.location.reload(false);
        //         // window.location.reload();
        //         // setInput([]);
        //       }, 100);
        //     });
        // }
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        }).then((val)=>{
   
                 props.show();
                window.location.reload(false);
      })
      })
  };
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [file, setFile] = useState();
  const [typename, setTypeName] = useState("");
  const [imgname, setImgName] = useState();
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);
  const onImageChange = (e) => {
    const nameImg = String(props.id).split("/");
    const pidd = nameImg[0];
    setImages([...e.target.files]);
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    // console.log("." + e.target.files[0].type.split("image/")[1]);
    setTypeName("." + e.target.files[0].type.split("image/")[1]);

    setImgName(pidd + "." + e.target.files[0].type.split("image/")[1]);
  };
  const [image, setImage] = useState();
  useEffect(() => {
    axios
      .post("http://localhost:3333/find-img", {
        pid: props.id,
      })
      .then((res) => {
        setImage("http://localhost:3333/img/" + res.data[0].image);
      });
  }, [props.id]);
  ///////////////////////////////////////
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  ///////////////////////////////////////
  return (
    <div className="container">
      <div className="text-center mb-2"> ครุภัณฑ์หมายเลข : {props.id}</div>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className=" row justify-content-center"
      >
        <div className="col-sm-5 col-12">
          <TextInputField
            //   pattern="\w{6}-\d{2}\.\d{2}-\d{4}"

            label="ชื่อครุภัณฑ์"
            {...register("pname", {
              required: {
                value: true,
                message: "กรุณากรอกชื่อครุภัณฑ์",
              },
            })}
            isInvalid={!!errors.pname}
            validationMessage={errors?.pname ? errors.pname.message : null}
          />
        </div>
        <div className="col-12 col-sm-5">
          <SelectField
            label="ประเภทครุภัณฑ์"
            value={status}
            {...register("ptype_id", {
              onChange: (e) => setStatus(e.target.value),
              required: {
                value: true,
                message: "จะใช้ประเภทแรกในการบันทึก",
              },
            })}
            isInvalid={!!errors.ptype_id}
            validationMessage={
              errors?.ptype_id ? errors.ptype_id.message : null
            }
          >
            {ptype.map((item, id) => (
              <option key={item.ptype_id} value={item.ptype_id}>
                {item.ptype_name}
              </option>
            ))}
          </SelectField>
        </div>
        <div className="col-12 col-sm-5">
          <TextareaField
            label="คุณลักษณะครุภัณฑ์"
            {...register("pdetail", {
              required: {
                value: true,
                message: "กรุณากรอกข้อมูล หรือ -",
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
            รูปภาพครุภัณฑ์
          </Label>
          <div className="image-input">
            <div className="logoimg-upload">
              <BiImages />
            </div>
            <div className="imgShow">
              {imageURLs.length ? (
                <>
                  {" "}
                  {imageURLs.map((imageSrc, idx) => (
                    <img key={idx} src={imageSrc} alt="" width={110} />
                  ))}
                </>
              ) : (
                <>
                  <img
                    src={image}
                    //   className="w-100 h-100 rounded img-detail"
                    width={110}
                  />
                </>
              )}
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
            label="วันเดือนปีที่ซื้อ"
            placeholder={exday + "..."}
            // description="ตัวอย่าง 07/12/2565"
            {...register("buydate", {
              required: {
                value: true,
                message: "กรุณากรอกข้อมูล",
              },
              pattern: {
                value:
                  /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                message: "กรุณาป้อนข้อมูลให้ถูกต้อง",
              },
            })}
            isInvalid={!!errors.buydate}
            validationMessage={errors?.buydate ? errors.buydate.message : null}
          />
        </div>
        <div className="col-12 col-sm-3">
          <TextInputField
            label="วันเดือนปีที่รับ"
            placeholder={exday + "..."}
            // description="ตัวอย่าง 07/12/2565"
            {...register("pickdate", {
              required: {
                value: true,
                message: "กรุณากรอกข้อมูล",
              },
              pattern: {
                value:
                  /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                message: "กรุณาป้อนข้อมูลให้ถูกต้อง",
              },
            })}
            isInvalid={!!errors.pickdate}
            validationMessage={
              errors?.pickdate ? errors.pickdate.message : null
            }
          />
        </div>
        <div className="col-12 col-sm-3">
          <TextInputField
            type="number"
            label="ปีงบประมาณ"
            {...register("fisicalyear", {
              required: {
                value: true,
                message: "กรุณากรอกข้อมูล",
              },
              minLength: {
                value: 4,
                message: "กรอกได้ 4 ตัวเลข",
              },
              maxLength: {
                value: 4,
                message: "กรอกได้ 4 ตัวเลข",
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
            label="ราคา/หน่วย"
            type="number"
            {...register("price", {
              required: {
                value: true,
                message: "กรุณากรอกข้อมูล",
              },
              pattern: {
                value: /^[1-9][0-9]*$/,
                message: "กรุณากรอกให้ถูกต้อง",
              },
            })}
            isInvalid={!!errors.price}
            validationMessage={errors?.price ? errors.price.message : null}
          />
        </div>
        <div className="col-6 col-sm-3">
          <TextInputField
            label="ประเภทเงิน"
            {...register("finance", {
              required: {
                value: true,
                message: "กรุณากรอกข้อมูล หรือ -",
              },
            })}
            isInvalid={!!errors.finance}
            validationMessage={errors?.finance ? errors.finance.message : null}
          />
        </div>
        <div className="col-6 col-sm-2">
          <TextInputField label="จำนวน" value="1" type="number" name="qty" />
        </div>
        <div className="col-6 col-sm-2">
          <TextInputField
            label="หน่วยนับ"
            name="unit"
            {...register("unit", {
              required: {
                value: true,
                message: "กรุณากรอกข้อมูล",
              },
            })}
            isInvalid={!!errors.unit}
            validationMessage={errors?.unit ? errors.unit.message : null}
          />
        </div>
        <div className="col-12 col-sm-5">
          <TextInputField
            label="รายละเอียดผู้ขาย"
            {...register("seller", {
              required: {
                value: true,
                message: "กรุณากรอกข้อมูล หรือ -",
              },
            })}
            isInvalid={!!errors.seller}
            validationMessage={errors?.seller ? errors.seller.message : null}
          />
        </div>
        <div className="col-12 col-sm-5">
          <TextInputField
            label="ที่มาครุภัณฑ์"
            {...register("get", {
              required: {
                value: true,
                message: "กรุณากรอกข้อมูล หรือ -",
              },
            })}
            isInvalid={!!errors.get}
            validationMessage={errors?.get ? errors.get.message : null}
          />
        </div>

        <footer className="d-flex justify-content-end gap-2 mb-3">
          <Button
            appearance="primary"
            intent="success"
            // onClick={onSubmit}
            type="submit"
          >
            บันทึก
          </Button>
          <Button onClick={props.show} intent="danger" type="button">
            ยกเลิก
          </Button>
        </footer>
      </form>
    </div>
  );
}

export default Edit_Product;
