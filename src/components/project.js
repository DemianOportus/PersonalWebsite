import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";

function Project(props) {
  return (
    <Grid
      container
      alignItems="center"
      style={{
        backgroundColor: "#F6F6F6",
        padding: "32px",
        marginBottom: "32px",
      }}
    >
      <Grid item sm={12} lg={6}>
        <a href={props.playCode} target="_blank" rel="noopener noreferrer">
          <img
            id="projectImage"
            src={props.img}
            alt="img"
            style={{
              width: "100%",
              border: "2px solid black",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </a>
      </Grid>
      <Grid item sm={12} lg={6}>
        <Typography
          id="portfolioTitle"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "600",
            fontSize: "4vh",
            textAlign: "center",
            paddingTop: "30px",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          id="portfolioDescription"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "400",
            fontSize: "3vh",
            textAlign: "center",
            padding: "2vh 8vh",
            lineHeight: "1.7",
          }}
        >
          {props.description}
        </Typography>
        <Box textAlign="center">
          <Button
            href={props.sourceCode}
            id="contactButton"
            size="large"
            variant="contained"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textTransform: "none",
              backgroundColor: "#d5eaeb",
              color: "black",
              marginTop: "4%",
              boxShadow: "none",
              border: "1px solid black",
              fontFamily: "Montserrat",
            }}
          >
            Source Code
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Project;
