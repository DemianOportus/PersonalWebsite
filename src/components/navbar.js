import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function MyNavbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        id="navbar"
        position="static"
        style={{
          backgroundColor: "white",
          boxShadow: "none",
          padding: "1%",
          background: "rgba(0, 0, 0, 0)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              fontFamily: "Montserrat",
              fontWeight: "600",
              paddingLeft: "3.5%",
              color: "black",
            }}
          >
            <a href="/" style={{ textDecoration: "none" }}>
              demian.
            </a>
          </Typography>
          <Button
            href="/contact"
            className="navLink"
            color="inherit"
            style={{
              textTransform: "none",
              fontFamily: "Montserrat",
              color: "black",
            }}
          >
            Contact
          </Button>
          <Button
            className="navLink"
            color="inherit"
            href="/portfolio"
            style={{
              textTransform: "none",
              fontFamily: "Montserrat",
              color: "black",
            }}
          >
            Portfolio
          </Button>
          <Button
            className="navLink"
            href="/OportusResume.pdf"
            download="OportusResume.pdf"
            color="inherit"
            style={{
              textTransform: "none",
              fontFamily: "Montserrat",
              color: "black",
            }}
          >
            CV
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
