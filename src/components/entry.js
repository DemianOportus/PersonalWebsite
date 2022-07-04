import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import React from "react";
import {
  Grid,
  Button,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

export default function Entry(props) {
  const theme = createTheme({
    typography: {
      h3: {
        fontFamily: "Monserrat",
        fontSize: 40,
        fontWeight: 400,
        paddingTop: 10,
      },
      h2: {
        fontFamily: "Monserrat",
        fontSize: 60,
        fontWeight: 200,
        paddingTop: 10,
      },
      h5: {
        fontFamily: "Monserrat",
        fontSize: 25,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          mb={5}

          // xs
          // sx={{
          //   display: "inline-block",
          //   mr: 3,
          // }}
        >
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              color: "black",
              backgroundColor: "#FFF",
              maxWidth: "80%",
              marginLeft: "10%",
            }}
          >
            <CardActionArea href={props.playCode} target="_blank">
              <CardMedia
                component="img"
                image={props.imgURL}
                alt="image couldn't be loaded"
                style={{ display: "inline" }}
              />

              <CardContent>
                <Typography variant="h2" component="div">
                  {props.projectName}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  {props.projectDescription}
                </Typography>
                <Button
                  href={props.sourceCode}
                  target="_blank"
                  variant="contained"
                  color="secondary"
                >
                  Source Code
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </ThemeProvider>
    </>
  );
}
