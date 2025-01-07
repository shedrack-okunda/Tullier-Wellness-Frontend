/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  clearOtpVerificationError,
  clearResendOtpError,
  clearResendOtpSuccessMessage,
  resendOtpAsync,
  resetOtpVerificationStatus,
  resetResendOtpStatus,
  SelectLoggedInUser,
  SelectOtpVerificationError,
  SelectOtpVerificationStatus,
  SelectResendOtpError,
  SelectResendOtpStatus,
  SelectResendOtpSuccessMessage,
  verifyOtpAsync,
} from "../AuthSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  FormHelperText,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { motion } from "framer-motion";

export const OtpVerification = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const theme = useTheme();
  const loggedInUser = useSelector(SelectLoggedInUser);
  //   const navigate = useNavigate();
  const resendOtpStatus = useSelector(SelectResendOtpStatus);
  const resendOtpError = useSelector(SelectResendOtpError);
  const resendOtpSuccessMessage = useSelector(SelectResendOtpSuccessMessage);
  const otpVerificationStatus = useSelector(SelectOtpVerificationStatus);
  const otpVerificationError = useSelector(SelectOtpVerificationError);

  //   handles the redirection
  //   useEffect(() => {
  //     if (!loggedInUser) {
  //       navigate("/login");
  //     } else if (loggedInUser && loggedInUser?.isVerified) {
  //       navigate("/");
  //     }
  //   }, [loggedInUser]);

  const handleSendOtp = () => {
    const data = { user: loggedInUser?._id };
    dispatch(resendOtpAsync(data));
  };

  const handleVerifyOtp = (data) => {
    const cred = { ...data, userId: loggedInUser?._id };
    dispatch(verifyOtpAsync(cred));
  };

  //   handles resend otp error
  //   useEffect(() => {
  //     if (resendOtpError) {
  //       toast.error(resendOtpError.message);
  //     }

  //     return () => {
  //       dispatch(clearResendOtpError());
  //     };
  //   }, [resendOtpError]);

  //   handles resend otp success message
  useEffect(() => {
    if (resendOtpSuccessMessage) {
      toast.success(resendOtpSuccessMessage.message);
    }

    return () => {
      dispatch(clearResendOtpSuccessMessage());
    };
  }, [resendOtpSuccessMessage]);

  //   handles error while verify otp
  useEffect(() => {
    if (otpVerificationError) {
      toast.error(otpVerificationError.message);
    }

    return () => {
      dispatch(clearOtpVerificationError());
    };
  }, [otpVerificationError]);

  useEffect(() => {
    if (otpVerificationStatus === "fulfilled") {
      toast.success("Email verified! We are happy to have you here");
      dispatch(resetResendOtpStatus());
    }

    return () => {
      dispatch(resetOtpVerificationStatus());
    };
  }, [otpVerificationStatus]);

  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      noValidate
      flexDirection={"column"}
      rowGap={3}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        component={Paper}
        elevation={2}
        position={"relative"}
        justifyContent={"center"}
        alignItems={"center"}
        p={"2rem"}
        rowGap={"2rem"}
      >
        <Typography
          mt={4}
          variant="h5"
          fontWeight={600}
          sx={{ color: theme.palette.secondary.main }}
        >
          Verify Your Email Address
        </Typography>
        <Stack
          width={"100%"}
          rowGap={"1rem"}
          component={"form"}
          noValidate
          onSubmit={handleSubmit(handleVerifyOtp)}
        >
          <Stack rowGap={"1rem"}>
            <Stack>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.primary.contrastText }}
              >
                Enter the 4 digit OTP sent on
              </Typography>
              <Typography fontWeight={"600"}>{loggedInUser?.email}</Typography>
            </Stack>

            <Stack>
              <TextField
                {...register("otp", {
                  required: "OTP is required",
                  minLength: {
                    value: 4,
                    message: "Please enter a 4 digit OTP",
                  },
                })}
                fullWidth
                type="number"
              />
              {errors?.otp && (
                <FormHelperText error>{errors.otp.message}</FormHelperText>
              )}
            </Stack>
          </Stack>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
            <LoadingButton
              loading={otpVerificationStatus === "pending"}
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                height: "2.5rem",
                backgroundColor: theme.palette.secondary.main,
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              Verify
            </LoadingButton>
          </motion.div>
        </Stack>
        <>
          <Stack>
            <Typography sx={{ color: theme.palette.primary.contrastText }}>
              We will send you an OTP on
            </Typography>
            <Typography fontWeight={"600"} color={"GrayText"}>
              {loggedInUser?.email}
            </Typography>
          </Stack>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
            <LoadingButton
              onClick={handleSendOtp}
              loading={resendOtpStatus === "pending"}
              fullWidth
              variant="contained"
              sx={{
                height: "2.5rem",
                backgroundColor: theme.palette.secondary.main,
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              Get OTP
            </LoadingButton>
          </motion.div>
        </>
      </Stack>
    </Stack>
  );
};
