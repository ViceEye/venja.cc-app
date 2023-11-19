import * as React from 'react';

import { Box, IconButton } from '@mui/material';

interface ColorPickerProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  Icon: React.ElementType;
}

const AdvanceInput: React.FC<ColorPickerProps> = ({ inputProps, Icon }) => {
  // Create a ref for the Color Input
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Function to trigger the input file selection
  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <Box
      position="relative"
      width={40}
      height={40}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <input
        ref={inputRef}
        style={{
          position: 'absolute',
          opacity: 0,
          width: '100%',
          height: '100%',
          cursor: 'pointer',
        }}
        {...inputProps}
      />
      <IconButton style={{ zIndex: 1, borderRadius: 10 }} onClick={handleButtonClick}>
        <Icon />
      </IconButton>
    </Box>
  );
};

export default AdvanceInput
