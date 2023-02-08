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
import SelectSubcategory from "../mini/SelectSubcategory";
import TakeInput from "../mini/TakeInput";
import InsightsCard from "../mini/InsightsCard";
export default function ContentTable() {
  const [page, setPage] = React.useState(1);
  const [enabled, setEnabled] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [dateFrom, setDateFrom] = React.useState(null);
  const [dateTo, setDateTo] = React.useState(null);
  const [paginatedData, setPaginatedData] = React.useState([]);
  const [take, setTake] = React.useState("");
  const [insights, setInsights] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");

  const dateParams =
    dateFrom && dateTo
      ? `from=${dateFrom}&to=${dateTo}`
      : dateFrom
      ? `from=${dateFrom}`
      : dateTo
      ? `to=${dateTo}`
      : ``;
  const url = `https://api-mobile.contact.eg/report/instant-approval?${dateParams}`;

  React.useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://api-mobile.contact.eg/report/instant-approval/insights?${dateParams}`
    )
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

  // expoted date => data is paginated, so data.meta isn't null
  //paginated date => data is not,instead, served fully, so data.meta is null
  // const [page, setPage] = React.useState(1);
  // const [enabled, setEnabled] = React.useState(true);
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [dateFrom, setDateFrom] = React.useState(null);
  // const [dateTo, setDateTo] = React.useState(null);
  // const [paginatedData, setPaginatedData] = React.useState([]);
  // console.log(paginatedData);
  // const [searchText, setSearchText] = React.useState("");
  // // handle api query based on date
  // const url =
  //   dateFrom && dateTo
  //     ? `https://api-mobile.contact.eg/report/instant-approval?from=${dateFrom}&to=${dateTo}&`
  //     : dateFrom
  //     ? `https://api-mobile.contact.eg/report/instant-approval?from=${dateFrom}&`
  //     : dateTo
  //     ? `https://api-mobile.contact.eg/report/instant-approval?to=${dateTo}&`
  //     : `https://api-mobile.contact.eg/report/instant-approval?`;

  // React.useEffect(() => {
  //   setIsLoading(true);
  //   fetch(`${url}page=${page}&take=100`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setPaginatedData(response);
  //       setIsLoading(false);
  //     });
  // }, [page, dateFrom, dateTo]);
  // const downloadExcel = async () => {
  //   setEnabled(false);
  //   const exportedData = await fetch(`${url}export_=true`).then((response) =>
  //     response.json()
  //   );
  //   const worksheet = XLSX.utils.json_to_sheet(exportedData.data);
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  //   XLSX.writeFile(workbook, "DataSheet.xlsx");
  //   setEnabled(true);
  // };

  return (
    <Box>
      <ContentTitle />
      <Box
        sx={{
          display: "flex",
          overflow: "scroll",
          width: "1150px",
          mt: 3,
          mb: 3,
          pr: 2,
          pl: 2,

          "&::-webkit-scrollbar": {
            height: "5px",
            width: "0px",
          },

          "::-webkit-scrollbar-thumb": {
            background: "#0f2941",
            boxShadow: "0px 0px 10px #9e9fa1",
          },
        }}
      >
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
        <SelectSubcategory
          sub1={"Iapproval With Limit"}
          sub2={"Iapproval Without Limit"}
        />
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
              "User Limit",
              "Gender",
              "Created At",
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
