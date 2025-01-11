import { Box, Button, Typography, useTheme } from "@mui/material";
import healed from "../../assets/images/healed.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const Programs = () => {
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
          fontSize: { xs: "1.5rem", sm: "1.5rem" },
          fontWeight: 600,
          fontStyle: "italic",
          textAlign: "center",
          marginBottom: "1rem",
          color: theme.palette.text.secondary,
        }}
      >
        Introducing
      </Typography>

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
        Programs
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
        Our programs are thoughtfully designed to guide you on a journey of
        healing from trauma and empowering you with the tools to cultivate deep,
        meaningful connections in your personal and professional life. Join us
        as we embark on a path towards greater self-awareness, resilience, and
        fulfilling relationships.
      </Typography>

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
        Healed Woman
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
        The Healed Woman program is designed to help you heal from emotional
        trauma, regain your strength, and rediscover the beauty of your
        identity. Over the next 9 weeks, we'll journey together through topics
        like trauma recovery, rebuilding trust, and finding your purpose after a
        broken relationship.
      </Typography>

      <Box
        component="img"
        src={healed}
        alt="Counselling session"
        sx={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "15px",
          boxShadow: `0px 4px 20px ${theme.palette.secondary.light}`,
          marginBottom: "1rem",
        }}
      />

      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <Button
          component="a"
          href="https://calendly.com/tullier_centre/counselling-sessions?month=2024-05"
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<CalendarMonthIcon />}
          variant="contained"
          sx={{
            backgroundColor: theme.palette.button.background,
            color: theme.palette.button.text,
            padding: "10px 30px",
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "uppercase",
            mb: "10px",
            ":hover": {
              backgroundColor: theme.palette.button.hoverBackground,
            },
          }}
        >
          Book Now
        </Button>
      </Box>
    </Box>
  );
};
