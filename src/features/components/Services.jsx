import { Box, Button, Typography, useTheme } from "@mui/material";

export const Services = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography>Services</Typography>
      <Typography>Counselling Services</Typography>
      <Typography>KSH. 2,000</Typography>
      <Typography>
        Our counselling sessions provide a safe and confidential space where you
        can explore your emotions, confront challenges, and cultivate
        resilience.
      </Typography>
      <Typography>
        <strong>Gain clarity:</strong>
        Explore your thoughts and feelings in a supportive environment.
      </Typography>
      <Typography>
        <strong>Build coping skills:</strong>
        Learn effective coping strategies to navigate life's challenges and
        enhance emotional wellbeing.
      </Typography>
      <Typography>
        <strong>Foster growth:</strong>
        Embrace personal growth and transformation as you work towards your
        wellness goals and aspirations.
      </Typography>

      <img />
      <Button sx={{ backgroundColor: theme.palette.secondary.main }}>
        Book Now
      </Button>
    </Box>
  );
};
