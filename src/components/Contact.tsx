import { useForm } from "@mantine/form";
import { TextInput, Textarea, Button, Box, Anchor } from "@mantine/core";
import { FaPhone, FaLinkedin, FaAt } from "react-icons/fa6";

const Contact = () => {

  // Initialise the form with Mantine's useForm hook
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    // Validation functions for the input fields
    validate: {
      name: (value) => (value.trim().length != 0 ? null : "Name is required."),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email format."),
      message: (value) => (value.trim().length != 0 ? null : "Message is required."),
    },
  });

  // Display a message and reset the form when the form is complete and submitted
  const handleSubmit = () => {
    alert("Your message has been sent!");
    form.reset();
  };

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
        <form id="contact-form" onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput label="Name:" placeholder="Your name" key={form.key('name')} withAsterisk {...form.getInputProps("name")} />
          <TextInput label="Email:" placeholder="Your email" key={form.key('email')} mt="md" withAsterisk {...form.getInputProps("email")} />
          <Textarea label="Message:" placeholder="Your message" key={form.key('message')} required mt="md" rows={7} cols={40} {...form.getInputProps("message")} />
          <Button type="submit" mt="md">Submit</Button>
        </form>
      </Box>
    </>
  );
};

export default Contact