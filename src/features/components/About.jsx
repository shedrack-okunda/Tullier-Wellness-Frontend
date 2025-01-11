import { Box, Typography, useTheme } from "@mui/material";
import about from "../../assets/images/about.jpg";

export const AboutUs = () => {
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
          fontFamily: theme.typography.fontFamily,
          fontSize: { xs: "2rem", sm: "2rem" },
          textAlign: "center",
          color: theme.palette.secondary.main,
          fontWeight: 600,
          marginBottom: "1rem",
        }}
      >
        Our Story
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.2rem" },
          fontWeight: 500,
          color: theme.palette.text.primary,
          lineHeight: "1.8",
          marginBottom: "1rem",
          maxWidth: "700px",
        }}
      >
        Tullier was born from a deeply personal journey of healing. Founded by
        individuals who navigated their own traumas, we understand the
        transformative power of safe spaces and open conversations. Having
        experienced the profound impact of trauma on relationships, we
        envisioned a sanctuary where individuals could embark on a journey
        towards healing, self-discovery, and resilient living
      </Typography>

      <Box
        component="img"
        src={about}
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
