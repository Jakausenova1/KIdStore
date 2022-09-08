import React from "react";
import {
  Button,
  Link,
  Menu,
  MenuItem,
  Grid,
  TextField,
  Theme,
} from "@mui/material";
import LoginForm from "./LoginForm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

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
    <Grid sx={NavbarAdapter}>
      <Grid item xs={2} sm={4}>
        <TextField
          fullWidth
          id="input-with-sx"
          label="Поиск..."
          variant="standard"
        />
      </Grid>

      <Link
        href="#"
        sx={{
          display: "flex",
          color: "black",
        }}
        underline="none"
      >
        <NavLink to="/main">
          <Button color="inherit" href="/">
            Главная
          </Button>
        </NavLink>
        <Button
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
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
          <NavLink to="/products">
            {" "}
            <MenuItem onClick={handleClose}>Одежда</MenuItem>
          </NavLink>
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
      <Grid item xs={2} sm={4}>
        <LoginForm />
      </Grid>
      <Grid item xs={2} sm={4}>
        <ShoppingCartIcon />
      </Grid>
    </Grid>
  );
};

export default Navbar;

const NavbarAdapter = (theme: Theme) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-between",
  },
});
