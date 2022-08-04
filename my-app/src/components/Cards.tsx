import React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

export default function Cards() {
  return (
    <Container sx={{ display: "flex" }}>
      <Card sx={{ maxWidth: 300, marginLeft: 7 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250px"
            image="https://ae01.alicdn.com/kf/HTB1TiawRVXXXXbYXpXXq6xXFXXXC/1-22.jpg"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Игрушки для развития
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Развивающие игры, плюшевые игрушки, конструкторы...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <TrendingFlatIcon />
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300, marginLeft: 7 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250px"
            image="https://kolibris-37.ru/wp-content/uploads/2020/03/trikotazhnye-veshhi-dlja-detej-do-goda.jpg"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Для самых маленьких
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Одежда, аксессуары, пинетки, для кормления...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <TrendingFlatIcon />
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300, marginLeft: 7 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250px"
            image="https://phonoteka.org/uploads/posts/2021-05/1621019355_13-phonoteka_org-p-ucheba-estetika-fon-14.jpg"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Скидки!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              -50% на все школьные принадлежности...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <TrendingFlatIcon />
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
