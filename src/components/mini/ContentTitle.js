import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
function ContentTitle() {
  const tab = useSelector((state) => state.tab.tab);
  // const btn = useSelector((state) => state.btn.btn);
  // const title = btn == 0 ? "Sarwa Insurance" : "Sarwa Life";
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        pb: 2,
        fontWeight: "bold",
        fontSize: 25,
        color: "black",
      }}
    >
      <Box>
        {/* {title} : {tab} */}
        {tab}
      </Box>
    </Box>
  );
}

export default ContentTitle;
