import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectInput({ selects, selected, setSelected }) {
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <Box sx={{ width: 150 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={selected || ""}
          value={`${selected}`}
          label="Status"
          onChange={handleChange}
        >
          {selects.map((select, index) => (
            <MenuItem value={select} key={index}>
              {select}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
