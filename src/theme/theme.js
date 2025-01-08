import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fef9f5",
      light: "#ffffff",
      dark: "#f3ece6",
      contrastText: "#05010d",
    },

    secondary: {
      main: "#c77f5d",
      light: "#ddb69a",
      dark: "#8e533d",
      contrastText: "#fff",
    },

    text: {
      primary: "#05010d",
      secondary: "#3b3b30",
    },

    button: {
      background: "#f1d8cc",
      hoverBackground: "#f7e5dc",
      text: "#c87f5d",
    },

    background: {
      program: "#f3e6d6",
      event: "#f0e2de",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  typography: {
    fontFamily: "Montserrat, sans-serif",

    h1: {
      // -1rem rule
      fontSize: "6rem",

      "@media (max-width:960px)": {
        fontSize: "5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "4rem",
      },
      "@media (max-width:414px)": {
        fontSize: "2.5rem",
      },
    },

    h2: {
      // -7 formula
      fontSize: "3.75rem",
      "@media (max-width:960px)": {
        fontSize: "3rem",
      },

      "@media (max-width:662px)": {
        fontSize: "2.3rem",
      },
      "@media (max-width:414px)": {
        fontSize: "2.2rem",
      },
    },

    h3: {
      // -6 formula
      fontSize: "3rem",
      "@media (max-width:960px)": {
        fontSize: "2.4rem",
      },

      "@media (max-width:662px)": {
        fontSize: "2rem",
      },
      "@media (max-width:414px)": {
        fontSize: "1.7rem",
      },
    },

    h4: {
      fontSize: "2.125rem",
      "@media (max-width:960px)": {
        fontSize: "1.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },

    h5: {
      fontSize: "1.5rem",
      "@media (max-width:960px)": {
        fontSize: "1.25rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.1rem",
      },
    },

    h6: {
      fontSize: "1.25rem",
      "@media (max-width:960px)": {
        fontSize: "1.1rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },

    body1: {
      fontSize: "1rem",
      "@media (max-width:960px)": {
        fontSize: "1rem",
      },
      "@media (max-width:600px)": {
        fontSize: ".9rem",
      },
    },

    body2: {
      fontSize: "1rem",
      "@media (max-width:960px)": {
        fontSize: "1rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
      "@media (max-width:480px)": {
        fontSize: ".97rem",
      },
    },
  },
});

export default theme;
