// src/components/Profile.js
import {
  TextField,
  Button,
  Avatar,
  Container,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { axio } from "../../config/axios";
import { useSelector } from "react-redux";
import { SelectLoggedInUser } from "../auth/AuthSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const theme = useTheme();
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const loggedInUser = useSelector(SelectLoggedInUser);
  const navigate = useNavigate();
  const [focusedField, setFocusedField] = useState(null);

  const userId = loggedInUser?._id; // Replace with dynamic user ID from auth or context

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axio.get(`/users/${userId}`);
        setUser(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
        setProfilePic(res.data.profilePic);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, [userId]);

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleUpdate = async () => {
    try {
      const res = await axio.patch(`/users/${userId}`, {
        name,
        email,
        profilePic,
      });
      setUser(res.data);
      toast.success("Profile updated successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        padding: "2rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar
        src={profilePic}
        alt={name}
        sx={{ width: 100, height: 100, margin: "auto" }}
      />
      <Typography variant="h5" gutterBottom>
        Edit Profile
      </Typography>
      <TextField
        onFocus={() => handleFocus()}
        onBlur={handleBlur}
        sx={{
          backgroundColor: focusedField
            ? theme.palette.background.paper
            : "transparent",
          transition: "background-color 0.3s ease",
          borderRadius: "8px",
        }}
        fullWidth
        margin="normal"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        value={email}
        disabled
      />
      <TextField
        fullWidth
        margin="normal"
        label="Profile Picture URL"
        value={profilePic}
        onChange={(e) => setProfilePic(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={handleUpdate}
        sx={{
          color: theme.palette.secondary.text,
          marginTop: "1rem",
          mb: "2rem",
        }}
      >
        Save Changes
      </Button>
    </Box>
  );
};
