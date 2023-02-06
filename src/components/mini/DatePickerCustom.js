import React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function DatePickerCustom({
  dateFrom,
  setDateFrom,
  dateTo,
  setDateTo,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        sx={{
          mb: 3,
          width: 150,
        }}
      >
        <DatePicker
          size="small"
          label="From"
          value={dateFrom}
          onChange={(newValue) => {
            setDateFrom(dayjs(newValue).format("YYYY-MM-DD"));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
      <Stack
        // spacing={3}
        sx={{
          mb: 3,
          width: 150,
        }}
      >
        <DatePicker
          label="To"
          value={dateTo}
          onChange={(newValue) => {
            setDateTo(dayjs(newValue).format("YYYY-MM-DD"));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
