import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import NavigationDropDown from "../Navigation-DropDown/NavigationDropDown";

const style = {
  position: "absolute" as const,
  top: "34%",
  left: "49%",
  transform: "translate(-50%, -50%)",
  width: "780px",
  height: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            className="search__input"
            label="ძიება..."
            sx={{
              width: "780px",
              height: "50px",
            }}
            onChange={handleOpen}
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

            <Button onClick={handleOpen}>
              <img
                src="/src/assets/icons/search.svg"
                alt="search"
                className="search__icon"
              />
            </Button>
          </Box>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
