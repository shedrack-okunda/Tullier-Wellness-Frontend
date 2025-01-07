import { Box, Button, Typography, useTheme } from "@mui/material";

export const Resources = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography>Resources</Typography>
      <Typography>KSH. 1,000</Typography>
      <Typography>
        Dive into a world of wisdom and practical tips crafted by experts in
        mental health and personal development. These gems are not just books -
        they're your companions on the path to healing and growth, sprinkled
        with humor and heart.
      </Typography>
      <Typography>
        <strong>Accessible wisdom:</strong>
        Access to practical strategies that you can implement in your daily life
        to foster healthier relationships and overcome trauma-related
        challenges.
      </Typography>
      <Typography>
        <strong>Personalized learning:</strong>
        Our e-books offer personalized learning experience enabling you to
        absorb the content at your own pace and convenience.
      </Typography>

      <img />
      <Box>
        <Typography>Wellness e-book</Typography>
        <Typography>
          Are you aware of how to tackle your wellness? Dive deep into some
          insight with this book.
        </Typography>
        <Button sx={{ backgroundColor: theme.palette.secondary.main }}>
          Buy now
        </Button>
      </Box>
    </Box>
  );
};
