import React from "react";

import { Box, Typography, TextField } from "@mui/material";

import "./Navigation.styles.scss";
import NavigationDropDown from "./Navigation-DropDown/NavigationDropDown";
import NavigationDropDownHover from "./Navigation-DropDownHover/NavigationDropDownHover";

const Navigation = () => {
  return (
    <>
      <Box
        className="header__top"
        sx={{
          borderBottom: "1px solid #e5e5e5",
          paddingBottom: "10px",
          paddingTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <Box
            className="header__hot__line"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <img
              src="/src/assets/icons/phone-contact.svg"
              alt="Logo"
              className="phone__logo"
            />

            <Typography
              className="phone__text"
              sx={{
                fontSize: "12px",
                fontFamily: "firaGO",
                fontWeight: "500",
                color: "#99a8b4",
              }}
            >
              ცხელი ხაზი
            </Typography>

            <a
              href="tel:*7007 / +995 (32) 2 60 30 60 "
              className="phone__number"
            >
              *7007 / +995 (32) 2 60 30 60
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                color: "#99a8b4",
                fontSize: "12px",
                fontFamily: "firaGo",
              }}
            >
              ონლაინ განვადება
            </Typography>
            <Typography
              sx={{
                color: "#99a8b4",
                fontSize: "12px",
                fontFamily: "firaGo",
              }}
            >
              ფილიალები
            </Typography>
            <Typography
              sx={{
                color: "#fe5f55",
                fontSize: "12px",
                fontFamily: "firaGo",
              }}
            >
              ყველა აქცია
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        className="header__bottom"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <Box className="main__logo">
          <img src="/src/assets/icons/logo.svg" alt="logo" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              className="search__input"
              label="ძიება..."
              sx={{
                width: "780px",
                height: "50px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              right: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <NavigationDropDown />

                <img
                  src="/src/assets/icons/search.svg"
                  alt="search"
                  className="search__icon"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src="/src/assets/icons/profileLogo.svg" alt="user" />
            <Typography
              sx={{
                color: "#0a3251",
              }}
            >
              პროფილი
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <NavigationDropDownHover />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navigation;
