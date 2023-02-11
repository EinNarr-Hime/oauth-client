import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0ae3cd",
      contrastText: "#795548",
    },
    background: {
      default: "#0c0b0bce",
    },
    text: { primary: "#fcfcfc" },
  },
});

export default theme;
