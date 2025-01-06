/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  clearSignupError,
  resetSignupStatus,
  SelectLoggedInUser,
  SelectSignupError,
  SelectSignupStatus,
  signupAsync,
} from "../AuthSlice";
import {
  FormHelperText,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { MotionConfig, motion } from "framer-motion";
import { LoadingButton } from "@mui/lab";

export const Signup = () => {
  const dispatch = useDispatch();
  const status = useSelector(SelectSignupStatus);
  const error = useSelector(SelectSignupError);
  const loggedInUser = useSelector(SelectLoggedInUser);
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const theme = useTheme();
  const is480 = useMediaQuery(theme.breakpoints.down(480));

  // handles user redirection
  useEffect(() => {
    if (loggedInUser && !loggedInUser?.isVerified) {
      navigate("/verify-otp");
    } else if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser]);

  // handles signup error
  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (status === "fulfilled") {
      toast.success("welcome! Verify your email to start healing.");
      reset();
    }

    return () => {
      dispatch(clearSignupError());
      dispatch(resetSignupStatus());
    };
  }, [status]);

  // handles signup and dispatches the signup action with credentials that the api requires
  const handleSignup = async (data) => {
    try {
      const cred = { ...data };
      delete cred.confirmPassword;
      dispatch(signupAsync(cred));
    } catch (error) {
      setError("email", {
        message: "This email is already taken",
        error,
      });
    }
  };

  return (
    <Stack
      width={"90vw"}
      height={"90vh"}
      flexDirection={"row"}
      sx={{ overflowY: "hidden" }}
    >
      <Stack flex={1} justifyContent={"center"} alignItems={"center"}>
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack rowGap={".4rem"}>
            <Typography
              variant="h2"
              sx={{
                wordBreak: "break-word",
                color: theme.palette.secondary.main,
              }}
              fontWeight={600}
            >
              Tullier Wellness
            </Typography>
            <Typography
              alignSelf={"flex-end"}
              color={theme.palette.primary.contrastText}
              variant="body2"
            >
              Start a Journey to Trauma healing
            </Typography>
          </Stack>
        </Stack>

        <Stack
          mt={4}
          spacing={2}
          width={is480 ? "95vw" : "28rem"}
          component={"form"}
          noValidate
          onSubmit={handleSubmit(handleSignup)}
        >
          <MotionConfig whileHover={{ y: -5 }}>
            <motion.div>
              <TextField
                fullWidth
                {...register("name", { required: "Username is required" })}
                placeholder="Enter yor name *"
              />
              {errors.name && (
                <FormHelperText error>{errors.name.message}</FormHelperText>
              )}
            </motion.div>

            <motion.div>
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
                placeholder="Enter your email *"
              />
              {errors.email && (
                <FormHelperText error>{errors.email.message}</FormHelperText>
              )}
            </motion.div>

            <motion.div>
              <TextField
                type="password"
                fullWidth
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                    message: `at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, Can contain special characters`,
                  },
                })}
                placeholder="Enter your password *"
              />
              {errors.password && (
                <FormHelperText>{errors.password.message}</FormHelperText>
              )}
            </motion.div>

            <motion.div>
              <TextField
                type="password"
                fullWidth
                {...register("confirmPassword", {
                  required: "Re-enter Password is required",
                  validate: (value, fromValues) =>
                    value === fromValues.password || "Passwords doesn't match",
                })}
                placeholder="Re-enter Password"
              />
              {errors.confirmPassword && (
                <FormHelperText error>
                  {errors.confirmPassword.message}
                </FormHelperText>
              )}
            </motion.div>
          </MotionConfig>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
            <LoadingButton
              sx={{
                height: "3rem",
                backgroundColor: theme.palette.secondary.main,
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.3rem",
              }}
              fullWidth
              loading={status === "pending"}
              type="submit"
              variant="contained"
            >
              Register
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
                  sx={{ textDirection: "none", color: "text.primary" }}
                  to={"/forgot-password"}
                  component={Link}
                >
                  Forgot password
                </Typography>
              </motion.div>

              <motion.div>
                <Typography
                  sx={{ textDecoration: "none", color: "text.primary" }}
                  to={"/login"}
                  component={Link}
                >
                  Already a member?{" "}
                  <span style={{ color: theme.palette.secondary.main }}>
                    Login
                  </span>
                </Typography>
              </motion.div>
            </MotionConfig>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
