import React from 'react';

import {
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  Paper,
  styled,
} from '@mui/material';
import Filter from './Filter';

const Filterbox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const FilterBox = ({ handleChecked, selected, checkedMap }) => {
  return (
    <>
      <Filterbox
        flex={2}
        sx={{
          width: {
            // lg: 500,
            // md: 300,
            // sm: 300,
            // xs: 200,
          },
        }}
      >
        <Paper elevation={6}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend" sx={{ fontSize: 15, mt: 1 }}>
              Color
            </FormLabel>
            <FormGroup>
              <Filter
                label="Red"
                handleChecked={handleChecked}
                selected={selected}
                checkedMap={checkedMap}
              />
              <Filter
                label="Blue"
                handleChecked={handleChecked}
                selected={selected}
                checkedMap={checkedMap}
              />
              <Filter
                label="Yellow"
                handleChecked={handleChecked}
                selected={selected}
                checkedMap={checkedMap}
              />
              <Filter
                label="Black"
                handleChecked={handleChecked}
                selected={selected}
              />
            </FormGroup>
            <FormLabel component="legend" sx={{ fontSize: 15, mt: 1 }}>
              Gender
            </FormLabel>
            <FormGroup>
              <Filter label="Men" handleChecked={handleChecked} />
              <Filter label="Women" handleChecked={handleChecked} />
            </FormGroup>
            <FormLabel component="legend" sx={{ fontSize: 15, mt: 1 }}>
              Price
            </FormLabel>
            <FormGroup>
              <Filter label="0-Rs250" handleChecked={handleChecked} />
              <Filter label="Rs251-Rs450" handleChecked={handleChecked} />
              <Filter
                label="Greater Than Rs 450"
                handleChecked={handleChecked}
              />
            </FormGroup>
            <FormLabel component="legend" sx={{ fontSize: 15, mt: 1 }}>
              Type
            </FormLabel>
            <FormGroup>
              <Filter label="Polo" handleChecked={handleChecked} />
              <Filter label="Hoodie" handleChecked={handleChecked} />
              <Filter label="Basic" handleChecked={handleChecked} />
            </FormGroup>
          </FormControl>
        </Paper>
      </Filterbox>
    </>
  );
};

export default FilterBox;
