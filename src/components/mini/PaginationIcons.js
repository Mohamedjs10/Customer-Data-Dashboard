import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import { pad } from "../contents/utils/general-utils";

export default function PaginationIcons({ page, setPage, paginatedData }) {
  console.log(page);
  return (
    <Box
      sx={{
        // ml: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton
        aria-label="delete"
        size="small"
        sx={{ height: 35, width: 35 }}
        onClick={() => {
          if (page > 1) {
            setPage((prev) => prev - 1);
          }
        }}
      >
        <ArrowBackIosIcon fontSize="inherit" />
      </IconButton>
      <span>{`${pad(page)} / ${
        paginatedData?.meta?.total_pages
          ? paginatedData?.meta?.total_pages
          : "01"
      }`}</span>
      {/* <span>{page}</span> */}
      <IconButton
        aria-label="delete"
        size="small"
        sx={{ height: 35, width: 35 }}
        onClick={() => {
          if (page < paginatedData.meta.total_pages) {
            setPage((prev) => prev + 1);
          }
        }}
      >
        <ArrowForwardIosIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}
