import { Avatar, Grid2, Paper, Typography } from "@mui/material";

export const Testimonials = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 item xs={12} sm={6}>
        <Paper elevation={2}>
          <Avatar />
          <Typography>
            Attending Coffee & Trauma events has been nothing short of
            transformative. Hearing other's stories of resilience and survival
            inspired me to confront my own trauma of 9 years with courage and
            vulnerability. I look forward to sharing my story someday.
          </Typography>
          <Typography>- Emily</Typography>
        </Paper>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={8}>
        <Paper elevation={2}>
          <Avatar />
          <Typography>
            I started counselling sessions with Tullier 2 years ago and it has
            been a game-changer. The counselors at Tullier provided a safe space
            for me to explore my emotions, deal with my family trauma and help
            me build healthier relationships.
          </Typography>
          <Typography>- David</Typography>
        </Paper>
      </Grid2>

      <Grid2 item xs={12}>
        <Paper elevation={2}>
          <Avatar />
          <Typography>
            I can't thank Tullier enough for the life changing events they
            organize. I remember this particular event where the speaker shared
            her life story and it helped me break from self-limiting beliefs and
            fear that had constantly gripped me. I am now embracing a more
            courageous attitude with life.
          </Typography>
          <Typography>- Naomi</Typography>
        </Paper>
      </Grid2>

      <Grid2 item xs={12}>
        <Paper elevation={2}>
          <Avatar />
          <Typography>
            Thanks to Tullier's guidance, i have learnt how to build healthy
            relationships. I have gained practical tools and strategies for
            effective communication and boundary-setting in my romantic
            relationships.
          </Typography>
          <Typography>- Nixon</Typography>
        </Paper>
      </Grid2>
    </Grid2>
  );
};
