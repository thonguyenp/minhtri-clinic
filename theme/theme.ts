import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00796b"
    },
    secondary: {
      main: "#ffd54f"
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff"
    },
    text: {
      primary: "#263238",
      secondary: "#455a64"
    }
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: { fontFamily: "Playfair Display, serif" },
    h2: { fontFamily: "Playfair Display, serif" },
    h3: { fontFamily: "Playfair Display, serif" },
    h4: { fontFamily: "Playfair Display, serif" },
    h5: { fontFamily: "Playfair Display, serif" },
    h6: { fontFamily: "Playfair Display, serif" }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          textTransform: "none"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        }
      }
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: "center",
          padding: "16px 0"
        }
      }
    }
  }
});

export default theme;
