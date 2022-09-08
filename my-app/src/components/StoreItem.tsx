import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Card sx={{ marginLeft: 7 }}>
        <CardMedia component="img" height="250px" image={imgUrl} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
