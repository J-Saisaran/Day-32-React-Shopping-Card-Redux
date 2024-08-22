import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardActions 
} from '@mui/material';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      <Typography variant="h6">
        Total Quantity: {totalQuantity}
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Total Amount: ${totalAmount.toFixed(2)}
      </Typography>
      {items.length === 0 ? (
        <Typography variant="body1">No items in the cart</Typography>
      ) : (
        <Grid container spacing={2}>
          {items.map(item => (
            <Grid item xs={12} md={6} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${item.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {item.quantity}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    variant="contained" 
                    onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                  >
                    Increase
                  </Button>
                  <Button 
                    size="small" 
                    variant="contained" 
                    onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                  >
                    Decrease
                  </Button>
                  <Button 
                    size="small" 
                    variant="contained" 
                    color="error" 
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Cart;
