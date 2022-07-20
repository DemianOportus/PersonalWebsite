import { Button, Grid, AlertTitle, Alert, Container } from "@mui/material";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [missingFields, setMissingFields] = useState(false);
  const [missingFieldIs, setMissingFieldIs] = useState("");
  const [successfulFields, SetSuccessfulFields] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    //Checks to send email
    if (missingFields) return;
    emailjs
      .sendForm(
        "service_emwsaki",
        "template_gz9s23m",
        form.current,
        "LPp3lHaDb7qw77Cvm"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.replace("/success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function CheckBoolean() {
    const missing = [];
    // Check conditions
    if (name === "") {
      missing.push("name");
    }
    if (email === "") {
      missing.push("email");
    } else if (!email.includes("@")) {
      missing.push("email");
    } else if (!email.includes(".")) {
      missing.push("email");
    }
    if (question === "") {
      missing.push("question");
    }
    // END OF Check conditions

    // Check Boolean
    if (missing.length > 0) {
      setMissingFieldIs(missing.join(", "));
      SetSuccessfulFields(false);
      setMissingFields(true);
    } else {
      SetSuccessfulFields(true);
      setMissingFields(false);
    }
    // END OF Check Boolean
  }
  return (
    <Container maxWidth="sm" id="contactPage">
      <h1>Have some questions?</h1>
      <form ref={form} onSubmit={sendEmail}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <input
              onChange={(e) => setName(e.target.value)}
              className="contactInput"
              type="text"
              placeholder="Your name"
              name="name"
              required
            ></input>
          </Grid>
          <Grid item xs={12}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="contactInput"
              type="email"
              placeholder="What's your email?"
              name="user_email"
              required
            ></input>
          </Grid>
          <Grid item xs={12}>
            <textarea
              onChange={(e) => setQuestion(e.target.value)}
              id="questionBox"
              placeholder="Your questions..."
              name="message"
              required
            ></textarea>
          </Grid>
          <Grid item xs={12}>
            {/* Conditional rendering only if client missingFields */}
            {missingFields && (
              <Alert sx={{ width: "100%", textAlign: "left" }} severity="error">
                <AlertTitle>Error</AlertTitle>
                Oops! You are missing the following fields:{" "}
                <strong>{missingFieldIs}</strong>
              </Alert>
            )}
            {successfulFields && (
              <Alert
                sx={{ width: "100%", textAlign: "left", mb: 2 }}
                severity="success"
              >
                <AlertTitle>Success</AlertTitle>
                Congratulations! The message was successfully sent!
              </Alert>
            )}
            <Button
              id="sendButton"
              variant="contained"
              type="submit"
              value="Send"
              onClick={CheckBoolean}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
