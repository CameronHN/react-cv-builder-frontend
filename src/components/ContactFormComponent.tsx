import { useForm, ValidationError } from "@formspree/react";
import { Box } from "@mantine/core";
import React from "react";
import { TextInput, Textarea, Button } from "@mantine/core";

export const ContactFormComponent: React.FC = () => {
  // Use the useForm hook to handle form submissions
  const [state, handleSubmit] = useForm("mrbegknk");

  // Display a thank you message and redirect to the homepage
  if (state.succeeded) {
    return (
      <>
        <h3>Thank you for your message! I'll get to you very soon.</h3>
        <p>Redirecting to the home page in 5 seconds...</p>
        <meta http-equiv="refresh" content="5;url=/" />
      </>
    );
  }

  return (
    <>
      <h2>Or pop me a message!</h2>

      <Box maw={500} mx={"auto"}>
        <form id="contact-form" onSubmit={handleSubmit}
          action="https://formspree.io/f/mrbegknk"
          method="POST">
          <TextInput label="Name:" placeholder="Your name" id="name" name="name" required />
          <TextInput label="Email:" placeholder="Your email" id="email" name="email" type="email" required />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
          <Textarea label="Message:" placeholder="Your message" id="message" name="message" cols={40} rows={7} required />
          <Button type="submit" disabled={state.submitting}>Submit</Button>
        </form>
      </Box>
    </>
  );
};

export default ContactFormComponent;
