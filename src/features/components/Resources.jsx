import { Box, Button, Typography, useTheme } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ebook from "../../assets/images/ebook.jpg";

export const Resources = () => {
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
        Resources
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
        Dive into a world of wisdom and practical tips crafted by experts in
        mental health and personal development. These gems are not just books -
        they're your companions on the path to healing and growth, sprinkled
        with humor and heart.
      </Typography>

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
            Accessible wisdom:
          </strong>{" "}
          Access to practical strategies that you can implement in your daily
          life to foster healthier relationships and overcome trauma-related
          challenges.
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
            Personalized learning:
          </strong>{" "}
          Our e-books offer personalized learning experience enabling you to
          absorb the content at your own pace and convenience.
        </Typography>
      </Box>

      <Box
        component="img"
        src={ebook}
        alt="Counselling session"
        sx={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "15px",
          boxShadow: `0px 4px 20px ${theme.palette.secondary.light}`,
          marginBottom: "1rem",
        }}
      />

      <Box>
        <Typography
          variant="h3"
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontSize: { xs: "2rem", sm: "2rem" },
            textAlign: "center",
            color: theme.palette.secondary.main,
            fontWeight: 600,
            marginBottom: "1rem",
          }}
        >
          Wellness e-book
        </Typography>

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
          KSH. 1,000
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
          Are you aware of how to tackle your wellness? Dive deep into some
          insight with this book.
        </Typography>
        {/* <Button sx={{ backgroundColor: theme.palette.secondary.main }}>
          Buy now
        </Button> */}
      </Box>
    </Box>
  );
};
