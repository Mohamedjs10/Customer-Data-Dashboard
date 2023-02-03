import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useSelector } from "react-redux";

import { style } from "../contents/utils/general-utils";
function AddModal({ openAdd, setOpenAdd, endPoint }) {
  // states
  const [nameEn, setNameEn] = useState();
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

  // const btn = useSelector((state) => state.btn.btn);
  // const insuranceOrLife = btn == 0 ? "insurance" : "life";

  return (
    <div>
      <Modal
        open={openAdd}
        onClose={() => {
          setOpenAdd(false);
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
            <TextField
              id="outlined-basic"
              label="Name (en)"
              variant="outlined"
              value={nameEn}
              onChange={handleNameEnChange}
            />
            <TextField
              id="outlined-basic"
              label="Name (ar)"
              variant="outlined"
              value={nameAr}
              onChange={handleNameArChange}
            />
            <TextField
              id="outlined-basic"
              label="Position (en)"
              variant="outlined"
              value={positionEn}
              onChange={handlePositionEnChange}
            />
            <TextField
              id="outlined-basic"
              label="Position (ar)"
              variant="outlined"
              value={positionAr}
              onChange={handlePositionArChange}
            />
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
              endIcon={<HowToRegIcon />}
              sx={{ fontSize: 15, height: 45 }}
              style={{ width: 200 }}
              onClick={() => {
                if (
                  nameEn &&
                  nameAr &&
                  positionEn &&
                  positionAr &&
                  imgUrl &&
                  order
                ) {
                  // fetch(
                  //   `http://localhost:3000/api/sarwa/${insuranceOrLife}/${endPoint}`,
                  //   {
                  //     method: "POST",
                  //     body: JSON.stringify({
                  //       document: {
                  //         name: { en: nameEn, ar: nameAr },
                  //         position: {
                  //           en: positionEn,
                  //           ar: positionAr,
                  //         },
                  //         imgUrl: imgUrl,
                  //       },
                  //     }),
                  //   }
                  // );
                  setNameEn("");
                  setNameAr("");
                  setPositionEn("");
                  setPositionAr("");
                  setImgUrl("");
                  setOrder("");
                  setOpenAdd(false);
                }
              }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AddModal;
