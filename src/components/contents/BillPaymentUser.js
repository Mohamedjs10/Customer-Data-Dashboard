import * as React from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ContentTitle from "../mini/ContentTitle";
import AddModal from "../mini/AddModal";
import EditModal from "../mini/EditModal";
import TimingAlert from "../mini/TimingAlert";
import DialogBox from "../mini/DialogBox";
import CircularProgress from "@mui/material/CircularProgress";
import {
  fetcher,
  StyledTableCell,
  StyledTableRow,
} from "./utils/general-utils";

export default function ContentTable() {
  const tab = useSelector((state) => state.tab.tab);
  // const btn = useSelector((state) => state.btn.btn);
  // const insuranceOrLife = btn == 0 ? "insurance" : "life";
  const category =
    tab == "Customer Data"
      ? "teams"
      : tab == "Bill Payment User"
      ? "directors"
      : tab == "Transacted Order Succeeded"
      ? "news"
      : "events";

  const [openAdd, setOpenAdd] = React.useState(false);

  const [openEdit, setOpenEdit] = React.useState(false);

  const [alert, setAlert] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [currentId, setCurrentId] = React.useState();

  const handleCloseAgree = () => {
    // setOpenDialog(false);
    // setAlert(true);
    // fetch(`http://localhost:3000/api/sarwa/${insuranceOrLife}/${category}`, {
    //   method: "DELETE",
    //   body: JSON.stringify({
    //     _id: currentId,
    //   }),
    // });
    // setTimeout(() => {
    //   setAlert(false);
    // }, 2000);
  };

  // const { data, error, isLoading } = useSWR(
  //   `/api/sarwa/${insuranceOrLife}/${category}`,
  //   fetcher,
  //   {
  //     refreshInterval: 100,
  //   }
  // );

  return (
    <Box>
      <DialogBox
        openDialog={openDialog}
        handleCloseAgree={handleCloseAgree}
        handleCloseDisagree={() => {
          setOpenDialog(false);
        }}
        setAlert={setAlert}
      ></DialogBox>
      <AddModal
        openAdd={openAdd}
        setOpenAdd={setOpenAdd}
        endPoint="teams"
      ></AddModal>
      <EditModal
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        endPoint="teams"
        currentId={currentId}
      ></EditModal>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ContentTitle></ContentTitle>
        {alert && <TimingAlert></TimingAlert>}
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: 150 }}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                    // wordSpacing: "200px",
                  }}
                >
                  Phone Number
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 250 }}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                    // wordSpacing: "200px",
                  }}
                >
                  Service Name
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 250 }}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                    // wordSpacing: "200px",
                  }}
                >
                  Total Amount
                </Box>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {isLoading ? ( */}
            {false ? (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" colSpan={8}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ) : // ) : data.length ? (
            true ? (
              // data.map((member, index) => (
              <StyledTableRow key={""}>
                <StyledTableCell component="th" scope="row" align="center">
                  {"201126728146"}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {"Vodafone Recharge"}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {"14"}
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              // ))
              <StyledTableRow sx={{}}>
                <StyledTableCell colSpan={8} sx={{}}>
                  <Box
                    sx={{
                      fontWeight: "bold",
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    No Data ...
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}