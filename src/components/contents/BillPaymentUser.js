import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ContentTitle from "../mini/ContentTitle";
import CircularProgress from "@mui/material/CircularProgress";
import { StyledTableCell, StyledTableRow } from "./utils/general-utils";
import Button from "@mui/material/Button";
import * as XLSX from "xlsx";
import DatePickerCustom from "../mini/DatePickerCustom";
import PaginationIcons from "../mini/PaginationIcons";
import SearchInput from "../mini/SearchInput";
import TableHeader from "../mini/TableHeader";
import TableBodyy from "../mini/TableBodyy";
import TakeInput from "../mini/TakeInput";

import dayjs from "dayjs";
import { billPaymentReport } from "../../encryption/apiCalls";
export default function ContentTable() {
  const [take, setTake] = React.useState("");

  const [page, setPage] = React.useState(1);
  const [enabled, setEnabled] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [dateFrom, setDateFrom] = React.useState("2022-01-01");
  const [dateTo, setDateTo] = React.useState(
    dayjs(Date.now()).format("YYYY-MM-DD")
  );
  const [paginatedData, setPaginatedData] = React.useState([]);
  console.log(paginatedData);
  const [searchText, setSearchText] = React.useState("");

  React.useEffect(() => {
    setIsLoading(true);

    billPaymentReport({ from: dateFrom, to: dateTo }).then((response) => {
      setPaginatedData(response);
      setIsLoading(false);
    });
  }, [page, dateFrom, dateTo]);
  const downloadExcel = async () => {
    setEnabled(false);

    const exportedData = await billPaymentReport({
      to: dateFrom,
      from: dateTo,
    });

    const worksheet = XLSX.utils.json_to_sheet(exportedData.data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, "DataSheet.xlsx");
    setEnabled(true);
  };

  return (
    <Box>
      <ContentTitle />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <DatePickerCustom
          dateFrom={dateFrom}
          setDateFrom={setDateFrom}
          dateTo={dateTo}
          setDateTo={setDateTo}
        />

        <SearchInput searchText={searchText} setSearchText={setSearchText} />
        <PaginationIcons
          page={page}
          setPage={setPage}
          paginatedData={paginatedData}
        ></PaginationIcons>
        <TakeInput take={take} setTake={setTake}></TakeInput>

        <Button
          variant="contained"
          sx={{ fontWeight: "bold", height: "35px" }}
          onClick={downloadExcel}
        >
          {enabled ? (
            "Export"
          ) : (
            <CircularProgress size={20} sx={{ color: "white" }} />
          )}
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHeader
            cells={[
              "Phone",
              "Created At",
              "Order Status",
              "Order Total Amount",
              "Order Id",
              "Service Name",
              "Transaction Id",
            ]}
          />
          <TableBody>
            {isLoading ? (
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
            ) : paginatedData?.data?.length ? (
              <>
                {paginatedData.data.map((item, index) => (
                  <TableBodyy item={item} index={index} />
                ))}
              </>
            ) : (
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
