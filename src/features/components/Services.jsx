import { Box, Button, Typography, useTheme } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import service from "../../assets/images/service.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const Services = () => {
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
      {/* Service Header */}
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
        Services
      </Typography>

      {/* Service Details */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.3rem", sm: "1.3rem" },
          fontWeight: 600,
          fontStyle: "italic",
          textAlign: "center",
          marginBottom: "1rem",
          color: theme.palette.text.secondary,
        }}
      >
        Counselling Services
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.text.secondary,
          fontWeight: 700,
          marginBottom: "10px",
        }}
      >
        KSH. 2,000
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
        Our counselling sessions provide a safe and confidential space where you
        can explore your emotions, confront challenges, and cultivate
        resilience.
      </Typography>
      {/* Benefits List */}
      <Box sx={{ display: "flex", gap: 1 }}>
        <CheckCircleOutlineIcon
          style={{ color: theme.palette.secondary.main }}
        />
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1rem" },
            fontWeight: 500,
            color: theme.palette.text.secondary,
            lineHeight: "1.8",
            marginBottom: "1rem",
            maxWidth: "700px",
          }}
        >
          <strong style={{ color: theme.palette.secondary.main }}>
            Gain clarity:
          </strong>{" "}
          Explore your thoughts and feelings in a supportive environment.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 1 }}>
        <CheckCircleOutlineIcon
          style={{ color: theme.palette.secondary.main }}
        />
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1rem" },
            fontWeight: 500,
            color: theme.palette.text.secondary,
            lineHeight: "1.8",
            marginBottom: "1rem",
            maxWidth: "700px",
          }}
        >
          <strong style={{ color: theme.palette.secondary.main }}>
            Build coping skills:
          </strong>{" "}
          Learn effective coping strategies to navigate life's challenges and
          enhance emotional wellbeing.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 1 }}>
        <CheckCircleOutlineIcon
          style={{ color: theme.palette.secondary.main }}
        />
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1rem" },
            fontWeight: 500,
            color: theme.palette.text.secondary,
            lineHeight: "1.8",
            marginBottom: "1rem",
            maxWidth: "700px",
          }}
        >
          <strong style={{ color: theme.palette.secondary.main }}>
            Foster growth:
          </strong>{" "}
          Embrace personal growth and transformation as you work towards your
          wellness goals and aspirations.
        </Typography>
      </Box>

      {/* Service Image */}
      <Box
        component="img"
        src={service}
        alt="Counselling session"
        sx={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "15px",
          boxShadow: `0px 4px 20px ${theme.palette.secondary.light}`,
          marginBottom: "1rem",
        }}
      />
      {/* Book Now Button */}
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
