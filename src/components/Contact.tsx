import { useForm } from "@mantine/form";
import { TextInput, Textarea, Button, Box } from "@mantine/core";
import { FaPhone, FaLinkedin, FaAt } from "react-icons/fa6";

const Contact = () => {

  // Use a Mantine form for the message submission
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validate: {
      name: (value) => (value.trim().length != 0 ? null : "Name is required."),
      // Test to check if the provided email is valid
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email format."),
      message: (value) => (value.trim() ? null : "Message is required."),
    },
  });

  const handleSubmit = () => {
    alert("Your message has been sent!");
    form.reset();
  };

  return (
    <>
      <h2>Reach out to me!</h2>

      <a href="https://www.google.com" target="_blank"><Button variant="default" leftSection={<FaPhone size={14} />}>  Phone</Button></a>
      <a href="https://www.linkedin.com" target="_blank"><Button variant="default" leftSection={<FaLinkedin size={14} />}>  LinkedIn</Button></a>
      <a href="https://www.google.com" target="_blank"><Button variant="default" leftSection={<FaAt size={14} />}>  Email</Button></a>

      <h2>Or pop me a message!</h2>

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