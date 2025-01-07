import {
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

export const ContactForm = () => {
  const theme = useTheme();

  return (
    <>
      <Typography>Contact Us</Typography>
      <Typography>
        Have a question about your wellness journey? Ask me anything, and let's
        start a conversation towards your path to well-being.
      </Typography>
      <IconButton>
        <Instagram />
      </IconButton>
      <IconButton>
        <Facebook />
      </IconButton>
      <IconButton>
        <Twitter />
      </IconButton>

      <Stack>
        <MotionConfig>
          <motion.div>
            <TextField />
          </motion.div>

          <motion.div>
            <TextField />
          </motion.div>

          <motion.div>
            <TextField />
          </motion.div>

          <motion.div>
            <TextField />
          </motion.div>
        </MotionConfig>

        <motion.div>
          <LoadingButton sx={{ backgroundColor: theme.palette.secondary.main }}>
            Send Message
          </LoadingButton>
        </motion.div>
      </Stack>
    </>
  );
};
