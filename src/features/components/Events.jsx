import { Box, Typography, useTheme } from "@mui/material";
import event from "../../assets/images/event.jpg";

export const Events = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        padding: "2rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.3rem", sm: "1.3rem" },
          fontWeight: 600,
          fontStyle: "italic",
          textAlign: "center",
          marginBottom: "1rem",
          color: theme.palette.secondary.main,
        }}
      >
        Events
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontFamily: theme.typography.fontFamily,
          fontSize: { xs: "2rem", sm: "2rem" },
          textAlign: "center",
          color: theme.palette.text.secondary,
          fontWeight: 600,
          marginBottom: "1rem",
        }}
      >
        Coffee and Trauma
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "1.3rem", sm: "1.2rem" },
          fontWeight: 500,
          color: theme.palette.text.primary,
          lineHeight: "1.8",
          marginBottom: "1rem",
          maxWidth: "700px",
        }}
      >
        Welcome to Coffee & Trauma, where vulnerability meets strength over a
        comforting cup of coffee. It's a safe space filled with empathy and
        understanding, where healing begins one sip at a time. Come, sip, and
        connect as we navigate the complexities of life together.
      </Typography>

      <Box
        component="img"
        src={event}
        alt="wellness"
        sx={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "15px",
          boxShadow: `0px 4px 20px ${theme.palette.secondary.light}`,
          marginBottom: "1rem",
        }}
      />
    </Box>
  );
};
