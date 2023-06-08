import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div style={{ float: 'right', padding: 10 }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "20ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {" "}
        <TextField id="standard-search" type="search" variant="standard" />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon/>
        </IconButton>
      </Box>
    </div>
  );
}

export default SearchBar;
