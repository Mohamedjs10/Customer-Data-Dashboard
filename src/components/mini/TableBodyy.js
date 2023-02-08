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
  } else if (tab === "Transacted Orders") {
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
            {item.national_id ? item.national_id : "-"}
            {/* {item.national_id} */}
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
          <StyledTableCell component="th" scope="row" align="center">
            {new Date(item.created_at).toLocaleString()}
            {/* {item.created_at} */}
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
          <StyledTableCell component="th" scope="row" align="center">
            {new Date(item.created_at).toLocaleString()}
            {/* {item.created_at} */}
          </StyledTableCell>
        </StyledTableRow>
      </>
    );
  } else if (tab === "Bill Payment User") {
    return (
      <>
        <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row" align="center">
            {item.client_phone_number}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {new Date(item.created_at).toLocaleString()}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.o_status}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.o_total_amount}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.order_id}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.service_name}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.transaction_id}
          </StyledTableCell>
        </StyledTableRow>
      </>
    );
  } else if (tab === "New Users") {
    return (
      <>
        <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row" align="center">
            {item.phone}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.national_id ? item.national_id : "-"}
            {/* {item.national_id} */}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.device_model ? item.device_model : "-"}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {new Date(item.created_at).toLocaleString()}
            {/* {item.created_at} */}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {new Date(item.updated_at).toLocaleString()}

            {/* {item.updated_at} */}
          </StyledTableCell>
        </StyledTableRow>
      </>
    );
  } else if (tab === "Active Users") {
    return (
      <>
        <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row" align="center">
            {item.phone}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.national_id ? item.national_id : "-"}
            {/* {item.national_id} */}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {item.device_model ? item.device_model : "-"}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {new Date(item.created_at).toLocaleString()}
            {/* {item.created_at} */}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="center">
            {new Date(item.updated_at).toLocaleString()}
            {/* {item.updated_at} */}
          </StyledTableCell>
        </StyledTableRow>
      </>
    );
  } else return <></>;
}
