import { React, useState } from 'react';
import {
  Box,
  TextField,
  IconButton,
  styled,
  Drawer,
  FormControl,
  FormGroup,
  FormLabel,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import SearchIcon from '@mui/icons-material/Search';

import Filter from './Filter';

const Filtercustom = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

const SearchBar = ({ setQuery, selected, handleChecked, checkedMap }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const [value, setValue] = useState('');
  const onValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
      }}
    >
      <TextField
        id="standard-basic"
        label="Search for products..."
        sx={{
          width: {
            lg: 800,
            md: 600,
            sm: 400,
            xs: 300,
          },
          ml: 3,
        }}
        onChange={(e) => onValueChange(e)}
      />

      <IconButton onClick={() => setQuery(value.toLowerCase())}>
        <SearchIcon />
      </IconButton>
      <Filtercustom onClick={toggleDrawer}>
        <FilterAltIcon />
      </Filtercustom>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box
          p={2}
          width="12vh"
          height="100vh"
          sx={{
            mt: 10,
          }}
        >
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend" sx={{ fontSize: 15, mt: 1 }}>
              Color
            </FormLabel>
            <FormGroup>
              <Filter
                label="Red"
                handleChecked={handleChecked}
                checkedMap={checkedMap}
              />
              <Filter
                label="Blue"
                handleChecked={handleChecked}
                checkedMap={checkedMap}
              />
              <Filter
                label="Yellow"
                handleChecked={handleChecked}
                checkedMap={checkedMap}
              />
              <Filter
                label="Black"
                handleChecked={handleChecked}
                checkedMap={checkedMap}
              />
            </FormGroup>
            <FormLabel component="legend" sx={{ fontSize: 15, mt: 1 }}>
              Gender
            </FormLabel>
            <FormGroup>
              <Filter
                label="Men"
                handleChecked={handleChecked}
                checkedMap={checkedMap}
              />
              <Filter
                label="Women"
                handleChecked={handleChecked}
                checkedMap={checkedMap}
              />
            </FormGroup>
            <FormLabel component="legend" sx={{ fontSize: 15, mt: 1 }}>
              Price
            </FormLabel>
            <FormGroup>
              <Filter
                label="0-250"
                handleChecked={handleChecked}
                checkedMap={checkedMap}
              />
              <Filter
                label="251-450"
                handleChecked={handleChecked}
                checkedMap={checkedMap}
              />
              <Filter
                label=">450"
                handleChecked={handleChecked}
                checkedMap={checkedMap}
              />
            </FormGroup>
            <FormLabel component="legend" sx={{ fontSize: 15, mt: 1 }}>
              Type
            </FormLabel>
            <FormGroup>
              <Filter
                label="Polo"
                handleChecked={handleChecked}
                checkedMap={checkedMap}
              />
              <Filter
                label="Hoodie"
                handleChecked={handleChecked}
                checkedMap={checkedMap}
              />
              <Filter
                label="Basic"
                handleChecked={handleChecked}
                checkedMap={checkedMap}
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SearchBar;
