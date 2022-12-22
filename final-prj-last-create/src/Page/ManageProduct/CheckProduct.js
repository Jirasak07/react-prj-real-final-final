import { Button, Pane, TextInput } from "evergreen-ui";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider, mergeTheme, defaultTheme } from "evergreen-ui";
import "./StyleManage.css";

function CheckProduct(props) {
  const theme = mergeTheme(defaultTheme, {
    components: {
      Button: {
        appearances: {
          savecheck: {
            color: "white",
            paddingX: 12,
            paddingY: 8,
            borderRadius: 5,
            backgroundColor: "#FFB020",
            _hover: {
              backgroundColor: "#bd913f",
            },
            _active: {
              backgroundColor: "#bd913f",
            },
            _focus: {
              boxShadow: "0 0 0 2px #FFB020",
            },
          },
        },
      },
    },
  });
  const nav = useNavigate();
  const location = useLocation();
  const data = location.state.id;
  return (
    <ThemeProvider value={theme}>
      <div className="container">
        <div className="d-flex flex-column  align-items-center">
          <Pane
            padding="20px"
            className="rounded"
            elevation={1}
            marginTop="1rem"
            minHeight="10vh"
            minWidth="10vw"
            maxWidth="98vw"
            background="white"
          >
            <div className="fw-bolder">ตรวจสอบครุภัณฑ์หมายเลข : {data}</div>
            <div className="d-flex flex-column flex-md-row gap-4 m-2">
              {" "}
              <div className=" w-100">
                <Pane
                  className="rounded pd-check"
                  backgroundColor="white"
                  padding="10px"
                  height="100%"
                  border="default"
                >
                  <div className="text-center mb-1">
                    ข้อมูลครุภัณฑ์ล่าสุด : 2564
                  </div>
                  <div>ปีงบประมาณที่ตรวจ :</div>
                  <div>หน่วยงานที่ติดตั้ง :</div>
                  <div>สถานะ :</div>
                  <div>ผู้ตรวจ :</div>
                </Pane>
              </div>
              <div className="w-100">
                <Pane
                  className="rounded pd-check"
                  backgroundColor="white"
                  padding="10px"
                  height="100%"
                  border="default"
                >
                  <div className="d-flex justify-content-center flex-row  align-items-center ">
                    <div>ตรวจสอบครุภัณฑ์</div>
                  </div>
                  <div className="d-flex flex-column gap-1 mt-2">
                    <div className="row">
                      <div className="col-6">ปีงบประมาณที่ตรวจ :</div>
                      <TextInput className="col-5" />
                    </div>
                    <div className="row">
                      <div className="col-6">หน่วยงานที่ติดตั้ง :</div>
                      <TextInput className="col-5" />
                    </div>
                    <div className="row">
                      <div className="col-6">สถานะ :</div>
                      <TextInput className="col-5" />
                    </div>
                    <div className="row">
                      <div className="col-6">ผู้ตรวจ :</div>
                      <TextInput className="col-5" />
                    </div>
                  </div>
                </Pane>
              </div>
            </div>
            <div className="d-flex justify-content-end gap-2 ">
              <Button appearance="savecheck"> บันทึกการตรวจสอบ </Button>
              <Button
                appearance="minimal"
                intent="danger"
                onClick={() => nav("/home")}
              >
                {" "}
                ยกเลิก{" "}
              </Button>
            </div>
          </Pane>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CheckProduct;
