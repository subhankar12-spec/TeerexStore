import { React, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Stack,
  Box,
  IconButton,
  Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Store } from '../Store';
import { NavLink } from 'react-router-dom';
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Navbar = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  return (
    <Box sx={{ overflow: 'auto' }}>
      <AppBar position="sticky">
        <StyledToolbar>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'unset' }}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: {
                    lg: 30,
                    md: 25,
                    sm: 20,
                    xs: 20,
                  },
                  ml: 1,
                }}
              >
                TeeRex Store
              </Typography>
            </Box>
          </NavLink>
          <Stack direction="row">
            <Box>
              {/* <Tabs
                // value={value}
                // onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Products" />
              </Tabs> */}
            </Box>
            <NavLink
              to="/cart"
              style={{ textDecoration: 'none', color: 'unset' }}
            >
              <IconButton>
                {cart.cartItems.length >= 0 && (
                  <Badge badgeContent={cart.cartItems.length} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                )}
              </IconButton>
            </NavLink>
          </Stack>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
