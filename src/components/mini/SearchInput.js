import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

export default function SearchInput({ searchText, setSearchText }) {
  return (
    <Box sx={{ ml: 10 }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 200,
          height: "55px",
        }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
          }}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <IconButton
          type="button"
          sx={{
            p: "10px",
          }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}
