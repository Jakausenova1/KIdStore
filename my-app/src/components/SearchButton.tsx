import React from "react";
import { TextField, Box} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchButton = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <SearchIcon sx={{ color: "black", mr: 1, paddingTop: "25px" }} />
      <TextField
        fullWidth
        id="input-with-sx"
        label="Поиск..."
        variant="standard"
      />
    </Box>
  );
};
