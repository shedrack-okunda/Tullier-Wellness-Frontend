/* eslint-disable react-hooks/exhaustive-deps */
import {
  FormHelperText,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import {
  clearLoginError,
  loginAsync,
  resetLoginStatus,
  SelectLoggedInUser,
  SelectLoginError,
  SelectLoginStatus,
} from "../AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion, MotionConfig } from "framer-motion";
import { LoadingButton } from "@mui/lab";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const Login = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const status = useSelector(SelectLoginStatus);
  const error = useSelector(SelectLoginError);
  const loggedInUser = useSelector(SelectLoggedInUser);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const is480 = useMediaQuery(theme.breakpoints.down(480));

  //   handles user redirection
  useEffect(() => {
    if (loggedInUser && loggedInUser?.isVerified) {
      navigate("/");
    } else if (loggedInUser && !loggedInUser?.isVerified) {
      navigate("/verify-otp");
    }
  }, [loggedInUser]);

  // handles login error and toast them
  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  // handles login status and dispatches reset actions to relevant states in cleanup
  useEffect(() => {
    if (status === "fulfilled" && loggedInUser?.isVerified === true) {
      toast.success(`Login successful`);
      reset();
    }
    return () => {
      dispatch(clearLoginError());
      dispatch(resetLoginStatus());
    };
  }, [status]);

  const handleLogin = (data) => {
    const cred = { ...data };
    delete cred.confirmPassword;
    dispatch(loginAsync(cred));
  };

  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ overflow: "hidden" }}
    >
      <Paper
        elevation={2}
        sx={{ padding: "2rem", maxWidth: "500px", width: "70%" }}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
        >
          <Stack rowGap={".4rem"}>
            <Typography
              variant="h4"
              sx={{
                wordBreak: "break-word",
                color: theme.palette.secondary.main,
              }}
              fontWeight={600}
            >
              Tullier Wellness
            </Typography>
            <Typography variant="h6" fontWeight={"600"} textAlign={"center"}>
              Login to your account
            </Typography>
            <Typography
              alignSelf={"flex-end"}
              color={theme.palette.primary.contrastText}
              variant="body2"
            >
              Welcome to a Journey of Wholeness
            </Typography>
          </Stack>
        </Stack>

        <Stack
          mt={4}
          spacing={2}
          width={is480 ? "95vw" : "28rem"}
          component={"form"}
          noValidate
          onSubmit={handleSubmit(handleLogin)}
        >
          <motion.div whileHover={{ y: -5 }}>
            <TextField
              fullWidth
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  message: "Enter a valid email",
                },
              })}
              placeholder="Email *"
            />
            {errors.email && (
              <FormHelperText sx={{ mt: 1 }} error>
                {errors.email.message}
              </FormHelperText>
            )}
          </motion.div>

          <motion.div whileHover={{ y: -5 }}>
            <TextField
              type="password"
              fullWidth
              {...register("password", { required: "Password is required" })}
              placeholder="Password *"
            />
            {errors.password && (
              <FormHelperText sx={{ mt: 1 }} error>
                {errors.password.message}
              </FormHelperText>
            )}
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
            <LoadingButton
              fullWidth
              sx={{
                height: "2.5rem",
                backgroundColor: theme.palette.secondary.main,
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.2rem",
              }}
              loading={status === "pending"}
              type="submit"
              variant="contained"
            >
              Login
            </LoadingButton>
          </motion.div>

          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap-reverse"}
          >
            <MotionConfig whileHover={{ x: 2 }} whileTap={{ scale: 1.05 }}>
              <motion.div>
                <Typography
                  mr={"1.5rem"}
                  sx={{ textDecoration: "none", color: "text.primary" }}
                  to={"/forgot-password"}
                  component={Link}
                >
                  Forgot password
                </Typography>
              </motion.div>

              <motion.div>
                <Typography
                  sx={{ textDecoration: "none", color: "text.primary" }}
                  to={"/signup"}
                  component={Link}
                >
                  Don't have an account?{" "}
                  <span style={{ color: theme.palette.secondary.main }}>
                    Register
                  </span>
                </Typography>
              </motion.div>
            </MotionConfig>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};
