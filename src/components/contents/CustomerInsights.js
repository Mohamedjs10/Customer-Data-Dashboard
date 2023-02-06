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
export default function ContentTable() {
  // expoted date => data is paginated, so data.meta isn't null
  //paginated date => data is not,instead, served fully, so data.meta is null
  const [page, setPage] = React.useState(1);
  const [enabled, setEnabled] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [dateFrom, setDateFrom] = React.useState(null);
  const [dateTo, setDateTo] = React.useState(null);
  const [paginatedData, setPaginatedData] = React.useState([]);
  console.log(paginatedData);
  const [searchText, setSearchText] = React.useState("");
  // handle api query based on date
  const url =
    dateFrom && dateTo
      ? `https://api-mobile.contact.eg/report/users/insight?from=${dateFrom}&to=${dateTo}&`
      : dateFrom
      ? `https://api-mobile.contact.eg/report/users/insight?from=${dateFrom}&`
      : dateTo
      ? `https://api-mobile.contact.eg/report/users/insight?to=${dateTo}&`
      : `https://api-mobile.contact.eg/report/users/insight?&`;

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`${url}page=${page}&take=100`)
      .then((response) => response.json())
      .then((response) => {
        setPaginatedData(response);
        setIsLoading(false);
      });
  }, [page, dateFrom, dateTo]);
  const downloadExcel = async () => {
    setEnabled(false);
    const exportedData = await fetch(`${url}export_=true`).then((response) =>
      response.json()
    );
    const worksheet = XLSX.utils.json_to_sheet(exportedData.data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, "DataSheet.xlsx");
    setEnabled(true);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <ContentTitle />
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
              "National Id",
              "Location",
              "Created At",
              "Device Model",
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
