import { Button, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFoundPage = () => {
  const theme = useTheme();

  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <Stack rowGap={1} justifyContent={"center"} alignItems={"center"}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Typography
            variant="h4"
            fontWeight={"600"}
            sx={{ color: theme.palette.secondary.main }}
            mb={2}
          >
            404 Not Found
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Sorry, we could not find the page you are looking for.
          </Typography>
        </Stack>

        <motion.div whileHover={{ y: -2 }}>
          <Button
            sx={{
              height: "2.5rem",
              backgroundColor: theme.palette.secondary.main,
              color: "#fff",
              fontWeight: 600,
              fontSize: "1rem",
              mt: 3,
            }}
            size="large"
            //   Component={Link}
            to={"/"}
            variant="contained"
          >
            Go back to home Page
          </Button>
        </motion.div>
      </Stack>
    </Stack>
  );
};
