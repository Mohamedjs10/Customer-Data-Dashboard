import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {
  StyledTableCell,
  StyledTableRow,
} from "../contents/utils/general-utils";
import Box from "@mui/material/Box";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
export default function TableHeader({ cells }) {
  return (
    <TableHead>
      <TableRow>
        {cells.map((item, index) => (
          <StyledTableCell sx={{ width: 150 }} key={index}>
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "center",
                // wordSpacing: "200px",
              }}
            >
              {item}
            </Box>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
