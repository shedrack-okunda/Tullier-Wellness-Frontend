import { Box, Button, Typography, useTheme } from "@mui/material";

export const NewsLetter = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography>Thank You</Typography>

      <Typography>
        Remember, wellness is not a destination, but a journey of self-discovery
        and self-care. Embrace it, cherish it, and let it guide you towards a
        life of balance and fulfillment.
      </Typography>

      <Button sx={{ backgroundColor: theme.palette.secondary.main }}>
        Contact Us
      </Button>
    </Box>
  );
};
