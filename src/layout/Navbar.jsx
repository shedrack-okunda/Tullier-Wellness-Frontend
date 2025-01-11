import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Tullier Main LOGO (1).png";

export const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(700));

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Testimonials", path: "/testimonies" },
    { label: "Events", path: "/events" },
    { label: "Services", path: "/services" },
    { label: "Resources", path: "/resources" },
    { label: "Programs", path: "/programs" },
    { label: "Contact", path: "/contact" },
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
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
