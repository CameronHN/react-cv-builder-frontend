import { ISocialMedia } from "../interfaces/ISocialMedia";
import { FaPhone, FaLinkedin, FaAt } from "react-icons/fa6";

export const socialMediaData: ISocialMedia[] = [
  {
    name: "Phone",
    link: "https://www.google.com",
    icon: FaPhone,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    link: "https://www.google.com",
    icon: FaAt,
  }
];
