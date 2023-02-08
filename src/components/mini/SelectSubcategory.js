import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useSelector, useDispatch } from "react-redux";
import { tabActions } from "../store/store";

import Select from "@mui/material/Select";

export default function SelectSubcategory({ sub1, sub2 }) {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.tab.tab);
  console.log(tab);
  // const [subcategory, setSubcategory] = React.useState(sub1);

  const handleChange = (event) => {
    // setSubcategory(event.target.value);
    dispatch(tabActions.update(event.target.value));
  };

  return (
    <Box sx={{ width: 150 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Subcategory</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tab}
          label="Subcategory"
          onChange={handleChange}
        >
          <MenuItem value={sub1}>{sub1}</MenuItem>
          <MenuItem value={sub2}>{sub2}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
