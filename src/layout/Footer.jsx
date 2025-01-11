import {
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
  useMediaQuery,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ChatIcon from "@mui/icons-material/Chat";
import EventIcon from "@mui/icons-material/Event";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import BookIcon from "@mui/icons-material/MenuBook";
import ListIcon from "@mui/icons-material/ViewList";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

export const Footer = () => {
  const [value, setValue] = useState(0);
  const [hoverLabel, setHoverLabel] = useState(""); // State to track hovered label
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(700)); // Define screen size breakpoint

  const handleNavigation = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", icon: <HomeIcon />, id: "home" },
    { label: "About", icon: <InfoIcon />, id: "about" },
    { label: "Testimonials", icon: <ChatIcon />, id: "testimonies" },
    { label: "Events", icon: <EventIcon />, id: "events" },
    { label: "Services", icon: <SettingsSuggestIcon />, id: "services" },
    { label: "Books", icon: <BookIcon />, id: "resources" },
    { label: "Programs", icon: <ListIcon />, id: "programs" },
    { label: "Contact", icon: <ContactMailIcon />, id: "contacts" },
  ];

  return (
    <>
      {/* BottomNavigation for small screens */}
      {isSmallScreen && (
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            // zIndex: 1200,
          }}
        >
          {navItems.map((item, index) => (
            <BottomNavigationAction
              key={index}
              icon={
                <item.icon.type
                  sx={{
                    fontSize: "1.5rem", // Smaller icon size for mobile
                  }}
                />
              }
              title={item.label} // For accessibility
              onMouseEnter={() => setHoverLabel(item.label)} // Set hover label
              onMouseLeave={() => setHoverLabel("")} // Clear hover label
              onClick={() => handleNavigation(item.id)}
              sx={{
                minWidth: "auto", // Reduce button width
                color: theme.palette.secondary.main,
                "&.Mui-selected": {
                  color: theme.palette.secondary.light,
                },
              }}
            />
          ))}
          {/* Label display */}
          {hoverLabel && (
            <Typography
              variant="caption"
              sx={{
                position: "absolute",
                bottom: "4rem", // Adjust the position above the navigation bar
                left: "50%",
                fontSize: ".8rem",
                transform: "translateX(-50%)",
                color: theme.palette.button.text,
                backgroundColor: theme.palette.button.background,
                padding: "0.4rem 0.7rem",
                borderRadius: "4px",
                whiteSpace: "nowrap",
              }}
            >
              {hoverLabel}
            </Typography>
          )}
        </BottomNavigation>
      )}

      {/* Footer for larger screens */}
      {!isSmallScreen && (
        <Stack
          sx={{
            display: "flex",
            backgroundColor: theme.palette.primary.main,
            padding: "1rem 3rem",
            rowGap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
            color: theme.palette.primary.contrastText,
          }}
        >
          {/* Copyright Section */}
          <Typography variant="body2" fontWeight={"600"} align="center">
            Copyright &copy; {new Date().getFullYear()} Tullier Wellness, All
            rights reserved.
          </Typography>
        </Stack>
      )}
    </>
  );
};
