import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7367f0',
    },
    success: {
      main: '#28c76f',
    },
    error: {
      main: '#ea5455',
    },
    background: {
      default: '#f8f7fa',
    },
  },
  typography: {
    fontFamily: '"Public Sans", "Roboto", sans-serif',
    h2: {
      fontWeight: 700,
      color: '#333',
    },
    h6: {
      fontWeight: 500,
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});