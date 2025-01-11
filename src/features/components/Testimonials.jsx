import { Avatar, Grid2, Paper, Typography, Box, useTheme } from "@mui/material";
import emily from "../../assets/images/emily.jpg";
import naomi from "../../assets/images/naomi.jpg";
import david from "../../assets/images/david.png";
import nixon from "../../assets/images/nixon.jpeg";

// Sample data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Emily",
    avatar: emily,
    text: "Attending Coffee & Trauma events has been nothing short of transformative. Hearing other's stories of resilience and survival inspired me to confront my own trauma of 9 years with courage and vulnerability. I look forward to sharing my story someday.",
  },
  {
    id: 2,
    name: "David",
    avatar: david,
    text: "I started counselling sessions with Tullier 2 years ago and it has been a game-changer. The counselors at Tullier provided a safe space for me to explore my emotions, deal with my family trauma and help me build healthier relationships.",
  },
  {
    id: 3,
    name: "Naomi",
    avatar: naomi,
    text: "I can't thank Tullier enough for the life changing events they organize. I remember this particular event where the speaker shared her life story and it helped me break from self-limiting beliefs and fear that had constantly gripped me. I am now embracing a more courageous attitude with life.",
  },
  {
    id: 4,
    name: "Nixon",
    avatar: nixon,
    text: "Thanks to Tullier's guidance, I have learned how to build healthy relationships. I have gained practical tools and strategies for effective communication and boundary-setting in my romantic relationships.",
  },
];

export const Testimonials = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{ padding: "30px 0", backgroundColor: theme.palette.primary.main }}
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
        Testimonials
      </Typography>
      <Grid2
        container
        spacing={3}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 3,
        }}
      >
        {testimonials.map((testimonial) => (
          <Paper
            key={testimonial.id}
            elevation={2}
            sx={{
              backgroundColor: theme.palette.button.background,

              padding: "20px",
              borderRadius: "10px",
              transition: "background 0.5s, transform 0.5s",
              "&:hover": {
                backgroundColor: theme.palette.button.hoverBackground,
                transform: "translateY(-10px)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Avatar
                src={testimonial.avatar}
                alt={testimonial.name}
                sx={{ width: 50, height: 50 }}
              />
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.3rem", sm: "1rem" },
                }}
              >
                {testimonial.text}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  display: "inline-block",
                  fontSize: { xs: "1.3rem", sm: "1.1rem" },
                  fontWeight: 600,
                  color: "text.secondary",
                }}
              >
                - {testimonial.name}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Grid2>
    </Box>
  );
};
