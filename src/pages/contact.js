import { Button, Grid } from "@mui/material";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
        }
      );

    Redirect();
  };

  function Redirect() {
    if (name !== "" && email !== "" && question !== "") {
      window.location.replace("/success");
    } else {
      alert("Please fill out missing field");
    }
  }

  return (
    <Grid id="contactPage">
      <h1>Have some questions?</h1>
      <form ref={form} onSubmit={sendEmail}>
        <Grid>
          <input
            onChange={(e) => setName(e.target.value)}
            className="contactInput"
            type="text"
            placeholder="Your name"
            name="name"
          ></input>
        </Grid>
        <Grid>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="contactInput"
            type="email"
            placeholder="What's your email?"
            name="user_email"
          ></input>
        </Grid>
        <Grid>
          <textarea
            onChange={(e) => setQuestion(e.target.value)}
            id="questionBox"
            placeholder="Your questions..."
            name="message"
          ></textarea>
        </Grid>
        <Grid>
          <Button
            id="sendButton"
            variant="contained"
            type="submit"
            value="Send"
          >
            Send Message
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};
