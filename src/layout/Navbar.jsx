import { AppBar, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "whitesmoke",
        boxShadow: "none",
        color: "text.primary",
      }}
    >
      <Toolbar
        sx={{
          p: 1,
          height: "3rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "flex" },
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Tullier Wellness
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
