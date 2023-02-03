import Alert from "@mui/material/Alert";
import React from "react";

function TimingAlert() {
  return (
    <Alert variant="filled" severity="error" sx={{ height: 50 }}>
      Enent has been deleted
    </Alert>
  );
}

export default TimingAlert;
