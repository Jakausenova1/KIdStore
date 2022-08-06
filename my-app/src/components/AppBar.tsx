import {
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import Navbar from "./Navbar";
import { SearchButton } from "./SearchButton";

const AppBarr = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SearchButton />
        <Navbar />
        <Button variant="outlined" onClick={handleClickOpen} sx={{
          color: "black",
          borderColor: "black"
        }}>
          Войти
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Вход</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Введите свой E-mail"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="pass"
              label="Пароль"
              type="password"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Закрыть</Button>
            <Button onClick={handleClose}>Войти</Button>
          </DialogActions>
        </Dialog>
        <ShoppingCartIcon />
      </Container>
    </>
  );
};

export default AppBarr;
