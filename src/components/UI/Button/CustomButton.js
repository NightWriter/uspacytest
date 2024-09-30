import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ variant, disabled, children, onClick }) => {
  const baseStyles = {
    width: '213px',
    height: '53px',
    borderRadius: '100px',
    border: 'none',
    textTransform: 'none',
    position: 'relative',
    zIndex: 2,
    '&:hover': {
      backgroundColor: '#FCB02D',
    },
    '&:active': {
      backgroundColor: '#321bbf',
    },
    '&:disabled': {
      color: 'rgba(255, 255, 255, 0.4)',
    },
  };

  const variantStyles = {
    header: {
      backgroundColor: '#fff',
      color: '#070707',
      '&:hover': {
        backgroundColor: '#FCB02D',
      },
      '&:active': {
        backgroundColor: '#452AF4',
      },
    },
    submit: {
      backgroundColor: '#452AF4',
      color: '#fff',
      margin: '0 auto',
      display: 'block',
    },
    default: {
      backgroundColor: '#452AF4',
      color: '#fff',
    },
  };

  const styles = { ...baseStyles, ...variantStyles[variant] || variantStyles.default };

  return (
    <Button
      sx={styles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
