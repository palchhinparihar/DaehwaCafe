import { FaEnvelope, FaLinkedin, FaInstagram, FaMobile } from "react-icons/fa";

export const socialLinks = [
  {
    href: ["mailto:daehwacafe@gmail.com", "mailto:daehwacafeinfo@gmail.com"],
    icon: FaEnvelope,
    title: "Mail Us",
    username: ["daehwacafe@gmail.com", "daehwacafeinfo@gmail.com"],
    ariaLabel: "Send email to DAEHWA Cafe",
  },
  {
    href: "https://www.linkedin.com/in/daehwa-cafe-0346313b9/",
    icon: FaLinkedin,
    title: "LinkedIn", 
    username: "daehwa-cafe-0346313b9",
    ariaLabel: "Visit DAEHWA Cafe's LinkedIn profile",
  },
  {
    href: ["https://www.instagram.com/daehwacafe_community/", "https://www.instagram.com/daehwacafe.talkroom/"],
    icon: FaInstagram,
    title: "Instagram",
    username: ["daehwacafe_community", "daehwacafe.talkroom"],
    ariaLabel: "Visit DAEHWA Cafe's Instagram profile",
  },

  {
    href: ["tel:+918447708224", "tel:+918796068845"],
    icon: FaMobile,
    title: "Phone Number",
    username: ["+91 8447708224", "+91 8796068845"],
    ariaLabel: "Visit DAEHWA Cafe's phone number",
  },
];