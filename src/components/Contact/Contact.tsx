import ContactFormComponent from "./ContactFormComponent";
import SocialMediaComponent from "../SocialMedia/SocialMediaComponent";
import { socialMediaData } from "../../data/socialMediaData";

const Contact: React.FC = () => {
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
