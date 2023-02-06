import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {
  StyledTableCell,
  StyledTableRow,
} from "../contents/utils/general-utils";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function TableBodyy({ item, index }) {
  const tab = useSelector((state) => state.tab.tab);

  if (tab === "Customer Insights") {
    return (
      <>
        <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row" align="center">
            {item.phone}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.national_id}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.location[0] && (
              <>
                <Box>
                  <a
                    target="_blank"
                    href={`https://maps.google.com/?q=${
                      item.location[item.location.length - 1]?.latitude
                    },${item.location[item.location.length - 1]?.longitude}`}
                  >
                    <LocationOnIcon sx={{ fontSize: 30, color: "red" }} />
                  </a>
                </Box>
              </>
            )}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {new Date(item.created_at).toLocaleString()}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.device_model}
          </StyledTableCell>
        </StyledTableRow>
      </>
    );
  } else if (tab === "Transacted Order Succeeded") {
    return (
      <>
        <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row" align="center">
            {item.status}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.phone}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.national_id}
          </StyledTableCell>
        </StyledTableRow>
      </>
    );
  } else if (tab === "Iapproval With Limit") {
    return (
      <>
        <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row" align="center">
            {item.phone}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.national_id}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.user_limit}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.gender}
          </StyledTableCell>
        </StyledTableRow>
      </>
    );
  } else if (tab === "Iapproval Without Limit") {
    return (
      <>
        <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row" align="center">
            {item.phone}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.national_id}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.user_limit}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.gender}
          </StyledTableCell>
        </StyledTableRow>
      </>
    );
  } else if (tab === "Bill Payment User") {
    return <></>;
  } else if (tab === "Customer Data") {
    return <></>;
  } else return <></>;
}
