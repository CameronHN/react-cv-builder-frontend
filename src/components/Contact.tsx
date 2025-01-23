import { Button, Box, Anchor } from "@mantine/core";
import { FaPhone, FaLinkedin, FaAt } from "react-icons/fa6";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {

  const [state, handleSubmit] = useForm("mrbegknk");

  // Display a thank you message and redirect to the homepage
  if (state.succeeded) {
    return <>
      <p>Thank you for your message! I'll get to you very soon.</p>
      <p>Redirecting to the home page in 5 seconds...</p>
      <meta http-equiv="refresh" content="5;url=/" />
    </>
  }

  return (
    <>
      <h2>Reach out to me!</h2>

      {/* Using Mantine's anchor component to link to the appropriate sites */}

      {/* Link to the phone link */}
      <Anchor href="https://www.google.com" target="_blank">
        <Button variant="default" leftSection={<FaPhone size={14} />}>  Phone</Button>
      </Anchor>

      {/* Link to the LinkedIn */}
      <Anchor href="https://www.linkedin.com" target="_blank">
        <Button variant="default" leftSection={<FaLinkedin size={14} />}>  LinkedIn</Button>
      </Anchor>

      {/* Link to the email */}
      <Anchor href="https://www.google.com" target="_blank">
        <Button variant="default" leftSection={<FaAt size={14} />}>   Email</Button>
      </Anchor>

      <h2>Or pop me a message!</h2>

      {/* Contact form */}
      <Box maw={500} mx={"auto"}>
        <form onSubmit={handleSubmit} action="https://formspree.io/f/mrbegknk" method="POST">
          <label htmlFor="name">
            Your Name:
          </label>
          <br />
          <input id="name" name="name" required />
          <br />
          <label htmlFor="email">
            Email:
          </label>
          <br />
          <input id="email" name="email" type="email" required />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
          <br />
          <label htmlFor="message">
            Your message:
          </label>
          <br />
          <textarea
            id="message"
            name="message"
            cols={40}
            rows={7}
            required
          />
          <br />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </Box>
    </>
  );
};

export default Contact