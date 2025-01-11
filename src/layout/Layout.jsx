import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <Box>
      <Box component="main">
        <Navbar />

        <Box sx={{ mt: "50px", mb: "25px" }}>
          <Outlet />
        </Box>

        <Footer />
      </Box>
    </Box>
  );
};
