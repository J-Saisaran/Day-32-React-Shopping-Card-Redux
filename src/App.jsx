// src/App.jsx
import React from 'react';
import ProductList from './components/ProductList';
import { Container, CssBaseline, Typography } from '@mui/material';
import Cart from './components/Cart';

function App() {
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h2" align="center" gutterBottom>
      React-Shopping-Card-Redux
      </Typography>
      <ProductList />
      <Cart/>
    </Container>
  );
}

export default App;
