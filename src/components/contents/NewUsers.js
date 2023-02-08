import * as React from "react";
import TableHeader from "../mini/TableHeader";
import TableBodyy from "../mini/TableBodyy";
import InsightsCard from "../mini/InsightsCard";

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
import SelectSubcategory from "../mini/SelectSubcategory";
import TakeInput from "../mini/TakeInput";

export default function ContentTable() {
  const [page, setPage] = React.useState(1);
  const [enabled, setEnabled] = React.useState(true);
  const [dateFrom, setDateFrom] = React.useState(null);
  const [dateTo, setDateTo] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [take, setTake] = React.useState("");
  const [insights, setInsights] = React.useState([]);
  const [paginatedData, setPaginatedData] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");

  const dateParams =
    dateFrom && dateTo
      ? `from=${dateFrom}&to=${dateTo}`
      : dateFrom
      ? `from=${dateFrom}`
      : dateTo
      ? `to=${dateTo}`
      : ``;
  const url = `https://api-mobile.contact.eg/report/users/new?${dateParams}`;

  React.useEffect(() => {
    setIsLoading(true);

    fetch(`https://api-mobile.contact.eg/report/users/insights?${dateParams}`)
      .then((response) => response.json())
      .then((response) => {
        setInsights(response);
      });

    fetch(`${url}&page=${page}&take=${take > 0 && take != "" ? take : 100}`)
      .then((response) => response.json())
      .then((response) => {
        setPaginatedData(response);
        setIsLoading(false);
      });
    // }
  }, [take, page, dateFrom, dateTo]);
  const downloadExcel = async () => {
    setEnabled(false);
    const exportedData = await fetch(`${url}&export_=true`).then((response) =>
      response.json()
    );
    const worksheet = XLSX.utils.json_to_sheet(exportedData.data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, "new-users.xlsx");
    setEnabled(true);
  };

  return (
    <Box>
      <ContentTitle />
      <Box>
        <InsightsCard insights={insights.data}></InsightsCard>
      </Box>
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
        <SelectSubcategory sub1={"New Users"} sub2={"Active Users"} />
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
              "National Id",
              "Device Model",
              "Created At",
              "Updated At",
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
            ) : paginatedData ? (
              <>
                {paginatedData.data?.map((item, index) => (
                  <TableBodyy item={item} index={index} />
                ))}
              </>
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
