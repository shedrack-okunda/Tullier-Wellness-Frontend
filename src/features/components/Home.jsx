import { Box, Button, Typography, useTheme } from "@mui/material";
import home from "../../assets/images/home.jpg";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownTwoTone from "@mui/icons-material/KeyboardDoubleArrowDownTwoTone";

export const Home = () => {
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
        Welcome
      </Typography>

      <Typography
        variant="h1"
        sx={{
          fontFamily: theme.typography.fontFamily,
          fontSize: { xs: "2.5rem", sm: "2.8rem" },
          textAlign: "center",
          color: theme.palette.secondary.main,
          fontWeight: 700,
          marginBottom: "1rem",
        }}
      >
        Tullier Wellness
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "1.3rem", sm: "1.4rem" },
          fontWeight: 500,
          color: theme.palette.text.primary,
          lineHeight: "1.8",
          // textAlign: "center",
          marginBottom: "2rem",
          maxWidth: "700px",
        }}
      >
        At Tullier, we believe in the transformative power of safe spaces and
        conversations. Our mission is to provide a haven for mental and
        emotional well-being, offering counselling services and trauma-healing
        programs. We nurture the growth of individuals aged 21 to 35, with a
        particular focus on youth and women. Empowering them with essential life
        skills, we guide them through the journey of healing, self-discovery,
        and resilient living
      </Typography>

      <Box
        component="img"
        src={home}
        alt="wellness"
        sx={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "15px",
          boxShadow: `0px 4px 20px ${theme.palette.secondary.light}`,
          marginBottom: "2rem",
        }}
      />

      <motion.div whileHover={{ scale: 1.102 }} whileTap={{ scale: 1 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.button.background,
            color: theme.palette.button.text,
            padding: "10px 20px",
            fontSize: "1.3rem",
            fontWeight: 600,
            // width: { xs: "100%", sm: "50%" },
            textTransform: "uppercase",
            ":hover": {
              backgroundColor: theme.palette.button.hoverBackground,
            },
          }}
        >
          See More{" "}
          <KeyboardDoubleArrowDownTwoTone sx={{ fontSize: "2.2rem" }} />
        </Button>
      </motion.div>
    </Box>
  );
};
