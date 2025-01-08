import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <Box>
      <Box component="main">
        <Navbar />

        <Outlet />

        <Footer />
      </Box>
    </Box>
  );
};
