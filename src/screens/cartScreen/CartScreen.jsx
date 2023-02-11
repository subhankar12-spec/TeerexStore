import { React, useContext, useState } from 'react';
import { Store } from '../../Store';
import {
  Box,
  Typography,
  styled,
  Button,
  Grid,
  Paper,
  IconButton,
  Snackbar,
  Alert,
  Container,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Image = styled('img')({
  width: '10%',
});
const FlexBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartScreen = () => {
  const [snackState, setState] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
    message: '',
  });
  const { vertical, horizontal, open, message } = snackState;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const increaseHandler = (item) => {
    const existItem = cartItems.find((x) => x.id === item.id);
    const quant = existItem ? existItem.quant + 1 : 1;
    const data = item;
    if (data.quantity < quant) {
      setState({ ...snackState, open: true, message: 'Out Of Stock' });
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quant },
    });
  };
  const decreaseHandler = (item) => {
    const existItem = cartItems.find((x) => x.id === item.id);
    if (existItem.quant === 1) return;
    const quant = existItem ? existItem.quant - 1 : 1;

    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quant },
    });
  };

  return (
    <Container>
      <Box>
        <Typography variant="h6" sx={{ p: 2 }}>
          <b>Shopping Cart</b>
        </Typography>
      </Box>
      <Grid Container>
        {cartItems.map((item) => (
          <Paper elevation={0} sx={{ m: 1, p: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <Image src={item.imageURL} />

              <FlexBox>
                <Box>
                  <Box>
                    <Typography>{item.gender}</Typography>
                  </Box>
                  <Box>
                    <Typography>Rs: {item.price}</Typography>
                  </Box>
                </Box>
              </FlexBox>

              <FlexBox>
                <IconButton onClick={() => decreaseHandler(item)}>
                  <RemoveIcon />
                </IconButton>
                {item.quant}
                <IconButton onClick={() => increaseHandler(item)}>
                  <AddIcon />
                </IconButton>
              </FlexBox>

              <FlexBox>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => removeItemHandler(item)}
                  sx={{ height: 50 }}
                >
                  Remove
                </Button>
              </FlexBox>
            </Box>
          </Paper>
        ))}
      </Grid>
      <hr />
      {cartItems.length > 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
          <Typography variant="subtitle1">
            <b>
              Total Payable : Rs&nbsp;
              {cartItems.reduce((a, c) => a + c.quant * c.price, 0)}
            </b>
          </Typography>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
          <Typography variant="h5">Cart Is Empty</Typography>
        </Box>
      )}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message={message}
        autoHideDuration={1000}
        key={vertical + horizontal}
        onClose={() => setState({ ...snackState, open: false })}
      >
        <Alert
          onClose={() => setState({ ...snackState, open: false })}
          severity="error"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CartScreen;
