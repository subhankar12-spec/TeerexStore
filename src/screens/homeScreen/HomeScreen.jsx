import { React, useState, useEffect, useContext } from 'react';
import { Box, Stack, Grid, Snackbar, Container, Alert } from '@mui/material';

import axios from 'axios';

import { Store } from '../../Store';
import ProductCard from '../../components/ProductCard';
import FilterBox from '../../components/FilterBox';
import SearchBar from '../../components/SearchBar';
import customHOF from '../../utils/customHOF';

const HomeScreen = () => {
  let [query, setQuery] = useState([]);
  const [snackState, setState] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
    message: '',
  });
  const { vertical, horizontal, open, message } = snackState;
  const [selected, setSelected] = useState([]);
  const [checkedMap, setChecked] = useState(new Map());
  const { state, dispatch } = useContext(Store);
  const {
    loading,
    products,
    cart: { cartItems },
  } = state;

  const handleChecked = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setChecked(checkedMap.set(value, true));
      setSelected([...selected, value]);
    } else {
      setChecked(checkedMap.set(value, false));
      setSelected([...selected.filter((e) => e != value)]);
    }
  };

  // const results = search.length ? [...search] : products;
  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x.id === item.id);

    const quant = existItem ? existItem.quant + 1 : 1;

    const data = item;
    if (data.quantity < quant) {
      // window.alert('Sorry. Product is out of stock');
      setState({ ...snackState, open: true, message: 'Out Of Stock' });
      return;
    }
    if (existItem) {
      // console.log('Exists');
      setState({ ...snackState, open: true, message: 'Item Already Added' });
    } else
      setState({
        ...snackState,
        open: true,
        message: 'Item added to the cart',
      });
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quant },
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(
          'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <Container sx={{ overflow: 'auto' }}>
      <SearchBar
        products={products}
        setQuery={setQuery}
        loading={true}
        handleChecked={handleChecked}
        checkedMap={checkedMap}
      />

      <Stack direction="row" sx={{ m: 2, p: 2 }} gap={5}>
        {/* Products */}
        <FilterBox handleChecked={handleChecked} selected={selected} />

        <Box flex={6} sx={{ pl: 4 }}>
          <Box sx={{ ml: 2 }}>
            <Grid container spacing={4}>
              {products
                .filterMethod(selected, products)
                .filter(
                  (asd) =>
                    asd.name.toLowerCase().includes(query) ||
                    asd.color.toLowerCase().includes(query) ||
                    asd.type.toLowerCase().includes(query)
                )
                // .filterMethod(selected, products)
                .map((product, key) => (
                  <ProductCard
                    product={product}
                    addToCartHandler={() => addToCartHandler(product)}
                    loading={loading}
                    key={key}
                  />
                ))}
            </Grid>
          </Box>
        </Box>
        {message != 'Out Of Stock' ? (
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            message={message}
            autoHideDuration={1000}
            key={vertical + horizontal}
            onClose={() => setState({ ...snackState, open: false })}
          />
        ) : (
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
        )}
      </Stack>
    </Container>
  );
};

export default HomeScreen;
