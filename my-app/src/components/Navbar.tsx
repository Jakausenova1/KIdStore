import React from "react";
import { Box, Button, Link, Menu, MenuItem } from "@mui/material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Link
        href="#"
        sx={{
          display: "flex",
          color: "black",
        }}
        underline="none"
      >
        <Button color="inherit" href="/" >Главная</Button>
        <Button
          aria-controls="basic-menu" //меню
          aria-haspopup="true" //открывает меню
          aria-expanded={openMenu ? "true" : undefined} //закрывает меню
          onClick={handleClick}
          color="inherit"
          sx={{
            marginLeft: "100px",
          }}
        >
          Каталог
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
          <MenuItem onClick={handleClose}>Одежда</MenuItem>
          <MenuItem>Для новорожденных</MenuItem>
          <MenuItem>Обувь</MenuItem>
          <MenuItem>Спорт</MenuItem>
          <MenuItem>Игрушки и развлечение</MenuItem>
          <MenuItem>Детская комната</MenuItem>
        </Menu>
        <Button
          color="inherit"
          sx={{
            marginLeft: "100px",
          }}
        >
          О нас
        </Button>
        <Button
          color="inherit"
          sx={{
            marginLeft: "100px",
          }}
        >
          Контакты
        </Button>
      </Link>
    </Box>
  );
};

export default Navbar;
