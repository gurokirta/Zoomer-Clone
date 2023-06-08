import * as React from "react";

import { Box } from "@mui/material";
import { Ajax } from "../../utils/Ajax";
import { useState, useEffect } from "react";
import axios from "axios";

import "./NavigationDropDown.scss";

export default function NavigationDropDown() {
  const [brands, setBrands] = useState<string[]>([]);

  const fetchBrands = async () => {
    const {
      data: { brands: brandsItem },
    } = await Ajax.get("/brands");
    setBrands(brandsItem);
    console.log(brandsItem);
  };

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
