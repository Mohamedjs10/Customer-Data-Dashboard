import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { useSelector } from "react-redux";
import useSWR from "swr";
import CircularProgress from "@mui/material/CircularProgress";
import { fetcher } from "../contents/utils/general-utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
function EditModal({ openEdit, currentId, setOpenEdit, endPoint }) {
  // const btn = useSelector((state) => state.btn.btn);
  // const insuranceOrLife = btn == 0 ? "insurance" : "life";

  // const { data, error, isLoading } = useSWR(
  //   `/api/sarwa/${insuranceOrLife}/${endPoint}?_id=${currentId}`,
  //   fetcher,
  //   {
  //     refreshInterval: 100,
  //   }
  // );
  // input states
  const [nameEn, setNameEn] = useState("");
  const handleNameEnChange = (event) => {
    setNameEn(event.target.value);
  };
  const [nameAr, setNameAr] = useState("");
  const handleNameArChange = (event) => {
    setNameAr(event.target.value);
  };
  const [positionEn, setPositionEn] = useState("");
  const handlePositionEnChange = (event) => {
    setPositionEn(event.target.value);
  };
  const [positionAr, setPositionAr] = useState("");
  const handlePositionArChange = (event) => {
    setPositionAr(event.target.value);
  };
  const [imgUrl, setImgUrl] = useState("");
  const handleImgUrlChange = (event) => {
    setImgUrl(event.target.value);
  };
  const [order, setOrder] = useState("");
  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  // useLayoutEffect(() => {
  //   setNameEn(data?.name?.en);
  //   setNameAr(data?.name?.ar);
  //   setPositionEn(data?.position?.en);
  //   setPositionAr(data?.position?.ar);
  //   setImgUrl(data?.imgUrl);
  //   setOrder(data?.order);
  // }, [data]);

  return (
    <div>
      <Modal
        open={openEdit}
        onClose={() => {
          // setOpenEdit(false);
          // setNameEn(data?.name?.en);
          // setNameAr(data?.name?.ar);
          // setPositionEn(data?.position?.en);
          // setPositionAr(data?.position?.ar);
          // setImgUrl(data?.imgUrl);
          // setOrder(data?.order);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "40ch" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            {/* {isLoading ? ( */}
            {false ? (
              <CircularProgress color="primary" />
            ) : (
              <>
                <TextField
                  id="outlined-basic"
                  label="Name (en)"
                  variant="outlined"
                  value={nameEn}
                  onChange={handleNameEnChange}
                />{" "}
                <TextField
                  id="outlined-basic"
                  label="Name (ar)"
                  variant="outlined"
                  value={nameAr}
                  onChange={handleNameArChange}
                />{" "}
                <TextField
                  id="outlined-basic"
                  label="Position (en)"
                  variant="outlined"
                  value={positionEn}
                  onChange={handlePositionEnChange}
                />{" "}
                <TextField
                  id="outlined-basic"
                  label="Position (ar)"
                  variant="outlined"
                  value={positionAr}
                  onChange={handlePositionArChange}
                />{" "}
                <TextField
                  id="outlined-basic"
                  label="Image URL"
                  variant="outlined"
                  value={imgUrl}
                  onChange={handleImgUrlChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Entry Order"
                  variant="outlined"
                  value={order}
                  onChange={handleOrderChange}
                />
                <Button
                  variant="contained"
                  endIcon={<DoneOutlineIcon />}
                  color="success"
                  sx={{ fontSize: 15, height: 45 }}
                  style={{ width: 200 }}
                  onClick={() => {
                    // if (
                    //   nameEn &&
                    //   nameAr &&
                    //   positionEn &&
                    //   positionAr &&
                    //   imgUrl &&
                    //   order
                    // ) {
                    //   fetch(
                    //     `http://localhost:3000/api/sarwa/${insuranceOrLife}/${endPoint}`,
                    //     {
                    //       method: "PUT",
                    //       body: JSON.stringify({
                    //         _id: currentId,
                    //         document: {
                    //           order: order,
                    //           name: { en: nameEn, ar: nameAr },
                    //           position: {
                    //             en: positionEn,
                    //             ar: positionAr,
                    //           },
                    //           imgUrl: imgUrl,
                    //         },
                    //       }),
                    //     }
                    //   );
                    //   setNameEn("");
                    //   setNameAr("");
                    //   setPositionEn("");
                    //   setPositionAr("");
                    //   setImgUrl("");
                    //   setOrder("");
                    //   setOpenEdit(false);
                    // }
                  }}
                >
                  Done Editing
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default EditModal;
