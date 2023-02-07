import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export default function TakeInput({ take, setTake }) {
  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   if (true) {
  //     setTake(event.target.value);
  //   }
  // };
  const handleChange = (e) => {
    const regex = /^[1-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setTake(e.target.value);
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: 100 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Per Page"
        size="small"
        type="text"
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => handleChange(e)}
        value={take}
      />
    </Box>
  );
}
