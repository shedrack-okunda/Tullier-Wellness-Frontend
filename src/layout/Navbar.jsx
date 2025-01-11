import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Tullier Main LOGO (1).png";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SelectLoggedInUser } from "../features/auth/AuthSlice";
import { axio } from "../config/axios";

export const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(700));
  const [userName, setUserName] = useState("");
  const loggedInUser = useSelector(SelectLoggedInUser);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userId = loggedInUser?._id;
        if (!userId) {
          console.warn("User id is undefined");
          return;
        }
        const res = await axio.get(`/users/${userId}`);
        setUserName(res.data.name);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserName();
  }, [loggedInUser]);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Testimonials", id: "testimonies" },
    { label: "Events", id: "events" },
    { label: "Services", id: "services" },
    { label: "Resources", id: "resources" },
    { label: "Programs", id: "programs" },
    { label: "Contact", id: "contacts" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.primary.dark,
        color: "#000",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1300,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Logo and Title */}
        <Box
          component="img"
          src={logo}
          alt="wellness"
          sx={{
            height: "40px",
            marginRight: "8px",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            cursor: "pointer",
            color: theme.palette.secondary.main,
          }}
          onClick={() => navigate("/")}
        >
          Tullier Wellness
        </Typography>

        {/* Navigation Items */}
        {!isSmallScreen && (
          <Box>
            {navItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* <IconButton
          sx={{ backgroundColor: theme.palette.button.background }}
          onClick={() => navigate("/profile")}
        >
          <AccountCircleIcon />
        </IconButton> */}

        {/* Logout Icon */}
        <IconButton
          sx={{
            color: theme.palette.secondary.main,
          }}
          onClick={() => navigate("/logout")}
        >
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
