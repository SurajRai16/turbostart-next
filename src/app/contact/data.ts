// import { mail, phone } from "@/assets";

interface contactItem {
  icon?: string;
  details?: string;
}

export const ContactDetails: contactItem[] = [
  { icon: "/images/contact/mail.svg", details: "info@turbostart.co" },
  { icon: "/images/contact/phone.svg", details: "+91 - 97425 25103" },
  // { icon: location, details: "Bengaluru, Karnataka  India" },
];

export const contactForm = [
  {
    name: "firstName",
    type: "text",
    placeholder: "First Name",
  },
  {
    name: "lasttName",
    type: "text",
    placeholder: "Last Name",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    className: "col-span-full",
  },
  {
    name: "phone",
    type: "number",
    placeholder: "Phone",
    className: "col-span-full",
  },
  {
    name: "message",
    type: "text",
    placeholder: "Message",
    className: "col-span-full",
  },
];
