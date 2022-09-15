import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import { useShoppingCart } from "./ShoppingCartContent";
interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Card sx={{ marginLeft: 7 }}>
        <CardMedia component="img" height="250px" image={imgUrl} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price} $
          </Typography>
          <div>
            {quantity === 0 ? (
              <Button onClick={() => increaseCartQuantity(id)}>
                +Добавить в корзину
              </Button>
            ) : (
              <>
                <Button onClick={() => decreaseCartQuantity(id)} size="small">
                  -
                </Button>
                <div>В корзине {quantity}</div>
                <Button onClick={() => increaseCartQuantity(id)} size="small">
                  +
                </Button>
              </>
            )}
          </div>
          <Button onClick={() => removeFromCart(id)} variant="outlined" color="error" size="small">
            Удалить
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
