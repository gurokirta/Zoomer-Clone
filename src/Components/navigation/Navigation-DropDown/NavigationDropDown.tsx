import * as React from "react";

import { useStore } from "../../../zustand/store";
import { Box } from "@mui/material";
// import { Ajax } from "../../../utils/Ajax";
import { useEffect } from "react";

import "./NavigationDropDown.scss";

export default function NavigationDropDown() {
  const { fetchBrands, brands } = useStore();

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <Box>
      <div className="dropdown">
        <button className="dropbtn">Brands</button>
        <div className="dropdown-content">
          {brands.map(brand => (
            <p key={brand}>{brand}</p>
          ))}
        </div>
      </div>
    </Box>
  );
}
