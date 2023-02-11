import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const AlertComponent = ({
  vertical,
  horizontal,
  open,
  message,
  setState,
  snackState,
}) => {
  return (
    <>
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
    </>
  );
};

export default AlertComponent;
