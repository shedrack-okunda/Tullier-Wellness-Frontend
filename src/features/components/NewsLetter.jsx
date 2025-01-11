import { LoadingButton } from "@mui/lab";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Phone from "@mui/icons-material/Phone";

export const NewsLetter = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        Thank You
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
        Remember, wellness is not a destination, but a journey of self-discovery
        and self-care. Embrace it, cherish it, and let it guide you towards a
        life of balance and fulfillment.
      </Typography>

      <motion.div whileHover={{ scale: 1.024 }}>
        <LoadingButton
          variant="contained"
          sx={{
            backgroundColor: theme.palette.button.background,
            color: theme.palette.button.text,
            padding: "10px 20px",
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "uppercase",
            mb: "10px",
            ":hover": {
              backgroundColor: theme.palette.button.hoverBackground,
            },
          }}
          endIcon={<Phone />}
        >
          Contact Us
        </LoadingButton>
      </motion.div>
    </Box>
  );
};
