import ContactFormComponent from "./ContactFormComponent";
import SocialMediaComponent from "./SocialMediaComponent";
import { socialMediaData } from "../data/socialMediaData";

const Contact = () => {
  return (
    <>
      {/* Social media links component */}
      <SocialMediaComponent data={socialMediaData} />

      {/* Contact form */}
      <ContactFormComponent />
    </>
  );
};

export default Contact;
