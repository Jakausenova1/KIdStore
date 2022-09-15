import React, { useState, useEffect } from "react";
import {
  Header,
  Navbar,
  Cards,
  Carousel,
  Footer,
  Products,
} from "./components/index";
import { Grid, Container, Box } from "@mui/material";
import MenuIconAd from "./components/MenuIconAd";
import { IUser } from "./components/Types";
import { Routes, Route } from "react-router-dom";
import { Cardss } from "./components/Cardss";

export const cardsData = {
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
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Container>
        <Header />
        <MenuIconAd />
        <Navbar />
        <Routes>
          <Route
            path="/main/"
            element={
              <>
                <Carousel />
                <Cardss />
                
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/products/" element={<Products />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
