import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { Grid, Container, Theme } from "@mui/material";
import MenuIconAd from "./components/MenuIconAd";

const cardsData = {
  first: {
    title: "Игрушки для развития",
    text: "Развивающие игры, плюшевые игрушки, конструкторы...",
    img: "https://ae01.alicdn.com/kf/HTB1TiawRVXXXXbYXpXXq6xXFXXXC/1-22.jpg",
  },
  second: {
    title: "Для самых маленьких",
    text: "Одежда, аксессуары, пинетки, для кормления...",
    img: "https://phonoteka.org/uploads/posts/2021-05/1621019355_13-phonoteka_org-p-ucheba-estetika-fon-14.jpg",
  },
  third: {
    title: "Скидки!",
    text: "-50% на все школьные принадлежности...",
    img: "https://phonoteka.org/uploads/posts/2021-05/1621019355_13-phonoteka_org-p-ucheba-estetika-fon-14.jpg",
  },
};

function App() {
  return (
    <>
      <Container>
        <Header />
        <MenuIconAd />
        <Navbar />
        <Carousel />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              title={cardsData.first.title}
              text={cardsData.first.text}
              img={cardsData.first.img}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              title={cardsData.second.title}
              text={cardsData.second.text}
              img={cardsData.second.img}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              title={cardsData.third.title}
              text={cardsData.third.text}
              img={cardsData.third.img}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default App;
