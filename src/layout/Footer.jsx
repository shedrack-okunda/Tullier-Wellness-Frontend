import { useTheme } from "@emotion/react";
import { IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { MotionConfig, motion } from "framer-motion";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";

export const Footer = () => {
  const theme = useTheme();
  const is700 = useMediaQuery(theme.breakpoints.down(700));

  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.primary.main,
        paddingTop: ".5rem",
        paddingLeft: is700 ? "1rem" : "3rem",
        paddingRight: is700 ? "1rem" : "3rem",
        rowGap: "1rem",
        color: theme.palette.primary.light,
        justifyContent: "space-around",
      }}
    >
      <Stack flexDirection={"row"} columnGap={"1rem"}>
        <MotionConfig whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <motion.div>
            <IconButton
              sx={{ color: theme.palette.secondary.main }}
              onClick={() => window.open()}
            >
              <Facebook />
            </IconButton>
          </motion.div>

          <motion.div>
            <IconButton
              sx={{ color: theme.palette.secondary.main }}
              onClick={() => window.open()}
            >
              <Twitter />
            </IconButton>
          </motion.div>

          <motion.div>
            <IconButton
              sx={{ color: theme.palette.secondary.main }}
              onClick={() => window.open()}
            >
              <Instagram />
            </IconButton>
          </motion.div>

          <motion.div>
            <IconButton></IconButton>
          </motion.div>
        </MotionConfig>
      </Stack>

      <Stack alignSelf={"center"}>
        <Typography fontWeight={500} color={theme.palette.primary.contrastText}>
          <p style={{ display: "inline-flex" }}>&copy;</p>{" "}
          {new Date().getFullYear()} Tullier Wellness , All right reserved.
        </Typography>
      </Stack>
    </Stack>
  );
};
