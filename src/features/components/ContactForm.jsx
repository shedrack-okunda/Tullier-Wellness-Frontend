import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import { MotionConfig, motion } from "framer-motion";
import { LoadingButton } from "@mui/lab";
import { NewsLetter } from "./NewsLetter";
import EmailIcon from "@mui/icons-material/Email";
import Send from "@mui/icons-material/Send";
import { useState } from "react";

export const ContactForm = () => {
  const theme = useTheme();
  const [focusedField, setFocusedField] = useState(null);

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        padding: "2rem",
        minHeight: "100vh",
        flexDirection: "column",
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
        Contact Us
      </Typography>

      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
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
          Have a question about your wellness journey? Ask me anything, and
          let's start a conversation towards your path to well-being.
        </Typography>
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <IconButton sx={{ width: "50px" }}>
          <Button sx={{ color: theme.palette.secondary.main }}>
            <Facebook />
          </Button>
        </IconButton>

        <IconButton sx={{ width: "50px" }}>
          <Button sx={{ color: theme.palette.secondary.main }}>
            <Instagram />
          </Button>
        </IconButton>

        <IconButton sx={{ width: "50px" }}>
          <Button sx={{ color: theme.palette.secondary.main }}>
            <Twitter />
          </Button>
        </IconButton>

        <IconButton sx={{ width: "50px" }}>
          <Button sx={{ color: theme.palette.secondary.main }}>
            <EmailIcon />
          </Button>
        </IconButton>
      </Box>

      <Stack spacing={2} sx={{ margin: "32px auto" }}>
        <MotionConfig>
          {["Your Name", "Your Email", "Subject", "Your Message"].map(
            (placeholder, index) => (
              <motion.div key={index}>
                <TextField
                  placeholder={placeholder}
                  fullWidth
                  variant="outlined"
                  multiline={placeholder === "Your Message"}
                  rows={placeholder === "Your Message" ? 4 : 1}
                  onFocus={() => handleFocus(placeholder)}
                  onBlur={handleBlur}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderColor:
                        focusedField === placeholder
                          ? theme.palette.secondary.main
                          : undefined,
                      boxShadow:
                        focusedField === placeholder
                          ? `0 0 8px ${theme.palette.secondary.main}`
                          : undefined,
                      transition: "box-shadow 0.3s, border-color 0.3s",
                    },
                  }}
                />
              </motion.div>
            )
          )}
        </MotionConfig>

        <motion.div whileHover={{ y: -3 }}>
          <LoadingButton
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "20px",
            }}
            endIcon={<Send />}
          >
            Send Message
          </LoadingButton>
        </motion.div>
      </Stack>

      <NewsLetter />
    </Box>
  );
};
