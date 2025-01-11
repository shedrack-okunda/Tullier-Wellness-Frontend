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
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  clearForgotPasswordError,
  clearForgotPasswordSuccessMessage,
  forgotPasswordAsync,
  resetForgotPasswordStatus,
  SelectForgotPasswordError,
  SelectForgotPasswordStatus,
  SelectForgotPasswordSuccessMessage,
} from "../AuthSlice";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const status = useSelector(SelectForgotPasswordStatus);
  const error = useSelector(SelectForgotPasswordError);
  const successMessage = useSelector(SelectForgotPasswordSuccessMessage);
  const theme = useTheme();
  const is500 = useMediaQuery(theme.breakpoints.down(500));

  useEffect(() => {
    if (error) {
      toast.error(error?.message);
    }
    return () => {
      dispatch(clearForgotPasswordError());
    };
  }, [error]);

  useEffect(() => {
    if (status === "fulfilled") {
      toast.success(successMessage?.message);
    }
    return () => {
      dispatch(clearForgotPasswordSuccessMessage());
    };
  }, [status]);

  useEffect(() => {
    return () => {
      dispatch(resetForgotPasswordStatus());
    };
  }, []);

  const handleForgotPassword = async (data) => {
    dispatch(forgotPasswordAsync(data));
    reset();
  };

  return (
    <Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Stack rowGap={"1rem"}>
        <Stack component={Paper} elevation={2}>
          <Stack
            component={"form"}
            width={is500 ? "95vw" : "30rem"}
            p={is500 ? "1rem" : "1.5rem"}
            rowGap={"1rem"}
            noValidate
            onSubmit={handleSubmit(handleForgotPassword)}
          >
            <Stack rowGap={".4rem"} alignItems={"center"}>
              <Typography
                variant="h5"
                sx={{ color: theme.palette.secondary.main }}
                fontWeight={600}
              >
                {status === "fulfilled"
                  ? "Email has been sent!"
                  : "Forgot Your Password?"}
              </Typography>
              <Typography
                color={theme.palette.primary.contrastText}
                variant="body2"
              >
                {status === "fulfilled"
                  ? "Please check your inbox and click on the received link to reset your password"
                  : "Enter your registered email below to receive password reset link"}
              </Typography>
            </Stack>

            {status !== "fulfilled" && (
              <>
                <motion.div whileHover={{ y: -2 }}>
                  <TextField
                    fullWidth
                    sx={{ mt: 1 }}
                    {...register("email", {
                      required: "Please enter an email",
                      pattern: {
                        value:
                          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                        message: "Enter a valid email",
                      },
                    })}
                    placeholder="Enter your email *"
                  />
                  {errors.email && (
                    <FormHelperText sx={{ fontSize: ".9rem", mt: 1 }} error>
                      {errors.email.message}
                    </FormHelperText>
                  )}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 1 }}
                >
                  <LoadingButton
                    sx={{
                      height: "3rem",
                      backgroundColor: theme.palette.secondary.main,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                    fullWidth
                    loading={status === "pending"}
                    type="submit"
                    variant="contained"
                  >
                    Send Password Reset Link
                  </LoadingButton>
                </motion.div>
              </>
            )}
          </Stack>
        </Stack>

        {/* back to login navigation */}
        <motion.div whileHover={{ x: 2 }} whileTap={{ scale: 1.05 }}>
          <Typography
            sx={{
              textDecoration: "none",
              color: "text.primary",
              width: "fit-content",
            }}
            mt={2}
            to={"/login"}
            variant="body2"
            component={Link}
          >
            Go back to{" "}
            <span style={{ color: theme.palette.secondary.main }}>login</span>
          </Typography>
        </motion.div>
      </Stack>
    </Stack>
  );
};
