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
import { NewsLetter } from "./NewsLetter";
import EmailIcon from "@mui/icons-material/Email";
import Send from "@mui/icons-material/Send";
import { useState } from "react";
import { axio } from "../../config/axios";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const theme = useTheme();
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axio.post("/contact", formData);
      setSuccess(response.data.message);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Set a timer to clear success message after 3 seconds
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      console.error(error.response.data.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

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

      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          {["name", "email", "subject", "message"].map((field) => (
            <Stack key={field}>
              <TextField
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field]}
                onChange={handleChange}
                onFocus={() => handleFocus(field)}
                onBlur={handleBlur}
                multiline={field === "message"}
                rows={field === "message" ? 4 : 1}
                required
                sx={{
                  backgroundColor:
                    focusedField === field
                      ? theme.palette.background.paper
                      : "transparent",
                  transition: "background-color 0.3s ease",
                  borderRadius: "8px",
                }}
              />
            </Stack>
          ))}
          <Button
            endIcon={<Send />}
            sx={{
              backgroundColor: theme.palette.button.background,
              color: theme.palette.button.text,
              borderRadius: "20px",
              padding: "10px 20px",
            }}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
          {success && <Typography color="success.main">{success}</Typography>}
        </Stack>
      </form>

      <NewsLetter />
    </Box>
  );
};
