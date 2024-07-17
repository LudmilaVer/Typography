import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const StyledButton = styled(Button)`
  margin-top: 20px;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Typography variant="h4" component="h1" align="center">
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Typography>
      <StyledButton variant="contained" onClick={toggleTheme}>
        Toggle Theme
      </StyledButton>
    </ThemeProvider>
  );
}

export default App;
