import React from 'react';

import {
  Box,
  Grid,
  Typography,
  Button,
  styled,
  Skeleton,
  Paper,
} from '@mui/material';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 2px;
`;

const ProductCard = ({ product, addToCartHandler, loading }) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        {loading ? (
          <Skeleton variant="rectangular" height="200px" />
        ) : (
          <Paper elevation={12}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textAlign: 'center' }}
            >
              <b> {product.name}</b>
            </Typography>

            <Box sx={{ display: 'flex', allignItems: 'center' }}>
              <img
                src={product.imageURL}
                alt={product.name}
                style={{
                  maxWidth: '60%',

                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </Box>

            <FlexBox>
              <Typography gutterBottom variant="h6" component="div">
                <b> Rs: {product.price}</b>
              </Typography>

              <Button
                size="small"
                variant="contained"
                onClick={() => addToCartHandler(product)}
              >
                Add to cart
              </Button>
            </FlexBox>
          </Paper>
        )}
      </Grid>
    </>
  );
};

export default ProductCard;
