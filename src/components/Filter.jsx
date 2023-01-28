import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

const Filter = ({ label, handleChecked, checkedMap }) => {
  const handler = (checkedMap, label) => {
    if (checkedMap) return checkedMap.get(label);
  };
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={handler(checkedMap, label)}
            value={label}
            onChange={handleChecked}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}
          />
        }
        sx={{ fontSize: 15 }}
        label={label}
      />
    </>
  );
};

export default Filter;
