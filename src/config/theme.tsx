import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ede7f6",
      main: "#673ab7",
      dark: "#4527a0",
      contrastText: "#fff",
    },
    secondary: {
      light: "#bbdefb",
      main: "#2196f3",
      dark: "#1565c0",
      contrastText: "#000",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: blue[200],
        },
      },
    },
  },
});
export { theme, darkTheme };
