import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import products from '../assets/product.json';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  Grid, 
  CardActions 
} from '@mui/material';

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <Grid container spacing={3}>
        {products.products.map(product => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.thumbnail}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Price: ${product.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => dispatch(addItem({ id: product.id, title: product.title, price: product.price }))}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
