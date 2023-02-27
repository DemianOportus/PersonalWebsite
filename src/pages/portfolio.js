import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Grid } from "@mui/material";

import Projects from "../components/projects";
import Project from "../components/project";

function Portfolio() {
  return (
    <>
      <Navbar />

      <Grid item>
        <h1 style={{ fontFamily: "Suisse" }} className="subtitle">
          Portfolio
        </h1>
        <hr
          style={{
            width: "100px",
            backgroundColor: "#00989d",
            height: "3px",
            border: "none",
            marginBottom: "60px",
          }}
        ></hr>
        {Projects.map(Project)}
      </Grid>

      <Footer />
    </>
  );
}
export default Portfolio;
