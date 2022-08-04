import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header";
import AppBarr from "./components/AppBar";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import { Container } from "@mui/material";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Container>
      <App />
      <Header />
      <AppBarr />
      <Carousel />
      <Cards />
    </Container>
  </React.StrictMode>
);
