import * as React from "react";
import Box from "@mui/material/Box";

import { useStore } from "../../../zustand/store";

import { Button, TextField } from "@mui/material";
import NavigationDropDown from "../Navigation-DropDown/NavigationDropDown";
import { useEffect } from "react";

const style = {
  position: "absolute" as const,
  top: "25%",
  left: "49%",
  transform: "translate(-50%, -50%)",
  width: "780px",
  height: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function searchBar() {
  const [inputValue, setInputValue] = React.useState("");

  const handleSearch = () => {
    fetchProduct(inputValue);
    setInputValue("");
  };

  const { fetchProduct } = useStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "25px" }}
        >
          <TextField
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            className="search__input"
            label="ძიება..."
            sx={{
              width: "780px",
              height: "50px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              position: "absolute",
              right: 0,
            }}
          >
            <NavigationDropDown />

            <Button onClick={handleSearch}>
              <img
                src="/src/assets/icons/search.svg"
                alt="search"
                className="search__icon"
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
