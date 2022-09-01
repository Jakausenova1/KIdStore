import React from "react";
import { Button, Menu, MenuItem, Theme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MenuIconAd = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
        sx={MenuItemAdapter}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Главная</MenuItem>
        <MenuItem>Каталог</MenuItem>
        <MenuItem>О нас</MenuItem>
        <MenuItem>Контакты</MenuItem>
        <MenuItem>Войти/Регистрация</MenuItem>
      </Menu>
    </>
  );
};

export default MenuIconAd;

const MenuItemAdapter = (theme: Theme) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "50%",
    marginBottom: "10px",
    textAlign: "center",
  },
});
