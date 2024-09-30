import React, {
  useState
} from 'react';
import {
  TextField
} from '@mui/material';

const CustomTextField = ({
  label,
  error,
  ...props
}) => {
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (event) => {
    setHasValue(event.target.value.length > 0);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return ( <
    TextField {
      ...props
    }
    label = {
      label
    }
    variant = "outlined"
    fullWidth error = {
      error
    }
    onChange = {
      handleChange
    }
    sx = {
      {
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        borderRadius: '4px',
        '& .MuiInputBase-root': {
          borderRadius: '8px',
        },
        '& .MuiInputLabel-root': {
          color: 'rgba(255, 255, 255, 0.4)',
          fontFamily: '"Manrope", "system-ui"',
          backgroundColor: 'transparent',
          transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
        },
        // Styles for focused label
        '& .MuiInputLabel-root.Mui-focused': {
          padding: '2px 6px 4px',
          borderRadius: '4px',
          color: '#fff',
          transform: 'translate(14px, -9px) scale(0.75)',
          backgroundColor: error ? '#F7696B' : '#7C69F7',
        },
        // Styles for non-focused label when there's an error
        '& .MuiInputLabel-root:not(.Mui-focused).Mui-error': {
          backgroundColor: '#F7696B',
          padding: '2px 6px 4px',
          borderRadius: '4px',
          color: '#fff',
          transform: 'translate(14px, -9px) scale(0.75)',
          transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
        },
        '& .css-17xzsbk-MuiFormLabel-root-MuiInputLabel-root': {
          transform: 'translate(14px, -9px) scale(0.75)',
        },
        // Styles for non-focused label when no error
        '& .MuiInputLabel-root:not(.Mui-focused):not(.Mui-error)': {
          backgroundColor: hasValue ? '#7C69F7' : 'transparent',
          padding: hasValue ? '2px 6px 4px' : '0',
          borderRadius: '4px',
          color: hasValue ? '#fff' : 'rgba(255, 255, 255, 0.4)',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderWidth: '2px',
          borderColor: error ? 'transparent !important' : 'transparent !important',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: error ? '#F7696B !important' : '#7C69F7 !important',
        },
        '& .MuiInputBase-input': {
          color: '#fff',
          fontFamily: '"Manrope", "system-ui"',
        },
      }
    }
    />
  );
};

export default CustomTextField;