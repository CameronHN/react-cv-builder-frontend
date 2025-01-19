import { useForm } from "@mantine/form";
import { TextInput, Textarea, Button, Box } from "@mantine/core";

const Contact = () => {

  // Use a Mantine form for the message submission
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validate: {
      name: (value) => (value.trim() ? null : "Name is required."),
      // Test to check if the provided email is valid
      email: (value) => /^\S+@\S+$/.test(value) ? null : "Invalid email format.",
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

      <p><a href="#" target="_blank">Telephone</a> | <a href="https://linkedin.com" target="_blank">LinkedIn</a> | <a href="#">Email</a></p>

      <h2>Or pop me a message!</h2>

      <Box maw={500} mx={"auto"}>
        <form id="contact-form" onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput label="Name:" placeholder="Your name" {...form.getInputProps("name")} />
          <TextInput label="Email:" placeholder="Your email" mt="md" {...form.getInputProps("email")} />
          <Textarea label="Message:" placeholder="Your message" mt="md" rows={7} cols={40} {...form.getInputProps("message")} />
          <Button type="submit" mt="md">Submit</Button>
        </form>
      </Box>
    </>
  );
};

export default Contact