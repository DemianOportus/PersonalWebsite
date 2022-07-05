import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Typography, Grid, Button } from "@mui/material";

import Entry from "../components/entry";
import Entries from "../components/entryinfo";

function Portfolio() {
  return (
    <>
      <Navbar />
      <Grid containter="true" justifyContent="center" textAlign="center">
        <Typography variant="h2">Portfolio</Typography>
        {Entries.map(Entry)}
      </Grid>

      <Footer />
    </>
  );
}

export default Portfolio;
