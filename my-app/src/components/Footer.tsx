import React from "react";
import { Container, Box, Grid, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "text.secondary",
        color: "white",
        padding: "10px",
        width: "100%",
        marginLeft: "-10px"
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Box
            borderBottom={1}
            sx={{
              fontSize: 23,
            }}
          >
            Little Loves
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Распродажа %
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Новинки
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Одежда
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Для новорожденных
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Обувь
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Спорт
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Игрушки и развлечение
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Детская комната
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            borderBottom={1}
            sx={{
              fontSize: 23,
            }}
          >
            Для покупателей:
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Подарочные сертификаты
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Отзывы покупателей
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Доставка
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Вопрос-Ответ
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Скидки и бонусы
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              О нас
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit">
              Политика конфиденциальности
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit">
              Подписаться на рассылку
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            borderBottom={1}
            sx={{
              fontSize: 23,
            }}
          >
            Способ оплаты:
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Master Card
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              Visa
            </Link>
          </Box>
          <Box
            borderBottom={1}
            sx={{
              fontSize: 23,
            }}
          >
            Контакты:
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              +996123456{" "}
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="none">
              littleloves@com
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <Link href="/" color="inherit" underline="none">
                <InstagramIcon />
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" underline="none">
                <FacebookIcon />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
