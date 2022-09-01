import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface CardProps {
  title: string;
  text: string;
  img: string;
}

export default function Cards({ title, text, img }: CardProps) {
  return (
    <Card sx={{ maxWidth: 300, marginLeft: 7 }}>
      <CardMedia component="img" height="250px" image={img} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
